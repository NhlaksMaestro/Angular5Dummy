import {Component, Input, Output, EventEmitter} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-comments',
  styleUrls: ['input-comments.component.scss'],
  templateUrl: 'input-comments.component.html',
})
export class InputCommentsComponent {
  @Input() Comments: string;
  @Output() CommentsOnChange = new EventEmitter();
  change(newValue) {
    console.log('newvalue', newValue)
    this.Comments = newValue;
    this.CommentsOnChange.emit(newValue);
  }
}