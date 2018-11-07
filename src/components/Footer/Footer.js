import React from "react";
import "./Footer.css";

let Footer =()=>(
      <div className='footer'>
         <div className="footer-div">
                  <p className="footer-copyright">
                        <i class="far fa-copyright"></i> 2018 & All Rights Reserved By Noufou Sawadogo
                  </p>
                  <div className="footer-links">
                        <a className="footer-links-item" target="_blank" rel="noopener noreferrer" href="https://github.com/NoufouTheAftermath">
                              <span aria-hidden="true" className="fab fa-github">
                              </span>
                        </a>
                        <a className="footer-links-item" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/noufou-sawadogo-6b1923154/">
                              <span aria-hidden="true" className="fab fa-linkedin-in">
                              </span>
                        </a>
                        <a className="footer-links-item" target="_blank" rel="noopener noreferrer" href="mailto:aftermathggh@gmail.com">
                              <span aria-hidden="true" className="far fa-envelope">
                              </span>
                        </a>
                  </div>
          </div>
      </div>
)

export default Footer;
