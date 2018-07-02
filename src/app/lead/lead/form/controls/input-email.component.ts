import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-email',
  styleUrls: ['input-email.component.scss'],
  templateUrl: 'input-email.component.html',
})
export class InputEmailComponent {
  @Input() Email: FormControl;
  @Output() EmailOnChange = new EventEmitter<FormControl>();
  constructor(){
    this.Email = new FormControl(this.Email, [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")//,
      // Validators.email]
    ])
  }
  change(newValue) {
    console.log('newvalue', newValue)
    this.Email = newValue;
    this.EmailOnChange.emit(newValue);
  }
}