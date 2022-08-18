class Expand extends HTMLElement {
  #currentValue = false;

  set #value(val) {
    this.#currentValue = val;
    this.update();
  }

  static get observedAttributes() {
    return ['visibility'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'visibility') {
      this.update();
    }
  }

  constructor() {
    super();

    this._childrenRead = false;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHtml = `<slot></slot>`;
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);

    const container = document.createElement('p');
    this.valSpan = document.createElement('span');
    const expand = document.createElement('button');

    expand.innerText = '>';
    expand.addEventListener('click', () => {
      this.#value = !this.#currentValue;
    });

    container.appendChild(expand);

    container.appendChild(this.valSpan);

    container.appendChild(document.createElement('br'));

    this.container = container;
    this.template = template;
    this.shadowContainer = shadowRoot;
  }

  connectedCallback() {
    this.shadowContainer.appendChild(this.container);

    if (!this._childrenRead) {
      this._childrenRead = true;

      if (this.hasChildNodes()) {
        const els = Array.from(this.childNodes);
        console.log('there are nodes', {
          els,
        });
        els.forEach((el) => {
          this.valSpan.appendChild(el);
        });
      } else {
        console.log('NO nodes');
      }
    }

    this.update();
  }

  update() {
    this.valSpan.style.visibility = this.#currentValue ? 'visible' : 'hidden';
  }
}

if (!customElements.get('expand-wc')) {
  customElements.define('expand-wc', Expand);
}
