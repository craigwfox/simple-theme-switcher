class ThemeSwitcher extends HTMLButtonElement {
  constructor() {
    super();

    // Bind this
    this.swap = this.swap.bind(this);
    this.ariaLabel = this.ariaLabel.bind(this);

    // get Attrs
    this.classPrefix = this.getAttribute("classPrefix");
    this.mode1 = this.getAttribute("modes")
      .split(",")
      .map((index) => index.trim())[0];
    this.mode2 = this.getAttribute("modes")
      .split(",")
      .map((index) => index.trim())[1];

    // Dom elements
    this.body = this.closest("body");

    this.addEventListener("click", this.swap);
  }

  ariaLabel(state) {
    this.setAttribute("aria-label", `${state} mode`);
  }

  swap() {
    if (this.current === this.mode1) {
      this.current = this.mode2;
      this.ariaLabel(this.mode1);
      this.body.classList.add(`${this.classPrefix + this.mode2}`);
      this.body.classList.remove(`${this.classPrefix + this.mode1}`);
    } else {
      this.current = this.mode1;
      this.ariaLabel(this.mode2);
      this.body.classList.add(`${this.classPrefix + this.mode1}`);
      this.body.classList.remove(`${this.classPrefix + this.mode2}`);
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
