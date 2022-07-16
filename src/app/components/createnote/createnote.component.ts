import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  @Input() item = '';
  @Output() changeCompoents: EventEmitter<any> = new EventEmitter();
  content: any = "";
  title: any = "";
  email: any = "";
  id: any = "";
  type: boolean = true;
  constructor(
    private auth: AuthenticationService,
    private journal: JournalService
  ) {
    this.auth.getUserData().then((data) => {
      this.email = JSON.parse(data['value']).email;
    })

  }

  ngOnInit() {
    if (this.item) {
      this.type = false;
      this.id = this.item['id'];
      this.title = this.item['title'];
      this.content = this.item['content'];
    }
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

  editNotes(data_id) {
    let data = {
      id: data_id,
      email: this.email,
      title: this.title,
      content: this.content
    }
    this.journal.updateNotes(data).subscribe(item => {
      console.log(item);
    }, error => {
      console.log(error);
    })
  }

  deleteNotes(data_id) {
    let data = {
      id: data_id,
      email: this.email,
    }
    this.journal.deleteNotes(data).subscribe(item => {
      console.log(item);
      this.closeModel();
    }, error => {
      console.log(error);
    })
  }


  closeModel() {
    this.changeCompoents.emit({ type: 'notes' });
  }
}
