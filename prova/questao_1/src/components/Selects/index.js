import { cards, items } from "./Selects.data.js"

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

const containCard = (container, name, icon) => {
  const containerCard = document.createElement("div")

  containerCard.className = ""

  createTitle(containerCard, name)
  createIcon(containerCard, icon)

  container.appendChild(containerCard)
}

const Selects = (app) => {
  const container = document.createElement("section")

  container.className = "containCards"

  cards.map(({ name, icon }) => {
    containCard(container, name, icon)
  })

  app.appendChild(container)
}

export default Selects
