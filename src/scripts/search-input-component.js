// To do: search funcitonality

customElements.component = 'search-input-component';

if (!customElements.get(customElements.component)) {
  class SearchInput extends HTMLElement {
    constructor() {
      super();
      this.btn = this.querySelector('button');
      this.trendingSearches = this.querySelectorAll('.trending-searches a');
      this.form = this.querySelector('form');
      this.input = this.querySelector('input');
      this.trendingSearchesClick = this.trendingSearchesClick.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    init() {
      this.addEventListeners();
    }

    addEventListeners() {
      this.form.addEventListener('submit', this.onFormSubmit);
      this.trendingSearches.forEach((trendingSearch) => {
        trendingSearch.addEventListener('click', this.trendingSearchesClick);
      });
    }

    trendingSearchesClick(e) {
      e.preventDefault();
      const searchText = e.target.textContent;
      this.input.value = searchText;
    }

    // Form submit event comes here
    onFormSubmit(e) {
      e.preventDefault();
    }

    connectedCallback() {
      this.init();
    }
  }

  customElements.define(customElements.component, SearchInput);
};