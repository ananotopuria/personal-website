class WebsiteSection extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById("website-section-template");
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("website-section", WebsiteSection);
