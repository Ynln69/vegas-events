function checkCookiesConsent() {
  return localStorage.getItem("cookiesAccepted");
}

function showCookieBanner() {
  if (!checkCookiesConsent()) {
    document.getElementById("cookie-banner").classList.add("show");
  }
}

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").classList.remove("show");
}

document
  .getElementById("accept-cookies")
  .addEventListener("click", acceptCookies);

document.addEventListener("DOMContentLoaded", showCookieBanner);
