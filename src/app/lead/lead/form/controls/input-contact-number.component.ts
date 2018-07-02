import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-contact-number',
  styleUrls: ['input-contact-number.component.scss'],
  templateUrl: 'input-contact-number.component.html',
})
export class InputContactNumberComponent {
  @Input() ContactNumber: string;
  @Output() ContactNumberOnChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue)
    this.ContactNumber = newValue;
    this.ContactNumberOnChange.emit(newValue);
  }
}