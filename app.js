const inputName = document.querySelector("#input-name");
const inputSubmit = document.querySelector("#input-submit");
const form = document.querySelector("#formm");

inputSubmit.addEventListener("click", function(){
    let value = inputName.value;
    if (value == ''){
        form.innerHTML += `<p style="color:red;">Preencha os campos acima</p>`
    }
})