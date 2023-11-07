const iconCloseLogin = document.getElementById("icon-close");
const iconCloseForm = document.getElementById("close_form");

console.log(iconCloseLogin);

iconCloseForm.addEventListener("click", () => {
	history.back();
});

iconCloseLogin.addEventListener("click", () => {
	console.log("I AM ACTIVE");
	history.back();
});
