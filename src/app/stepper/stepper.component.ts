import {
  Component,
  ElementRef,
  Input,
  SimpleChange,
  Type,
  ViewChild,
} from '@angular/core';
import { SgdsStepper } from 'clk-web-components';
import {
  PersonalDetailsComponent,
  IPersonalDetails,
} from '../personal-details/personal-details.component';
import { StepperDirective } from '../stepper.directive';
import { StepperItem } from '../stepper-item';
import { AddressComponent } from '../address/address.component';
import { ReviewComponent } from '../review/review.component';

export interface IDetails extends IPersonalDetails {
  address: '';
}
@Component({
  selector: 'stepper-component',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  @ViewChild('stepper')
  stepper?: ElementRef<SgdsStepper>;
  stepMetadata: StepperItem[] = [
    {
      stepHeader: 'Personal Details',
      component: PersonalDetailsComponent,
    },
    {
      stepHeader: 'Address and Contact Information',
      component: AddressComponent,
    },
    {
      stepHeader: 'Review',
      component: ReviewComponent,
    },
  ];
  activeStep: number = 0;
  @ViewChild(StepperDirective, { static: true })
  stepperComponentHost!: StepperDirective;

  ngOnInit(): void {
    this.loadComponent();
  }
  details: IDetails = {
    firstName: '',
    lastName: '',
    address: '',
  };

  loadComponent() {
    const stepComponent = this.stepMetadata[this.activeStep];
    const viewContainerRef = this.stepperComponentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(
      stepComponent.component
    );
    const component = componentRef.instance as
      | PersonalDetailsComponent
      | AddressComponent;
    component.newInputEvent.subscribe(
      (e) => (this.details = { ...this.details, ...e })
    );
    component.details = this.details;
  }
  loadReviewComponent() {
    const stepComponent = this.stepMetadata[this.stepMetadata.length - 1];
    const viewContainerRef = this.stepperComponentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(
      stepComponent.component
    );
    const component = componentRef.instance as ReviewComponent;
    component.finalDetails = this.details;
  }
  updateActiveStep() {
    this.activeStep = this.stepper?.nativeElement.activeStep!;
    this.activeStep === this.stepMetadata.length - 1
      ? this.loadReviewComponent()
      : this.loadComponent();
  }
  nextStep() {
    this.stepper?.nativeElement.nextStep();
    this.updateActiveStep();
  }
  prevStep() {
    this.stepper?.nativeElement.previousStep();
    this.updateActiveStep();
  }
  reset() {
    this.stepper?.nativeElement.reset();
    this.updateActiveStep();
  }
  lastStep() {
    this.stepper?.nativeElement.lastStep();
    this.updateActiveStep();
  }
  firstStep() {
    this.stepper?.nativeElement.firstStep();
    this.updateActiveStep();
  }
}
