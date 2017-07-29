import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-actions',
  templateUrl: './person-actions.component.html',
  styleUrls: ['./person-actions.component.css']
})
export class PersonActionsComponent implements OnInit {
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
