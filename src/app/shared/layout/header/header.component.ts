import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ukwazi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input() expandHeader: string;
  @Output() headerClosed = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    // console.log('LeftSideBarComponent width = ' + this.expandLeftSideBar);
  }
  ngOnInit() {
    // this.mainContentMarginLeft = this.leftSideBarWidth;
  }

  closeHeader() {
    this.expandHeader = ``;
    this.headerClosed.emit(this.expandHeader);
  }

}
