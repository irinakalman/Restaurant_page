console.log('contact');
function contact() {
    const wrapper = document.querySelector('#myTabContent');
    wrapper.innerHTML = '';
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Details";
    h2.style.cssText = " text-align: center; color: seashell;";
    wrapper.appendChild(h2);
    const contact = document.createElement("div");
    contact.innerHTML = `
  <p>Dear Guests,

  Café Pushkin is delighted to accept your provisional table reservations up to 8 p.m. After 8 p.m., we invite our guests to arrive without reservations. This can sometimes occasion a short wait in our bar area until a table comes free. We would also like to thank our guests for observing the dress-code of no sportswear in the Library Hall.
  </p>
  <p>26-A Tverskoy Boulevard, Moscow, Russia
  Telephone:+7 (495) 186-49-53
  </p>`;
    contact.style.cssText =
      " text-align: center; margin-left: auto;margin-right: auto; line-height: 20px;width: 36em;line-height: 1.5; color: seashell;";
    wrapper.appendChild(contact);
  }
  
  export { contact };