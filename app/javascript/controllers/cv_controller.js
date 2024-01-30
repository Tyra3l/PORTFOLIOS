import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cv"
export default class extends Controller {
  connect() {
    this.positionButton();
    window.addEventListener("scroll", () => this.positionButton());
  }
  positionButton() {
    const downloadButton = this.element;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    downloadButton.style.top = `${scrollY + windowHeight / 2}px`;
  }
}
