const input_user = document.querySelector("#user-input");
const label_result = document.querySelector("#result");
const btn_criptografar = document.querySelector("#criptografar");
const btn_descriptografar = document.querySelector("#descriptografar");
const btn_copiar = document.querySelector("#copiar");
const text = input_user.value.toLowerCase();

btn_criptografar.addEventListener("click", function () {
  const text = input_user.value.toLowerCase();
  console.log(text);
  let result = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  label_result.value = result;
});

btn_descriptografar.addEventListener("click", function () {
  const text = input_user.value.toLowerCase();
  let result = text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  label_result.value = result;
});

btn_copiar.addEventListener("click", function () {
  navigator.clipboard.writeText(label_result.value);
});
