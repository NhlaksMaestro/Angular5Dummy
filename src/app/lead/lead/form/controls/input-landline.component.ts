import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-landline',
  styleUrls: ['input-landline.component.scss'],
  templateUrl: 'input-landline.component.html',
})
export class InputLandlineComponent {
  @Input() Landline: string;
  @Output() LandlineOnChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue)
    this.Landline = newValue;
    this.LandlineOnChange.emit(newValue);
  }
}