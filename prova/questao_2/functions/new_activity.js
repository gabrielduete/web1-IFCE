let listActivity = document.getElementById("#listActivity");
const btnAddActivity = document.getElementById('#btnAddActivity');

btnAddActivity.addEventListener("click", (e) => {
    const inputTitleActivity = document.getElementById('#title');
    const inputDescriptionActivity = document.getElementById('#description');
    
    const valorTitulo = inputTitleActivity.value;
    const valorDescricao = inputDescriptionActivity.value;

    addNewActivity(valorTitulo, valorDescricao);
});


function gerarID() {
    return Math.floor(Math.random() * 200);
}

function addNewActivity(tituloTarefa, descricaoTarefa) {
    let div = createTagDiv(tituloTarefa, descricaoTarefa);
    listActivity.appendChild(div);
    inputTitleActivity.value = "";
    inputDescriptionActivity.value = "";

}

function createTagDiv(tituloTarefa, descricaoTarefa) {

    let div = document.createElement("div");


    let h3 = document.createElement("h3");
    h3.classList.add("titleCard");
    h3.innerHTML = tituloTarefa;


    let h4 = document.createElement("h4");
    h4.classList.add("descriptionCard");
    h4.innerHTML = descricaoTarefa;


    div.appendChild(h3);
    div.appendChild(h4);

    return div;

}