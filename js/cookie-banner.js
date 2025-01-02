// Функція для перевірки, чи користувач уже прийняв кукі
function checkCookiesConsent() {
  return localStorage.getItem("cookiesAccepted");
}

// Відображає банер, якщо користувач не прийняв кукі
function showCookieBanner() {
  if (!checkCookiesConsent()) {
    document.getElementById("cookie-banner").classList.add("show");
  }
}

// Функція для приховування банера та збереження вибору користувача
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").classList.remove("show");
}

// Додаємо подію на кнопку прийняття кукі
document
  .getElementById("accept-cookies")
  .addEventListener("click", acceptCookies);

// Викликаємо функцію для перевірки кукі при завантаженні сторінки
document.addEventListener("DOMContentLoaded", showCookieBanner);
