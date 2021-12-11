const configLogin = {
  ajax_url: "/wp-admin/admin-ajax.php",
  redirect: "/",
  form: "login-form-ajax",
  button: "wp-submit",
  on: "submit",
  action: "login_init",
  userWarn: "É favor inserir usuário ou e-mail",
  pwdWarn: "É favor inserir a senha",
  userInput: "email-input",
  passwordInput: "password-input",
  successMsg: "Redirecionando para o sistema.",
  errorMsg:
    "Autorização negada, verifique as suas credenciais e tente novamente.",
  errorElement: "message-error",
  successElement: "message-success",
};

export default configLogin;
