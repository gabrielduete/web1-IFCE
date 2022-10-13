import { cards, items } from "./Selects.data.js"

var validate = true
var atived = false

var value
var parcel

const container = document.createElement("section")
container.className = "containerSelects"

const Inputs = (contain) => {
  const inputValue = document.createElement("input")
  const inputParcel = document.createElement("input")
  inputValue.type = "number"
  inputParcel.type = "number"
  inputParcel.min = "0"
  inputParcel.max = "12"

  const textInputValue = document.createElement("div")
  textInputValue.innerHTML = "R$ Valor"
  const textInputParcel = document.createElement("div")
  textInputParcel.innerHTML = "Qtd. Parcelas"

  const wrapperValue = document.createElement("div")
  wrapperValue.appendChild(textInputValue)
  wrapperValue.appendChild(inputValue)

  const wrapperParcel = document.createElement("div")
  wrapperParcel.appendChild(textInputParcel)
  wrapperParcel.appendChild(inputParcel)

  const wrapperInputs = document.createElement("div")
  wrapperInputs.className = "wrapperInputs"
  wrapperInputs.appendChild(wrapperValue)
  wrapperInputs.appendChild(wrapperParcel)

  inputValue.addEventListener("keyup", () => {
    value = parseInt(inputValue.value)
  })

  inputParcel.addEventListener("keyup", () => {
    parcel = parseInt(inputParcel.value)
  })

  contain.appendChild(wrapperInputs)
}

const Modal = (contain) => {
  const container = document.createElement("div")
  const modal = document.createElement("section")

  container.className = "background-modal"
  modal.className = "modal"

  const titleModal = document.createElement("h1")
  titleModal.innerHTML = "Opções de parcelamento"

  const table = document.createElement("table")
  const trTitle = document.createElement("tr")
  const tdValue = document.createElement("td")
  const tdParcel = document.createElement("td")

  tdValue.innerHTML = "Valor"
  tdParcel.innerHTML = "Parcela"

  trTitle.appendChild(tdValue)
  trTitle.appendChild(tdParcel)
  table.appendChild(trTitle)

  for (let i = 1; i < parcel + 1; i++) {
    let tr = document.createElement("tr")
    let tdValueResult = document.createElement("td")
    let tdParcelResult = document.createElement("td")

    if (parcel > 5) {
      let fees = value * 0.1
      value += fees
    }

    tdValueResult.innerHTML =
      i > 5
        ? `${(value / i).toFixed(2)} + 10% de juros`
        : (value / i).toFixed(2)
    tdParcelResult.innerHTML = i
    tr.appendChild(tdValueResult)
    tr.appendChild(tdParcelResult)

    table.appendChild(tr)
    modal.appendChild(table)
  }

  modal.appendChild(titleModal)
  modal.appendChild(table)
  container.appendChild(modal)

  contain.appendChild(container)
}

const Result = (app) => {
  const container = document.createElement("footer")
  const button = document.createElement("button")

  button.innerHTML = "Ver parcelamento"

  button.addEventListener("click", () => {
    Modal(app)
  })

  container.appendChild(button)

  app.appendChild(container)
}

const ShowItems = (contain, index) => {
  const container = document.createElement("section")
  container.className = "containerItem"

  const wrapper = document.createElement("div")
  wrapper.className = "wrapperItem"

  const { srcImage, description } = items[index]

  const image = document.createElement("img")
  const infos = document.createElement("div")

  image.src = srcImage

  description.map((e) => {
    const text = document.createElement("p")
    text.innerHTML = e

    infos.appendChild(text)
  })

  wrapper.appendChild(image)
  wrapper.appendChild(infos)
  container.appendChild(wrapper)
  Inputs(container)

  if (validate) {
    atived && contain.removeChild(contain.lastChild)
    contain.appendChild(container)
    validate = false
    atived = false
  } else {
    contain.removeChild(contain.lastChild)
    contain.appendChild(container)
    atived = true
    validate = true
  }
}

const createTitle = (container, text) => {
  const title = document.createElement("h1")

  title.innerHTML = text

  container.appendChild(title)
}

const createIcon = (container, className) => {
  const icon = document.createElement("i")

  icon.className = className

  container.appendChild(icon)
}

const containCard = (contain, name, icon) => {
  const containerCard = document.createElement("div")

  containerCard.className = "cards"

  createIcon(containerCard, icon)
  createTitle(containerCard, name)

  containerCard.addEventListener("click", () => {
    if (name === "Notebook") {
      ShowItems(container, 0)
    } else if (name === "Celular") {
      ShowItems(container, 1)
    } else {
      ShowItems(container, 2)
    }
  })

  contain.appendChild(containerCard)
}

const Cards = (app) => {
  const container = document.createElement("section")

  container.className = "containCards"

  cards.forEach(({ name, icon }) => {
    containCard(container, name, icon)
  })

  app.appendChild(container)
}

const Selects = (app) => {
  Cards(container)
  Result(app)

  app.appendChild(container)
}

export default Selects
