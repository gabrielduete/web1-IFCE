import { cards, items } from "./Selects.data.js"

var validate = true
var atived = false

const container = document.createElement("section")
container.className = "containerSelects"

const Inputs = (contain) => {
  const inputValue = document.createElement("input")
  const inputParcel = document.createElement("input")
  inputValue.type = "number"
  inputParcel.type = "number"

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

  contain.appendChild(wrapperInputs)
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

  app.appendChild(container)
}

export default Selects
