const actionProfile = document.querySelector(".header-action__profile");
const headerAction = document.querySelector(".header-action");
const overlayAction = document.querySelector(".header-action__overlay");
const action = document.querySelector(".header-action__profile-active");
const profileInfo = document.querySelector(".profile-info");
const bar = document.querySelector(".fa-bars ");
const user = document.querySelector(".fa-user");
const navbar = document.querySelector(".navbar");

action.addEventListener("click", function () {
  profileInfo.classList.add("profile-info__hide");
  overlayAction.classList.add("header-action__overlay-hide");
});

bar.addEventListener("click", function () {
  navbar.classList.add("navbar-hide");
  overlayAction.classList.add("header-action__overlay-hide");
});

overlayAction.addEventListener("click", function () {
  headerAction.classList.remove("header-action__hide");
  profileInfo.classList.remove("profile-info__hide");
  overlayAction.classList.remove("header-action__overlay-hide");
  navbar.classList.remove("navbar-hide");
});

user.addEventListener("click", function () {
  headerAction.classList.add("header-action__hide");
  overlayAction.classList.add("header-action__overlay-hide");
});
