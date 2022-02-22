class ThemeSwitcher extends HTMLButtonElement {
  constructor() {
    super();

    // Bind this
    this.swap = this.swap.bind(this);
    this.ariaLabel = this.ariaLabel.bind(this);

    // get Attrs
    this.dataAttr = this.getAttribute("dataAttr");
    this.mode1 = this.getAttribute("modes")
      .split(",")
      .map((index) => index.trim())[0];
    this.mode2 = this.getAttribute("modes")
      .split(",")
      .map((index) => index.trim())[1];

    // Dom elements
    this.body = this.closest("body");

    // checks if a default has been set on the body
    if (this.body.getAttribute("data-theme")) {
      this.current = this.body.getAttribute("data-theme");
    }

    // sets the click listener to fire the swap function
    this.addEventListener("click", this.swap);
  }

  ariaLabel(state) {
    this.setAttribute("aria-label", `${state} mode`);
  }

  // Swaps the theme, setting an attribute on the body and a label on the button
  swap() {
    if (this.current === this.mode1) {
      this.current = this.mode2;
      this.ariaLabel(this.mode1);
      this.body.setAttribute(this.dataAttr, `${this.mode2}`);
    } else {
      this.current = this.mode1;
      this.ariaLabel(this.mode2);
      this.body.setAttribute(this.dataAttr, `${this.mode1}`);
    }
  }

  static get observedAttributes() {
    return ["current"];
  }

  get current() {
    return this.getAttribute("current");
  }

  set current(val) {
    return this.setAttribute("current", val);
  }
}
customElements.define("theme-switcher", ThemeSwitcher, { extends: "button" });
