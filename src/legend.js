console.log('legend');
function legend() {
    const wrapper = document.querySelector('#myTabContent');
    wrapper.innerHTML = '';
    const h2 = document.createElement("h2");
    h2.textContent = "The Restaurant legend";
    h2.style.cssText = " text-align: center; color: seashell;";
    wrapper.appendChild(h2);
    const legend = document.createElement("div");
    legend.innerHTML = `
  <p>Café Pushkin is one of Moscow’s legends. The restaurant opened on June 4, 1999 – although many people are
      sure it
      has always been there.
      In the 1780s, a St. Petersburg nobleman in the service of Empress Catherine the Great retired from the Royal
      Household and moved to Moscow. There he decided to build a house and invited architects from Italy.
      Well-versed
      in Russian taste and with a keenly honed feeling for Muscovite architectural style, the Italians built a
      baronial Baroque mansion a la russe. Baroque details run throughout the interiors of the building. The house
      passed to a German aristocrat in the middle of the 19th century as part of his future wife’s dowry. Yet
      financial ruin forced the new owner to open a pharmacy in the building. To this end, the building was
      replanned.
  </p>`;
    legend.style.cssText =
      " text-align: center; margin-left: auto;margin-right: auto; line-height: 20px;width: 36em;line-height: 1.5; color: seashell;";
    wrapper.appendChild(legend);
  }
  
  export { legend };
  