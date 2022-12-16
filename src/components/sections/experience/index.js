import "./experience.scss"

const Experience = () => {
  return (
    <>
      <div className="experience-bg">
        <section id="experience" className="experience-section">
          <h2>
            My <span>Experience</span>
          </h2>

          <ul class="list">
            <li class="list-item">
              <div class="format-odd">
                <div class="left-content">
                  <div class="calendar-year">2022</div>
                </div>
                <div class="right-content">
                  <div class="logo">
                  <img src={window.location.origin + "/assets/logo/tesi-logo.png"} alt=""></img>
                  </div>
                  <div class="descriptions radius">
                    <div class="years">Jun 2019 - Mar 2022</div>
                    <h6 class="title">Systems Development Specialists</h6>
                    <div class="company-name">
                      Transnational E-Business Solutions Inc.
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="format-even">
                <div class="left-content">
                  <div class="calendar-year">2019</div>
                </div>
                <div class="right-content">
                  <div class="logo">
                    <img src={window.location.origin + "/assets/logo/shoppetown-logo.jpg"} alt=""></img>
                  </div>
                  <div class="descriptions radius">
                    <div class="years">Dec 2018 - Mar 2019</div>
                    <h6 class="title">Internships</h6>
                    <div class="company-name">
                      Shoppetown Property Management and Leasing
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div class="line"></div>
          </ul>
        </section>

        {/* svg line curve */}
        <div className="curve">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M 321.39 56.44 c 58 -10.79 73.61 -13.44 163.61 -35.44 c 36 -8 118 -29 262 7 C 831 49 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 56.44 Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Experience
