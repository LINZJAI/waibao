const appModel = {
  wih: document.documentElement.clientHeight
}

window.onresize = () => {
  appModel.wih = document.documentElement.clientHeight
  window.app.$emit('resize')
}

export default appModel
