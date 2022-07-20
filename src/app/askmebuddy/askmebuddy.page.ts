import { Component, OnInit } from '@angular/core';
import { AskmebuddyService } from '../services/askmebuddy.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-askmebuddy',
  templateUrl: './askmebuddy.page.html',
  styleUrls: ['./askmebuddy.page.scss'],
})
export class AskmebuddyPage implements OnInit {
  ionicForm: FormGroup;
  email: String;
  adminToken: any;
  questionMsg: any;
  loader: any = false;
  all_data_rec: any;
  constructor(
    private fb: FormBuilder,
    private askbuddyService: AskmebuddyService,
    private authenticationService: AuthenticationService,
    public loadingController: LoadingController
  ) {
    this.fetchAnswerData();
    this.authenticationService.getUserData().then(item => {
      this.email = JSON.parse(item['value']).email;
    })

    // this.authenticationService.getAdminToken().subscribe(item => {
    //   this.adminToken = item['data']['token'];
    // })
    this.adminToken = environment.admin_token;
    this.ionicForm = this.fb.group({
      questionInput: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {


  }


  async fetchAnswerData() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.askbuddyService.askQuestionAnswer(this.email).subscribe(async item => {
      this.all_data_rec = item
      await loading.dismiss();
    }, async error => {
      console.log(error);
      await loading.dismiss();
    })
  }


  submitForm() {
    let data = { email: this.email, user_message: this.ionicForm.value.questionInput };
    this.loader = true;
    this.askbuddyService.askQuestion(data, this.adminToken).subscribe(item => {
      this.questionMsg = '';
      this.loader = false;
      setTimeout(() => {
        this.fetchAnswerData();
      }, 1000)
    })
  }
  doRefresh(event) {
    this.askbuddyService.askQuestionAnswer(this.email).subscribe(async item => {
      this.all_data_rec = item;
      console.log(item);
      event.target.complete();
    }, async error => {
      console.log(error);
      event.target.complete();
    })


  }

}
