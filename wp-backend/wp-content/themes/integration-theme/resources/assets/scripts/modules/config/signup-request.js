const configSignupRequest = {
  configTo: "mbolonha@studiovisual.com.br",
  configSubject: "Pedido de Cadastro",
  configBody: "Email enviado por meio do site",
  configHeadersFrom:
    "From: Número 1 Seguros Teste <mbolonha@studiovisual.com.br>",
  configHeadersCC: "Cc: The Bolonha <miltonbolonha@gmail.com>",
  ajax_url: "/wp-admin/admin-ajax.php",
  redirect: "/",
  errorElement: "modal-message-error-nope",
  successElement: "message-success",
  successMsg: `<h2 style="font-size:24px;color:#3CB195">Mensagem enviada com sucesso!</h2>
  <p style="font-size:14px; color:#58595B">
    Geralmente nossos consultores demoram cerca de <strong>4 à 8h</strong> para entrar em contato por e-mail ou telefone.
  </p>
  <p style="font-size:14px; color:#58595B">
  <strong>Qualquer dúvida, fale conosco através do nosso canal via <span style="color:#EBBA1F">WhatsApp</span></strong>
  </p>`,
  errorMsg:
    "Autorização negada, verifique as suas credenciais e tente novamente.",
  action: "signup_request",
  submitFormBtn: "sign-up-btn",
  form: "sign-up-form",
  contactNameId: "nomeCompleto",
  phoneNumberId: "telNo",
  businessEmailId: "emailEmpresa",
  businessNameId: "nomeEmpresa",
  businessCountryRegisterId: "dadosEmpresa",
  contactMessageId: "mensagemEmpresa",
  inputsId:
    "nomeCompleto telNo emailEmpresa nomeEmpresa dadosEmpresa mensagemEmpresa",
};

export default configSignupRequest;
