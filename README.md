# sgds-stepper and Angular

This repository is an example on how to use sgds-web-component's Stepper component with Angular

## Child Components

The stepper example has three steps and each step has its own component

Step 1: PersonalDetailsComponent
Step 2: AddressComponent
Step 3: ReviewComponent

The first step is to build your components individually. These three components will be the direct child of StepperComponent

## Parent Component

The parent component here is StepperComponent. This is where all the state will be managed and should persist. This component should capture and store any user input.
In this application example, StepperComponents holds the state `details`

```js
interface IDetails {
  firstName: string;
  lastName: string;
  address: string;
}
```

## Dynamically rendering of child components

Whenever the step changes, the view of the components is expected to change.
Use [angular's dynamic component](https://angular.io/guide/dynamic-component-loader) loader to do that in the parent i.e. StepperComponent

Setup the stepper's metadata and it into sgds-stepper's step prop.

```jsx
//stepper.component.ts
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
  ...
```
```html
//stepper.component.html
<sgds-stepper [steps]="stepMetadata"></sgds-stepper>
```

## Parent listens to child event emitter

To obtain user input data from child. You need to setup event emitters in your child and listen it from the parent component. See [Angular's Input and Output](https://angular.io/guide/inputs-outputs)

See personal-details.component.ts or address-details.component.ts file for example 

From parent, listen to the event emission and subscribe to it to obtain the emitted value. Store the updated data inside the parent component.


## Stackblitz example 

See this working example on stackblitz: https://stackblitz.com/github/clukhei/angular-stepper
