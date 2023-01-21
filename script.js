const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("dia já incluso ❌")
    return
  }

  alert("adicionado com sucesso! ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("data@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("data@habits"))
nlwSetup.setData(data)
nlwSetup.load() || {}
