import { Component, Input } from '@angular/core';
import { IDetails } from '../home/home.component';

@Component({
  selector: 'review-component',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
 
  @Input() finalDetails: IDetails = {
    firstName: "",
    lastName: "",
    address: ""
  }
  handleToggle () {
    console.log('side effect action on toggle ')
  }
}
