function getComponent() {
  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');
      element.innerHTML = _.join(['hello', 'webpack', 'print']);
      return element;
    })
    .catch((error) => 'err')
}

getComponent().then((component) => {
  document.body.appendChild(component);
})
 