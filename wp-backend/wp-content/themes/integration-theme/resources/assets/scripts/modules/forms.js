export default class Forms {

  constructor() {
    this.forms = document.querySelectorAll('form');

    for(var i = 0; i < this.forms.length; i++)
      this.forms[i].addEventListener('submit', this.validate, false);
  }

  validate(event) {
    const form = event.target;

    if(!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }

}
