/**
 * set login status
 *
 * @param {String} status
 * @returns
 */
export const setLoginStatus = (status) => {
  localStorage.setItem("login_status", status);
  return;
};

/**
 * get login status
 *
 * @returns {Boolean}
 */
export const getLoginStatus = () => {
  const login_status = localStorage.getItem("login_status");
  return JSON.parse(login_status);
};

/**
 * set username
 *
 * @param {String} username
 * @returns
 */
export const setUsername = (username) => {
  localStorage.setItem("username", username);
  return;
};

/**
 * get username
 *
 * @returns {String}
 */
export const getUsername = () => {
  const user = localStorage.getItem("username");
  return user;
};
