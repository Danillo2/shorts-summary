const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não é um short.")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoId] = params.split("?si")

  content.textContent = "Obtendo o texto do áudio..."
})
