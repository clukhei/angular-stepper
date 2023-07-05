# Angular and Sgds web components workshop

## Web components

- History of web components?
  In 2011, Web Components were introduced for the first time by Alex Russell at Fronteers Conference.[14]

In 2013, Polymer, a library based on Web Components was released by Google.[15]

In 2017, Ionic (mobile app framework) team built StencilJS, a JavaScript compiler that generates Web Components.[16]

In 2018, Angular 6 introduced Angular Elements that lets you package your Angular components as custom web elements, which are part of the web components set of web platform APIs.

In 2018, Firefox 63 enabled Web Components support by default and updated the developer tools to support them.[17]

In 2018, Lit Element was developed by the Google Chrome team as part of larger Polymer project. Lit Element was designed to be a lightweight and easy-to-use framework for
creating web components.

In 2020: Chromium Microsoft Edge
https://caniuse.com/?search=web%20components

- What defines a Web component

1. Custom elements
   - Custom Elements. Quite simply, these are fully-valid HTML elements with custom templates, behaviors and tag names (e.g. <one-dialog>) made with a set of JavaScript APIs. Custom Elements are defined in the HTML Living Standard specification.
2. Shadow DOM
   - encapsulation for both markup and styles.
3. HTML templates

Demo on Shadow Dom and Light Dom

- Cannot query elements in the shadowdom: document.querySelector("div[variant=card-action]")
- Can query elements in the light dom: document.querySelector("span[slot=card-subtitle]")
- Can query elements if you use shadow dom api : document.querySelector("sgds-action-card[type=radio]").shadowRoot.querySelector("div[variant=card-action]")

- Can style light doms

  ```css
  span[slot="card-subtitle"] {
    color: red;
  }
  ```

- Cannot style shadow doms

```css
p.card-text {
  color: red;
}
```

# Content projection : <slot></slot> vs <ng-content>

## Angular

```html
<h2>Multi-slot content projection</h2>

Default:
<ng-content></ng-content>

Question:
<ng-content select="[question]"></ng-content>
`
```

Usage:

```html
<app-zippy-multislot>
  <p question>Is content projection cool?</p>
  <p>Let's learn about content projection!</p>
</app-zippy-multislot>
```

## Web components

```html
<sgds-button>
  <slot></slot>
  <slot name="icon"></slot>
</sgds-button>
```

Usage:

```html
<sgds-button> Hello <span slot="icon">mock icon</span></sgds-button>
```


# Events 

# Attribute binding

# Styling 

# Form 

# 
