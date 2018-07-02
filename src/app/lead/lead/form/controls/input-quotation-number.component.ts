import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-quotation-number',
  styleUrls: ['input-quotation-number.component.scss'],
  templateUrl: 'input-quotation-number.component.html',
})
export class InputQuotationNumberComponent implements OnInit {
  // @Input() LeadFormGroup: FormGroup;
  // QuoteNumber: any;
  // @Input() QuoteNumberValue: any;
  // @Output() QuoteNumberOnChange = new EventEmitter();
  ngOnInit(){
  //   this.LeadFormGroup.addControl('quoteNumber', new FormControl(this.QuoteNumberValue, [
  //     Validators.required,
  //     // Validators.pattern("[^ @]*@[^ @]*")       
  //   ]));
    
  //   // this.QuoteNumber = this.LeadFormGroup.get('quoteNumber');
  }
  // constructor(){
  //   // this.QuoteNumber = 
  //   //this.formControl('quoteNumber');
  //   // this.LeadFormGroup.addControl('quotenumber', this.QuoteNumber)
    
   
  // }
  // change(newValue) {
  //   // this.QuoteNumber = newValue;
  //   this.QuoteNumberOnChange.emit(newValue);
  // }

  // private formControl(controlName: string): any {
  //   // console.log("controlName = " + controlName);
  //   return this.LeadFormGroup.get(controlName);
  // }
  // getErrorMessage(controlName: string) {
  //   return this.LeadFormGroup.get('quotenumber').hasError('required') ? `You must enter a value` :
  //   this.LeadFormGroup.get('quotenumber').hasError(controlName) ? `Not a valid quote number` :
  //       '';
  // }
}