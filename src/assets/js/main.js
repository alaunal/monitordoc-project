import LazyLoad from 'vanilla-lazyload';

window.addEventListener('load', () => {
  const modules = document.querySelectorAll('[data-module]');

  modules.forEach((node) => {
    let moduleName = node.dataset.module;

    switch (moduleName) {
      case 'datatables':
        import('./modules/datatables').then((module) => {
          module.default(node);
        });
        break;

      case 'tabs':
        import('./modules/tabs').then((module) => {
          module.default(node);
        });
        break;

      case 'chart':
        import('./modules/chart').then((module) => {
          module.default(node);
        });
        break;

      case 'dropdown':
        import('./modules/dropdown').then((module) => {
          module.default(node);
        });
        break;

      case 'modals':
        import('./modules/modals').then((module) => {
          module.default(node);
        });
        break;

      case 'alert':
        import('./modules/alert').then((module) => {
          module.default(node);
        });
        break;

      default:
        console.log('module not found!');
        break;
    }
  });

  // -- LazyLoad Init
  new LazyLoad({
    elements_selector: '.lazy',
  }).update();
});
