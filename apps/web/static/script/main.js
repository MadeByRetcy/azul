{
  // Azul Icon Loader Script

  // TODO: remove this and make a proper CSS file for it
  const style = document.createElement('style');
  style.textContent = `
  span[class*="az-ico:"] {
      background-color: currentColor; 
      width: 1em;
      height: 1em;
      display: inline-block;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: contain;
      mask-size: cover;
  }
  `;
  document.head.appendChild(style);

  // Regex to match class names starting with "az-ico:" no matter where they are in the class list
  const regex = /\baz-ico:\S+/;

  /**
   * Applies icon data URI to a given `<span></span>` element.
   * @param {*} element - The DOM element to apply styling to.
   */
  const applyIconStyle = (element) => {
    if (element.tagName === "SPAN" && regex.test(element.className)) {
          const match = element.className.match(regex);
          if (match) {
              const iconName = match[0].split(':')[1];
              // TODO: Dynamic URL based on environment (Localhost vs Production)
              const url = `https://azul.msharf.in/registry/fetch?ic=${iconName}`;
              // Using webkitMaskImage for compatibility 
              element.style.webkitMaskImage = `url(${url})`;
              element.style.maskImage = `url(${url})`;
          }
      }
  };

  // Initial application on existing spans
  document.querySelectorAll('span').forEach(applyIconStyle);

  // Observe DOM changes to apply styles to newly added spans with az-ico prefix
  const domLookup = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          applyIconStyle(node);
          node.querySelectorAll?.('span').forEach(applyIconStyle);
        }
      });
    });
  });

  // Initiate the MutationObserver
  domLookup.observe(document.body, { childList: true, subtree: true });
}