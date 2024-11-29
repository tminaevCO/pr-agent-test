// Potentially this component should be as import for main wishlist component. 
// Doesn't have any logic yet. Just a console.log on click event.

customElements.component = 'wishlist-btn';

if (!customElements.get(customElements.component)) {
  class WishListBtn extends HTMLElement {
    constructor() {
      super();
      this.btn = this.querySelector('button');
    }

    init() {
      this.addEventListener();
    }

    onClick() {
      console.log('Wishlist button clicked');
    }

    addEventListener() {
      this.btn.addEventListener('click', this.onClick);
    }

    connectedCallback() {
      this.init();
    }
  }

  customElements.define(customElements.component, WishListBtn);
};