module.exports = function ({ addComponents, theme }) {
  const containers = theme('containers', {}); // Get container breakpoints from the Tailwind theme
  const userStyles = theme('debugContainers.style', {}); // Allow user-defined styles
  const prefix = theme('debugContainers.prefix', 'container: '); // Label prefix
  const selector = theme('debugContainers.selector', '[class*="@container"]'); // Target elements with `@container`

  const components = {
    // Make all `@container` elements `relative` for debug label positioning
    [selector]: {
      position: 'relative',
    },
    // Base styles for the debug label
    [`${selector}::before`]: Object.assign(
      {
        position: 'absolute',
        top: '0',
        left: '0',
        padding: '.3333333em .5em',
        fontSize: '12px',
        lineHeight: '1',
        fontFamily: 'sans-serif',
        backgroundColor: '#000',
        color: '#fff',
        boxShadow: '0 0 0 1px #fff',
        zIndex: '2147483647',
        content: `'${prefix}_'`, // Placeholder content, updated via container queries
      },
      userStyles
    ),
  };

  // Add container-specific rules using `@container`
  Object.entries(containers).forEach(([container, size]) => {
    components[`@container (min-width: ${size})`] = {
      [`${selector}::before`]: {
        content: `'${prefix}${container} (${size})'`, // Dynamic label for container
      },
    };
  });

  addComponents(components);
};
