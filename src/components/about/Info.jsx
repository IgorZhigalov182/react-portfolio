import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award'></i>
            <h3 className='about__title'>Experience</h3>
            <span className="about__subtitle">5 month</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt'></i>
            <h3 className='about__title'>Completed</h3>
            <span className="about__subtitle">2 projects</span>
        </div>

        {/* <div className="about__box">
            <h3 className='about__title'>Support</h3>
            <span className="about__subtitle"></span>
        </div> */}
    </div>
  )
}

export default Info