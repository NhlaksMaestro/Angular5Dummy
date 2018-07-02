import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ukwazi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  @Input() expandFooter: string;
  @Output() footerClosed = new EventEmitter<string>();

  constructor(fb: FormBuilder) {
    // console.log('LeftSideBarComponent width = ' + this.expandLeftSideBar);
  }
  ngOnInit() {
    // this.mainContentMarginLeft = this.leftSideBarWidth;
  }

  closeFooter() {
    this.expandFooter = ``;
    this.footerClosed.emit(this.expandFooter);
  }

}
