import { useEffect } from "react"
import "./header.scss"

const Navbar = () => {
  const defaultIndicator = (indicator, getActiveLink, aIndex, h, listNav) => {
    //set default Indicator
    var _bool = false
    if (h !== "")
      listNav.forEach((el) => {
        const ael = el.children[0]
        ael.classList.remove("active")

        if (ael.getAttribute("href").toUpperCase() === h.toUpperCase()) {
          ael.click()
          _bool = true
        }
      })

    if (_bool) return

    getActiveLink.classList.add("active")
    indicator.style.transform = `translateX(${
      getActiveLink.getBoundingClientRect().x - aIndex.getBoundingClientRect().x
    }px)`
    indicator.style.width = `${getActiveLink.offsetWidth + 10}px`
  }

  useEffect(() => {
    const h = window.location.hash

    console.log("useeffect")
    const listNav = document.querySelectorAll("nav ul li")
    const indicator = document.querySelector(".indicator")

    const getActiveLink = document.querySelector("nav ul li .active")
    const aIndex = listNav[0]
    //set default indicator

    //add funtion to move the indicator when click
    listNav.forEach((a) => {
      a.childNodes[0].addEventListener("click", (e) => {
        //onclick function from {a} element
        listNav.forEach((el) => {
          el.children[0].classList.remove("active")
        })
        e.target.classList.add("active")
        var rect = e.target.getBoundingClientRect()
        //move the indicator by position of current active element
        indicator.style.transform = `translateX(${
          rect.x - aIndex.getBoundingClientRect().x
        }px)`
        indicator.style.width = `${e.target.offsetWidth + 10}px`
        console.log(e.target.offsetWidth)
      })
    })
    defaultIndicator(indicator, getActiveLink, aIndex, h, listNav)
  }, [])

  return (
    <>
      <header className="header">
        <nav>
          <ul id="navigation" data-visible="true" className="navigation">
            <div className="indicator"></div>
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
