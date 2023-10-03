import { AfterViewInit, Component, ElementRef, Type, ViewChild } from '@angular/core';
import { SgdsStepper } from '@govtechsg/sgds-web-component/components';
import { AddressComponent } from '../address/address.component';
import {
  IPersonalDetails,
  PersonalDetailsComponent,
} from '../personal-details/personal-details.component';
import { ReviewComponent } from '../review/review.component';
import { StepperItem } from '../stepper-item';
import { StepperDirective } from '../stepper.directive';

export interface IDetails extends IPersonalDetails {
  address: '';
}
@Component({
  selector: 'stepper-component',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements AfterViewInit {
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

  ngAfterViewInit() {
    // after stepper is set
    const componentRef = this.loadComponent();
    componentRef.changeDetectorRef.detectChanges();
  }

  details: IDetails = {
    firstName: '',
    lastName: '',
    address: '',
  };

  loadComponent() {
    const stepComponent = this.stepper?.nativeElement.getComponent() as Type<unknown>;
    const viewContainerRef = this.stepperComponentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(stepComponent);

    const component = componentRef.instance as
      | PersonalDetailsComponent
      | AddressComponent;
    component.newInputEvent.subscribe(
      (e) => (this.details = { ...this.details, ...e })
    );
    component.details = this.details;
    return componentRef;
  }
  loadReviewComponent() {
    const stepComponent = this.stepper?.nativeElement.getComponent() as Type<unknown>;
    const viewContainerRef = this.stepperComponentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(stepComponent);
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
    this.details = {
      firstName: '',
      lastName: '',
      address: '',
    };

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
