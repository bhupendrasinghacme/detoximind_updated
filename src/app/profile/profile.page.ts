import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { UserupdateServiceService } from '../services/userupdate-service.service';
import { MustMatch } from '../helper/must-match.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  images: any;
  // @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  updateForm: FormGroup;
  changeData: FormGroup;
  user_Data: any;
  edit_form: boolean = false;
  change_form: boolean = false;
  profile_view: boolean = true;

  email: string;
  firstname: string;
  lastname: string;
  imageData: any;
  adminToke: any;
  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private userupdateService: UserupdateServiceService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private fb: FormBuilder,
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      first_name: [''],
      last_name: ['']
    });

    this.changeData = this.fb.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]]
    }, {
      validator: MustMatch('new_password', 'confirm_password')
    }
    );
    this.authService.getUserData().then(item => {
      this.user_Data = JSON.parse(item.value);
      // console.log(item.value)
      // this.userupdateService.getUserData(this.user_Data.id).subscribe(item => {
      this.email = this.user_Data.email;
      this.firstname = this.user_Data.firstName;
      this.lastname = this.user_Data.lastName;
      // });
    })
  }


  editForm() {
    this.change_form = false;
    this.profile_view = false;
    this.edit_form = true;
  }

  changeForm() {
    this.edit_form = false;
    this.profile_view = false;
    this.change_form = true;
  }
  async chengePassword() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'lines-sharp'
    });
    await loading.present();

    this.authService.jounalLogin({ username: this.email, password: this.changeData.value.old_password }).subscribe(item => {
      let userData = { password: this.changeData.value.new_password };
      console.log(this.changeData.value.old_password);
      this.userupdateService.updateUserProfile(this.user_Data.id, userData).subscribe(async item => {
        console.log("item=====>", item);
        await loading.dismiss();
        this.changeData.reset();
        this.presentToast("Change User password Successfully.");
        this.closeEditor();
      }, error => {
        console.log(error)
      });

    }, async error => {
      await loading.dismiss();
      this.presentToast("old password is not correct.");
    })
  }

  async UpadateUser() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.userupdateService.updateUserProfile(this.user_Data.id, this.updateForm.value).subscribe(async item => {
      console.log("item=====>", item);
      await loading.dismiss();
      this.presentToast("User Successfully Updated.");
      this.user_Data.email = item.email;
      this.user_Data.firstName = item.first_name;
      this.user_Data.lastName = item.last_name;
      this.authService.updateUserData(this.user_Data);
      this.closeEditor();
    }, async error => {
      await loading.dismiss();
      console.log(error);
    })
  }

  closeEditor() {
    this.edit_form = false;
    this.profile_view = true;
    this.change_form = false;
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }


  get old_password() {
    return this.changeData.get('old_password');
  }
  get new_password() {
    return this.changeData.get('new_password');
  }
  get confirm_password() {
    return this.changeData.get('confirm_password');
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
