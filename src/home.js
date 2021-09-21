console.log("home");

function home() {
    const wrapper = document.querySelector('#myTabContent');
    wrapper.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = "Cafe Pushkin";
    h1.style.cssText = 'text-align: center; color: floralwhite;font-family: -webkit-body;font-weight: bold;'; 
    wrapper.appendChild(h1);
    const h3 = document.createElement('h3');
    h3.textContent = "In the heart of Moscow";
    h3.style.cssText = 'color: grey; text-align: center; margin-top: 30px; font-weight: 300;color: whitesmoke;'; 
    wrapper.appendChild(h3);
}

export { home };
