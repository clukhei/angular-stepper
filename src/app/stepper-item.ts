import { Type } from '@angular/core';

export class StepperItem {
  constructor(public component: Type<any>, public stepHeader: string) {}
}
