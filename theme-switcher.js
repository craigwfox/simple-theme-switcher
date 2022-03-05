class ThemeSwitcher extends HTMLButtonElement {
  constructor() {
    super();

    // Bind this
    this.swap = this.swap.bind(this);
    this.ariaLabel = this.ariaLabel.bind(this);

    // get Attrs
    this.dataAttr = this.getAttribute("dataAttr");
    this.modes = this.getAttribute("modes")
      .split(",")
      .map((mode) => mode.trim());

    // Dom elements
    this.body = document.querySelector("body");

    // checks if a default has been set on the body
    if (this.body.getAttribute(this.dataAttr)) {
      this.current = this.body.getAttribute(this.dataAttr);
    }

    if (localStorage.getItem(this.dataAttr)) {
      this.current = localStorage.getItem(this.dataAttr);

      setTimeout(() => {
        const { modeOn, modeOff } = this.checkMode();

        this.setTheme(modeOn, modeOff);
      }, 10);
    }

    // sets the click listener to fire the swap function
    this.addEventListener("click", this.swap);
  }

  ariaLabel(state) {
    this.setAttribute("aria-label", `${state} mode`);
  }

  // Checks for the current mode and returns an object of the on and off modes
  checkMode() {
    return {
      modeOn: this.current === this.modes[0] ? this.modes[0] : this.modes[1],
      modeOff: this.current != this.modes[0] ? this.modes[0] : this.modes[1],
    };
  }

  // Sets the aria label and the body attr
  setTheme(modeOn, modeOff) {
    this.ariaLabel(modeOff);
    this.body.setAttribute(this.dataAttr, modeOn);
  }

  // Swaps the theme, setting an attribute on the body and a label on the button
  swap() {
    const { modeOn, modeOff } = this.checkMode();

    this.current = modeOff; // set's the current to the off mode to swap
    this.setTheme(modeOff, modeOn);
    localStorage.setItem(this.dataAttr, this.current); // set's the localStorage to the new current
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
