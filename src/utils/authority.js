// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return localStorage.getItem('antd-pro-authority') || 'admin';
}

export function setAuthority(authority) {
  return localStorage.setItem('antd-pro-authority', authority);
}
export function getUserid() {
  return localStorage.getItem('userid');
}

export function setUserid(userid) {
  return localStorage.setItem('userid', userid);
}
