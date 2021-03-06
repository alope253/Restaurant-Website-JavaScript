let tabHeader = document.querySelectorAll('.tabHeader');

tabHeader.forEach((button) => {
    button.onlick = changeTabHeader;
});

function changeTabHeader() {
    let tabNumber = parseInt(this.dataset.tab);

    document.querySelector('.active-tab').classList.remove('active-tab');
    this.classList.add('active-tab');

    switch (tabNumber) {
        case 1:
            changeTebSection(tabNumber);
            break;
        case 2:
            changeTebSection(tabNumber);
            break;
        case 3:
            changeTebSection(tabNumber);
            break;
        case 4:
            changeTebSection(tabNumber);
            break;
        default:
            break;
    }
}

function changeTebSection(tabNumber) {
    let currentTab = document.querySelector('.show-tab');
    currentTab.classList.remove('show-tab');
    currentTab.classList.add('hide-tab');


    let newSection = document.getElementById('tabSection-' + tabNumber);

    newSection.classList.remove('hide-tab');
    newSection.classList.add('show-tab');
}