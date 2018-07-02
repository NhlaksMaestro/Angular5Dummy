import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-client-type',
  templateUrl: 'select-client-type.component.html',
  styleUrls: ['select-client-type.component.scss'],
})
export class SelectClientTypeComponent implements OnInit {
  ClientTypes: any[];
 
  @Input() selectedClientType: string;
  @Output() ClientTypeOnChange = new EventEmitter();

  onSelect(newValue) {
    console.log('newValue = ' + newValue)
    this.ClientTypeOnChange.emit(newValue);
  }
  
  constructor() { 
    this.ClientTypes = [
      { value: '1', viewValue: 'Company' },
      { value: '2', viewValue: 'Church' },
      { value: '3', viewValue: 'Individual' }
    ];
  }

  ngOnInit() {
  }
  
}