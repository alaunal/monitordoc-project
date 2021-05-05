const tabs = (params) => {
  let idTarget = params.dataset.target;
  let navTabs = params.querySelectorAll('.tabs-nav');

  navTabs.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      let activeElement = e.target.classList.contains('active');

      if (!activeElement) {
        let targetNav = e.target;
        let idTab = targetNav.dataset.tab;

        let contentTabsActive = document.querySelector(`${idTarget}>${idTab}`);
        let contentTabs = document.querySelectorAll(`${idTarget} .pane`);

        [].forEach.call(navTabs, function (el) {
          el.classList.remove('active');
        });

        [].forEach.call(contentTabs, function (el) {
          el.classList.remove('active');
        });

        contentTabsActive.classList.add('active');
        targetNav.classList.add('active');
      }
    });
  });

  return true;
};

export default tabs;
