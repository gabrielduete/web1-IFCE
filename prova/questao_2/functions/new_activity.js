let inputTitleActivity = document.getElementById('#title');
let inputDescriptionActivity = document.getElementById('#description');
let btnAddActivity = document.getElementById('#btnAddActivity');
let listActivity = document.getElementById("#listActivity");

if (inputTitleActivity)
    inputTitleActivity.addEventListener("keypress", (e) => {

        let tituloTarefa = {
            nome: inputTitleActivity.value,
            id: gerarID(),
        }

        console.log(tituloTarefa.nome);

    });

if (inputDescriptionActivity)
    inputDescriptionActivity.addEventListener("keypress", (e) => {

        let descricaoTarefa = {
            nome: inputDescriptionActivity.value,

        }
    });

if (btnAddActivity)
    btnAddActivity.addEventListener("click", (e) => {


        // let tituloTarefa = {
        //     nome: inputTitleActivity.value,
        //     id: gerarID(),
        // }

        // let descricaoTarefa = {
        //     nome: inputDescriptionActivity.value,
        // }

        console.log(tituloTarefa.id, descricaoTarefa.value);

        addNewActivity(tituloTarefa, descricaoTarefa);
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
    h3.innerHTML = tituloTarefa.value;


    let h4 = document.createElement("h4");
    h4.classList.add("descriptionCard");
    h4.innerHTML = descricaoTarefa;


    div.appendChild(h3);
    div.appendChild(h4);

    return div;

}