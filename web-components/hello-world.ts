class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1>Hello world!</h1>`;
  }
}
if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorldComponent);
}
