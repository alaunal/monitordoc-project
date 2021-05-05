const modals = (params) => {
  let typeModal = params.dataset.type;

  function collectionHas(a, b) {
    //helper function (see below)
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] == b) return true;
    }
    return false;
  }
  function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while (cur && !collectionHas(all, cur)) {
      //keep going up until you find a match
      cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
  }

  switch (typeModal) {
    case 'submit':
      params.addEventListener('submit', (e) => {
        e.preventDefault();

        let confirmModal = document.querySelector('.c-modals__confirm');

        confirmModal.classList.add('active');
      });
      break;

    case 'close':
      params.addEventListener('click', (e) => {
        e.preventDefault();

        let parentElm = findParentBySelector(params, '.modals-area');

        parentElm.classList.remove('active');
      });

      break;

    default:
      break;
  }
};

export default modals;
