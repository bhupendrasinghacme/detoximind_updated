import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  @Input() item = '';

  content: any;
  title: any;
  email: any;
  constructor(
    private auth: AuthenticationService,
    private journal: JournalService
  ) {
    this.auth.getUserData().then((data) => {
      this.email = JSON.parse(data['value']).email;
    })

  }

  ngOnInit() {
    console.log(this.item);
  }

  addNewNotes() {
    let data = {
      email: this.email,
      title: this.title,
      content: this.content
    }
    this.journal.createNewNotes(data).subscribe(item => {
      console.log(item);
    }, error => {
      console.log(error);
    })
  }
}
