import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'ukwazi-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightSideBarComponent implements OnInit {
  @Input() expandRightSideBar: string;
  @Output() rightSideBarClosed = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    // console.log('RightSideBarComponent width = ' + this.expandRightSideBar);
  }
  ngOnInit() {
  }

  closeRightSideBar() {
    this.expandRightSideBar = ``;
    this.rightSideBarClosed.emit(this.expandRightSideBar);
  }
}
