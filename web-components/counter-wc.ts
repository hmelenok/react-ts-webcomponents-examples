class Counter extends HTMLElement {
  #currentValue = 0;

  set #value(val) {
    this.#currentValue = val;
    this.update();
  }

  static get observedAttributes() {
    return ['color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color') {
      this.update();
    }
  }

  increment = 1;

  constructor() {
    super();

    const container = document.createElement('div');

    this.valSpan = document.createElement('span');

    const increment = document.createElement('button');
    increment.innerText = 'Increment';
    increment.addEventListener('click', () => {
      this.#value = this.#currentValue + this.increment;
    });

    container.appendChild(this.valSpan);
    container.appendChild(document.createElement('br'));
    container.appendChild(increment);

    this.container = container;
  }

  connectedCallback() {
    this.appendChild(this.container);
    this.update();
  }

  update() {
    this.valSpan.innerText = this.#currentValue;
    this.valSpan.style.color = this.getAttribute('color') || 'black';
  }
}

if (!customElements.get('counter-wc')) {
  customElements.define('counter-wc', Counter);
}
