var campoCep = document.querySelector('#cep')

campoCep.oninvalid = function() {
    this.setCustomValidity('');

    if (!this.validity.valid) {
        this.setCustomValidity('Ops! Tem algo errado nesse campo!');
    }
}