const UserInfoKey = 'userInfo120'

export function getUserInfo() {
  return JSON.parse(localStorage.getItem(UserInfoKey || {}))
}

export function setUserInfo(userInfo) {
  return localStorage.setItem(UserInfoKey, JSON.stringify(userInfo))
}

export function removeUserInfo() {
  return localStorage.removeItem(UserInfoKey)
}
