import React from "react"

//components
import Header from "./components/header/"
import Main from "./components/sections/Main"
import Footer from "./components/footer/"

const App = () => {
  return (
    <>
      <div className="app-main">
          <Header />
          <Main />
          <Footer />
      </div>
    </>
  )
}

export default App
