# Tailwind CSS Debug Containers 📱

A Tailwind CSS component that shows the currently active container (responsive breakpoint).

[Demo](https://joren.co/tailwindcss-debug-containers-demo/)

<img src="containershot.png" width="534">

## Install

Requires **Tailwind v1.0** or higher.

1. Install the plugin:

```bash
npm install tailwindcss-debug-containers --save-dev
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  //...
  plugins: [require("tailwindcss-debug-containers")],
};
```

3. Add the class `debug-containers` to your `<body>` tag:

```html
<body class="debug-containers"></body>
```

### Disable in production

#### Laravel

```twig
<body class="{{ app()->isLocal() ? 'debug-containers' : '' }}">
```

#### Craft CMS

```twig
<body class="{{ devMode ? 'debug-containers' : '' }}">
```

## Customization

You can customize this plugin in the `theme.debugContainers` section of your `tailwind.config.js` file.

### Ignore containers

To ignore a specific container (for instance [dark mode](https://tailwindcss.com/docs/dark-mode)), add the container name to the `ignore` configuration array. `dark` is ignored by default.

```js
// tailwind.config.js
module.exports = {
  theme: {
    debugContainers: {
      ignore: ["dark"],
    },
  },
  plugins: [require("tailwindcss-debug-containers")],
};
```

### Position

The first item of the position configuration array can be `top` or `bottom`, the second item can be `left` or `right`.

```js
// tailwind.config.js
module.exports = {
  theme: {
    debugContainers: {
      position: ["bottom", "left"],
    },
  },
  plugins: [require("tailwindcss-debug-containers")],
};
```

### Styles

Take a look at the [index.js](index.js) file to see all the default styles.

```js
// tailwind.config.js
module.exports = {
  theme: {
    debugContainers: {
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
        // ...
      },
    },
  },
  plugins: [require("tailwindcss-debug-containers")],
};
```

### Prefix

Modify the debug label prefix with the `prefix` configuration option.

```js
// tailwind.config.js
module.exports = {
  theme: {
    debugContainers: {
      prefix: "container: ",
    },
  },
  plugins: [require("tailwindcss-debug-containers")],
};
```

### Selector

Modify the debug element selector with the `selector` configuration option.

```js
// tailwind.config.js
module.exports = {
  theme: {
    debugContainers: {
      selector: ".debug-containers",
    },
  },
  plugins: [require("tailwindcss-debug-containers")],
};
```
