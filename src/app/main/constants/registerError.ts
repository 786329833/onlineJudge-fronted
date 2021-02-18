export { RegisterError };

const RegisterError = {
  twoPasswdNotSame: {
    errCode: 1,
    msg: '两次密码不一致',
  },
  accountHasExisted: {
    errCode: 2,
    msg: '账号已存在',
  },
  usernameHasExisted: {
    errCode: 3,
    msg: '用户名已存在'
  },
  constructInvaild: {
    errorCode: 4,
    msg: '请输入由数字、字母、下划线组成的密码(6-16位)'
  }
};
