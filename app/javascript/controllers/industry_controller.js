import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="industry"
import Glide from "@glidejs/glide";

export default class extends Controller {
  connect() {
    this.initializeGlide();
  }

  initializeGlide() {
    const glide = new Glide(this.element, {
      type: "carousel",
      startAt: 0,
      perView: 3,
      // Autres options Glide.js
    });

    glide.mount();
  }
  prevSlide() {
    this.glide.go("<");
  }

  nextSlide() {
    this.glide.go(">");
  }
}
