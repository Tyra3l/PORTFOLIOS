import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["description"];

  connect() {
    // Initial state setup, if needed
  }

  fire(event) {
    console.log(event.currentTarget);

    this.descriptionTargets.forEach((description) => {
      description.classList.add("d-none");
    });

    const descriptionId = event.currentTarget.dataset.descriptionTarget;
    const correspondingDescription = this.descriptionTargets.find((description) => description.id === descriptionId);

    if (correspondingDescription) {
      correspondingDescription.classList.remove("d-none");
    }
  }
}
