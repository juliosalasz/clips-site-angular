import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit {
  //for getting the title string from the auth modal
  @Input() tabTitle = '';
  @Input() active = false;

  constructor() {}

  ngOnInit(): void {}
}
