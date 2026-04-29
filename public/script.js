document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      message.textContent = "Thank you for subscribing! You will receive future updates.";
      form.reset();
    });
  }
});