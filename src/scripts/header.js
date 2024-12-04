customElements.component = 'section-header';

if (!customElements.get(customElements.component)) {
  class Header extends HTMLElement {
    constructor() {
      super();
    }

    init() {

    }
  }

  customElements.define(customElements.component, Header);
};