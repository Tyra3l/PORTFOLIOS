import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="recaptcha"
export default class extends Controller {
  connect() {
    grecaptcha.ready(() => {
      grecaptcha.execute('6LeiFF0pAAAAAMrlDCksWHEJiEKBB_oiRngkEQra', { action: 'submit' }).then((token) => {
        this.element.value = token;
      });
    });
  }
}
