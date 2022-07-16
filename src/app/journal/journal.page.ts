import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  segmentModel: any = 'note';
  email: any;
  data: any;
  constructor(
    private journalService: JournalService,
    private auth: AuthenticationService
  ) {
    this.auth.getUserData().then(itm => {
      this.email = JSON.parse(itm['value']).email;
      this.getDataAll(this.email);
    })
  }

  ngOnInit() {

  }
  segmentChanged(evt: any) {
    this.segmentModel = evt.detail.value;
  }

  getDataAll(email) {
    this.journalService.getTextNotes(email).subscribe(item => {
      this.data = item;
    });
  }

}
