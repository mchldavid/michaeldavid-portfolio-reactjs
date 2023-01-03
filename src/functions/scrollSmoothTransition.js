export const scrollSmoothTransition = (e, href) => {
  //smooth transition for anchor link behaviour
  e.preventDefault()
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  })
}