import { useEffect } from "react"
import "./header.scss"

const Navbar = () => {
  const indicatorMovement = (indicator, aLink) => {
    const navRectX = document.querySelector("nav").getBoundingClientRect().x

    indicator.style.transform = `translateX(${
      aLink.getBoundingClientRect().x - navRectX - 5
    }px)`

    indicator.style.width = `${aLink.offsetWidth + 10}px`
  }

  useEffect(() => {
    const listNav = document.querySelectorAll("nav ul li")
    const indicator = document.querySelector(".indicator")
    const getActiveLink = document.querySelector("nav ul li .active")

    listNav.forEach((a) => {
      //onclick function from {a} element
      a.childNodes[0].addEventListener("click", (e) => {
        listNav.forEach((el) => {
          el.children[0].classList.remove("active")
        })
        e.target.classList.add("active")

        //smooth transition for anchor link behaviour
        e.preventDefault()
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })

    //set default indicator position
    indicatorMovement(indicator, getActiveLink)
  }, [])

  useEffect(() => {
    var lastScrolltop = 0
    const header = document.querySelector("header")
    const headerHeight = header.offsetHeight
    const sections = document.querySelectorAll("section")
    const indicator = document.querySelector(".indicator")

    window.addEventListener("scroll", () => {
      var scrollTop = window.scrollY || document.documentElement.scrollTop

      // if (scrollTop > headerHeight) {
      //   header.classList.add("with-backdrop-filter")
      //   console.log("log1");
      // } else {
      //   header.classList.remove("with-backdrop-filter")
      //   console.log("log2");
      // }

      if (scrollTop > lastScrolltop) {
        header.style.position = "sticky"
        header.style.top = `-${headerHeight}px`
      } else {
        header.style.top = 0
        header.style.position = "sticky"
        if (scrollTop > headerHeight) {
          header.classList.add("with-backdrop-filter")
        } else {
          header.classList.remove("with-backdrop-filter")
        }
      }
      lastScrolltop = scrollTop

      //change position of an indicator when scrolling
      sections.forEach((sec) => {
        let secTop = sec.getBoundingClientRect().top
        let secAttrId = sec.getAttribute("id")

        if (secTop >= 0 && secTop <= headerHeight) {
          if (secAttrId !== null) {
            document.querySelector("a.active").classList.remove("active")
            let activeLink = document.querySelector(`a[href='#${secAttrId}']`)
            activeLink.classList.add("active")
            indicatorMovement(indicator, activeLink)
          }
        }
      })
    })
  }, [])

  return (
    <>
      <section id="home"></section>
      <header className="header">
        <div className="header-content">
          <div className="logo">Logo</div>
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
        </div>
      </header>
    </>
  )
}

export default Navbar
