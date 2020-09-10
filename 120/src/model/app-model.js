const appModel = {
  wih: document.documentElement.clientHeight
};

window.onresize = () => {
  appModel.wih = document.documentElement.clientHeight;
};

export default appModel;
