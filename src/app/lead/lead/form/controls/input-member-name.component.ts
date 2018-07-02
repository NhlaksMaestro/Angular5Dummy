import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-member-name',
  styleUrls: ['input-member-name.component.scss'],
  templateUrl: 'input-member-name.component.html',
})
export class InputMemberNameComponent {
  @Input() MemberName: string;
  @Output() MemberNameOnChange = new EventEmitter();
  change(newValue) {
    console.log('MemberNamenewvalue', newValue)
    this.MemberName = newValue;
    this.MemberNameOnChange.emit(newValue);
  }
}