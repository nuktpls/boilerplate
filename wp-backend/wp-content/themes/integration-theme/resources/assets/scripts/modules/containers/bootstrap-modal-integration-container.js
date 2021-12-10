window.bootstrap = require("bootstrap");
const modalIntegration = (config) => {
  if (document.readyState !== "loading") {
    var documentModal = new bootstrap.Modal(
      document.getElementById(config.modalTermsId)
    );
    documentModal.show();
  }
};

export default modalIntegration;
