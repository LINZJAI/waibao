const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.baseUser.token,
  avatar: state => state.baseUser.avatar,
  name: state => state.baseUser.name
}
export default getters
