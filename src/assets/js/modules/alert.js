const alert = (params) => {
  let close = params.querySelector('.c-alert__close');

  close.addEventListener('click', (e) => {
    e.preventDefault();

    params.remove();
  });
};

export default alert;
