# Theme switcher

A small web component for switching themes. I've tried to make it fairly flexible and barebones. There are some minor styles included that you can manually add to your project.

- Github: [https://github.com/craigwfox/simple-theme-switcher](https://github.com/craigwfox/simple-theme-switcher)
- NPM: [https://www.npmjs.com/package/simple-theme-switcher](https://www.npmjs.com/package/simple-theme-switcher)

## Usage

```HTML
<link rel="stylesheet" href="./node_modules/simple-theme-switcher/styles.css" />

<button is="theme-switcher"
  modes="light, dark"
  dataAttr="data-theme"
  current="light"
  aria-label="Change to dark mode"
  aria-live="polite">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</button>

<script src="./node_modules/simple-theme-switcher/simple-theme-switcher.js"></script>
```

## Todo

- LocalStorage for the prefs
- Maybe swap to checkboxes (this needs more research on what is better)
