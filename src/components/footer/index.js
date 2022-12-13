import "./footer.scss"

//icons
import { FaReact } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <footer id="footer" className="footer-section">
          <div>
            <div>
              <span>Built with</span>
              <span>
                <FaReact style={{width: "20px", height: "20px"}} />{" "}
              </span>
              <span> ReactJS</span>
            </div>
            <div>
              <span>Copyright © 2022 </span>
              <span>
                <a href="#home">Michael David</a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
