import React from "react"
import Footer from "./components/footer/Footer"

//components
import Header from "./components/header/Header"
import Main from "./components/main/Main"

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
