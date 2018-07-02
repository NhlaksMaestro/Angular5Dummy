import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-member-number',
  styleUrls: ['input-member-number.component.scss'],
  templateUrl: 'input-member-number.component.html',
})
export class InputMemberNumberComponent {
  @Input() MemberNumber: string;
  @Output() MemberNumberOnChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue)
    this.MemberNumber = newValue;
    this.MemberNumberOnChange.emit(newValue);
  }
}