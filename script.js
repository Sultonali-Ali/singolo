

window.onload = () => {

    changeHeaderMenuHandler();

};

const changeHeaderMenuHandler = () => {
    document.querySelector('.header__navigation .navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__item')) {
            let clickedMenuTab = e.target;
            scrollToClickedSection();
            removeSelectedTab();
            selectClickedMenuTab(clickedMenuTab);
        }

    });

};

const removeSelectedTab = () => {
  document.querySelectorAll('.header__navigation .navigation__item').forEach(menuTab => {
      menuTab.classList.remove('navigation__item--active');
  })
};

const selectClickedMenuTab = (clickedMenuTab) => {
    clickedMenuTab.classList.add('navigation__item--active');
};

const scrollToClickedSection = () => {
    const anchors = document.querySelectorAll('a.navigation__item');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
};

