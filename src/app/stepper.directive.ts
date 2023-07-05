import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stepperHost]',
})
export class StepperDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


