// Potentially this component should be as import for main quickview component. 
// Doesn't have any logic yet. Just a console.log on click event.

customElements.component = 'quick-view-btn';

if (!customElements.get(customElements.component)) {
  class QuickViewBtn extends HTMLElement {
    constructor() {
      super();
      this.btn = this.querySelector('button');
    }

    init() {
      this.addEventListener();
    }

    onClick() {
      console.log('Quick View button clicked');
    }

    addEventListener() {
      this.btn.addEventListener('click', this.onClick);
    }

    connectedCallback() {
      this.init();
    }
  }

  customElements.define(customElements.component, QuickViewBtn);
};