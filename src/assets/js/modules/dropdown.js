const dropdown = (params) => {
  params.addEventListener('click', (e) => {
    e.preventDefault();

    let id = e.target.dataset.target;

    let content = document.querySelector(id);
    let dropdownArea = document.querySelectorAll('.dropdown-area');

    dropdownArea.forEach((element) => {
      let idSelect = element.getAttribute('id');

      if ('#' + idSelect != id) {
        element.classList.remove('active');
      }
    });

    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      content.classList.add('active');
    }
  });
};

export default dropdown;
