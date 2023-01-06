import React from 'react'
import './qualitification.css'

const Qulitification = () => {
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expirience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web design</h3>
                <span className='qualification__subtitle'>LETI SPB</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Leti
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Enginer</h3>
                <span className='qualification__subtitle'>LETI SPB</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Leti
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web dev</h3>
                <span className='qualification__subtitle'>LETI SPB</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Leti
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Enginer 2</h3>
                <span className='qualification__subtitle'>LETI SPB</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - 2022 Kulak
                </div>
              </div>

              
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product designer</h3>
                <span className='qualification__subtitle'>Microsoft</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Leti
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Enginer 3 cat</h3>
                <span className='qualification__subtitle'>Gidra</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2022 - Leti
                </div>
              </div>

              
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web makaka</h3>
                <span className='qualification__subtitle'>kul</span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i>
                  2021 - Leti
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

  )
}

export default Qulitification