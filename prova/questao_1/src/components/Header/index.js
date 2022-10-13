const createTitle = (container) => {
  const title = document.createElement("h1")

  title.innerHTML = "Simulate"

  container.appendChild(title)
}

const Header = (container) => {
  const header = document.createElement("header")

  createTitle(header)

  container.appendChild(header)
}

export default Header
