console.log('Hp')
function nav () {
    const wrapper = document.querySelector('#content');
    const nav = document.createElement('div');
    nav.innerHTML = `

    <div class="tabs-x align-center tabs-above tab-bordered">
        <!-- tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-expanded="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="history-tab" data-bs-toggle="tab" href="#history" role="tab" aria-controls="profile">History</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="legend-tab" data-bs-toggle="tab" href="#legend" role="tab" aria-controls="legend" aria-expanded="true">The Legend</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-expanded="true">Contacts</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    Menu
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" id="dropdown1-tab" href="#dropdown1" role="tab" data-bs-toggle="tab" aria-controls="dropdown1">Seasonal Menu</a>
                    <a class="dropdown-item" id="dropdown2-tab" href="#dropdown2" role="tab" data-bs-toggle="tab" aria-controls="dropdown2">Classic Menu</a>
                </div>
            </li>
        </ul>
        <!-- tab panes -->
        <div class="tab-content" id="myTabContent"></div>
    </div>
    `
    nav.style.cssText = ' text-align: center; justify-content: center; margin-left: auto;margin-right: auto; line-height: 20px;width: 36em;line-height: 1.5;';
    wrapper.appendChild(nav);
};
export { nav }