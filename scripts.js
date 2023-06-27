const magicBtn = document.querySelector("#magicBtn");
const inputContainer = document.querySelector("#inputContainer");
const friendInput = document.querySelector("#friendInput");

const clearPassBtn = document.querySelector("#clearPassBtn");
const showPassBtn = document.querySelector("#showPassBtn");
const hidePassBtn = document.querySelector("#hidePassBtn");
const reappearBtn = document.querySelector("#reappearBtn");

const balrogContainer = document.querySelector("#balrogContainer");

inputContainer.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        reappearBtn.click();
    }
});

function show(el) {
    el.classList.remove("hide");
}

function hide(el) {
    el.classList.add("hide");
}

clearPassBtn.addEventListener("click", function () {
    friendInput.value = "";
});

showPassBtn.addEventListener("click", function () {
        friendInput.type = "text";
        show (hidePassBtn); hide (showPassBtn);
});

hidePassBtn.addEventListener("click", function () {
        friendInput.type = "password";
        hide (hidePassBtn); show (showPassBtn);
});

reappearBtn.addEventListener("click", function () {
    let input = friendInput.value;
    input = input.toUpperCase();

    if (input === "MELLON") {
        inputContainer.classList.add("slideUp");
        balrogContainer.classList.add("slideUp");
        show(balrogContainer);
    } else if (input === "AMIGO") {
        alert("Fale em élfico: a resposta é Mellon");
    }
    friendInput.value = "";
});
