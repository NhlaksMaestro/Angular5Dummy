import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-quotation-date',
  styleUrls: ['input-quotation-date.component.scss'],
  templateUrl: 'input-quotation-date.component.html',
})
export class InputQuotationDateComponent {
  constructor(){
    this.QuoteDate = new Date(1990, 0, 1);
  }
  @Input() QuoteDate: any;
  @Output() QuoteDateOnChange = new EventEmitter();
  change(newValue) {
    console.log('QuoteDatenewvalue', newValue)
    this.QuoteDate = newValue;
    this.QuoteDateOnChange.emit(newValue);
  }
}