let listActivity = document.getElementById("#listActivity");
const btnAddActivity = document.getElementById('#btnAddActivity');
const btnClear = document.getElementById('#btnClear');
const inputTitleActivity = document.getElementById('#title');
const inputDescriptionActivity = document.getElementById('#description');

btnAddActivity.addEventListener("click", (e) => {


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
    div.style.marginTop = "20px";
    div.style.borderRadius = "10px";
    div.style.backgroundColor = generateColor();
    div.style.width = "130px";
    div.style.height="100px";
    div.style.marginRight="15px";
    div.style.marginBottom = "15px";
    div.style.padding = "10px"
    div.style.flexDirection = "column";
    div.style.textOverflow="ellipsis";
    div.style.overflow="hidden";

    let h3 = document.createElement("h3");
    h3.style.fontFamily = "Arial, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    h3.style.color = "#fff";
    h3.style.fontSize = "20px";
    h3.classList.add("titleCard");
    h3.innerHTML = tituloTarefa;

    let h4 = document.createElement("h4");
    h4.style.marginTop = "15px";
    h4.style.fontFamily = "Arial, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    h4.style.color = "#fff";
    h4.style.fontSize = "12px"
    h4.classList.add("titleCard");
    h4.classList.add("descriptionCard");
    h4.innerHTML = descricaoTarefa;


    div.appendChild(h3);
    div.appendChild(h4);

    return div;

}

btnClear.addEventListener("click", (e) => {
    var div = document.getElementById("#listActivity");

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
});

function generateColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }
  
  console.log(generateColor()) // #8432EA

