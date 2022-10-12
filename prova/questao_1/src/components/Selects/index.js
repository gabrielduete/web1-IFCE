import { cards, items } from "./Selects.data.js"

var validate = true
var atived = false

const container = document.createElement("section")

container.className = "containerSelects"

const ShowItems = (contain, index) => {
  const container = document.createElement("section")

  container.className = "containerItem"

  const { srcImage, description } = items[index]

  const image = document.createElement("img")
  const infos = document.createElement("div")

  image.src = srcImage

  description.map((e) => {
    const text = document.createElement("p")
    text.innerHTML = e

    infos.appendChild(text)
  })

  container.appendChild(image)
  container.appendChild(infos)

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

  console.log("atived", atived)
  console.log("validate", validate)
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
