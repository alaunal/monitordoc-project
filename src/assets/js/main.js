import LazyLoad from 'vanilla-lazyload'

window.addEventListener('load', () => {
  const modules = document.querySelectorAll('[data-module]')

  modules.forEach((node) => {
    let moduleName = node.dataset.module

    switch (moduleName) {
      case 'datatables':
        import('./modules/datatables').then((module) => {
          module.default(node)
        })
        break

      case 'tabs':
        import('./modules/tabs').then((module) => {
          module.default(node)
        })
        break

      default:
        console.log('module not found!')
        break
    }
  })

  // -- LazyLoad Init
  new LazyLoad({
    elements_selector: '.lazy',
  }).update()
})
