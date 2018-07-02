import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'ukwazi-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftSideBarComponent implements OnInit {
  @Input() expandLeftSideBar: string;
  @Output() leftSideBarClosed = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    // console.log('LeftSideBarComponent width = ' + this.expandLeftSideBar);
  }
  ngOnInit() {
    // this.mainContentMarginLeft = this.leftSideBarWidth;
  }

  closeLeftSideBar() {
    this.expandLeftSideBar = ``;
    this.leftSideBarClosed.emit(this.expandLeftSideBar);
  }
}
