import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-location',
  templateUrl: 'select-location.component.html',
  styleUrls: ['select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {
  Locations: any[];
 
  @Input() Location: string;
  @Output() LocationOnChange = new EventEmitter();

  select(newValue) {
    console.log('Locationnewvalue', newValue)
    this.Location = newValue;
    this.LocationOnChange.emit(newValue);
  }
  constructor() { 
    this.Locations = [
      { value: '1', viewValue: 'Gauteng' },
      { value: '2', viewValue: 'Eastern Cape' },
      { value: '3', viewValue: 'Western Cape' },
      { value: '4', viewValue: 'Northern Cape' },
      { value: '5', viewValue: 'North West' },
      { value: '6', viewValue: 'Free State' },
      { value: '7', viewValue: 'Mpumalanga' },
      { value: '8', viewValue: 'Kwazulu Natal' },
      { value: '9', viewValue: 'Gauteng' }
    ];
  }

  ngOnInit() {
  }

}