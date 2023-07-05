import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface IPersonalDetails {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
 
 @Input() details : IPersonalDetails = {
  firstName: "",
  lastName: "",
 }

 @Output() newInputEvent = new EventEmitter<IPersonalDetails>();

 handleInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  const key = target.name as keyof IPersonalDetails
  this.details[key] = target.value
  this.newInputEvent.emit(this.details);
}
}
