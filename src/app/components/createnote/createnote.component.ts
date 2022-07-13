import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  description: any;
  title: any;
  constructor() { }

  ngOnInit() { }
  addNewNotes() {
    console.log(this.description)
  }
}
