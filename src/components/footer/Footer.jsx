import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h1 className="footer__title">Igor Zhigalov</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                {/* <li>
                    <a href="#" className="footer__link"></a>
                </li> */}
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/" className="footer__social-link" target='_blank'>
                <i class='uil uil-instagram'></i>
            </a>

            <a href="https://vk.com/" className="footer__social-link" target='_blank'>
                <i class="uil uil-vk"></i>
            </a>

            <a href="https://github.com/IgorZhigalov182" className="footer__social-link" target='_blank'>
                <i class="uil uil-github-alt"></i>
            </a>
            </div>
            <span className='footer__copy'>Portfolio</span>
        </div>
    </footer>
  )
}

export default Footer