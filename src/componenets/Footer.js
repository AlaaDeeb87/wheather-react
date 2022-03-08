import React from 'react'
import styled from 'styled-components';


function Footer() {
  return (
    <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
            <div className="row">
               {/* Column 1 */}
               <div className="col-md-3 col-sm-6">
                   <h4>Contact me</h4>
                   <ul className="list-unstyled">
                       <li>Alaa Deeb</li>
                       <li>alaa.epost@gmail.com</li>
                       <li>Gothenburg</li>
                       <li>Jensen Education</li>
                   </ul>
               </div>
                 {/* Column 2 */}
                 <div className="col-md-3 col-sm-6">
                   <h4>Facebook</h4>
                   <ul className="list-unstyled">
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                   </ul>
               </div>
                 {/* Column 3 */}
                 <div className="col-md-3 col-sm-6">
                   <h4>GitHub</h4>
                   <ul className="list-unstyled">
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                   </ul>
               </div>
                 {/* Column 4 */}
                 <div className="col-md-3 col-sm-6">
                   <h4>LinkedIn</h4>
                   <ul className="list-unstyled">
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                       <li><a href="/">Link</a></li>
                   </ul>
               </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date ().getFullYear()} All Rights Reserved - Alaa Deeb
                </p>
            </div>
        </div>
        </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top:3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var (--mainWhite);
}
ul li a:hover {
    color: var(--mainWhite);
}
`;
