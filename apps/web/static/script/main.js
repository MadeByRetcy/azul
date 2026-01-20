{
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

    const regex = /\baz-ico:\S+/;
  
    const applyIconStyle = (element) => {
      if (element.tagName === "SPAN" && regex.test(element.className)) {
            const match = element.className.match(regex);
            if (match) {
                const iconName = match[0].split(':')[1];
                const url = `https://azulflawn.msharf.in/registry/fetch?ic=${iconName}`;
                element.style.webkitMaskImage = `url(${url})`;
                element.style.maskImage = `url(${url})`;
            }
        }
    };
  
    document.querySelectorAll('span').forEach(applyIconStyle);
  
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
  
    domLookup.observe(document.body, { childList: true, subtree: true });
  }