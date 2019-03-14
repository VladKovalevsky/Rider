import React, { Component } from 'react';
import './sass/footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
  componentDidMount() {
    [].forEach.call(document.querySelectorAll("[data-nav] a"),
  el => {
    el.addEventListener("mouseover", () => el.closest('[data-nav]').classList.add("opacity"));
    el.addEventListener("mouseleave", () => el.closest('[data-nav]').classList.remove("opacity"));
  }
    )
  }

  render() {

    return (
      <footer className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              <a href='#' className='footer-logo'></a>
              <div className='footer-descr'>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>rider.rent@gmail.com</a></div>
                <div className='footer-link-wrap footer-link-wrap--secondary'><a href='tel:+380675023363' className='footer-link'>+38 (067) 502-33-63</a></div>
                <div className='footer-link-wrap'><a href='tel:+380504421356' className='footer-link'>+38 (050 442-13-56)</a></div>
                <div>Kiev, Ukraine</div>
              </div>
            </div>
            <div className='col-xs-12 col-md-2 col-md-offset-1'>
              <div className='footer-title'>navigate</div>
              <div data-nav className='footer-descr'>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>About us</a></div>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>Portfolio</a></div>
                <div className='footer-link-wrap'><Link to='/contact' className='footer-link'>Contact</Link></div>
              </div>
            </div>
            <div className='col-xs-12 col-md-2 col-md-offset-1'>
              <div className='footer-title'>we are social</div>
              <div data-nav className='footer-descr'>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>Facebook</a></div>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>Instagram</a></div>
                <div className='footer-link-wrap'><a href='#' className='footer-link'>YouTube</a></div>
              </div>
            </div>
              <div className='col-xs-12 footer-bottom'>
                <div className="row between-xs">
                  <div className='footer-copyright'>website development <a href='http://crystall.agency/'>Crystall Production</a></div>
                  <div className='footer-copyright end-sm'>@ 2018 Rider Rent. All rights reserved</div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
