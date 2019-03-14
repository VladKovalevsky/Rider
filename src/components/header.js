import React, { Component } from 'react';
import Modal from './modal.js';
import './sass/header.scss';
import Headroom from 'headroom.js';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {showStore: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showStore: !prevState.showStore
    }));
    document.body.classList.toggle('modal-overflow');
  }

  componentDidMount() {
    const headroom = new Headroom(this.refs.header, {
      offset : 105,
      classes: {
        notTop : 'headroom--not-top'
        }
    });
      headroom.init();

    [].forEach.call(document.querySelectorAll("[data-nav] a"),
      el => {
        el.addEventListener("mouseover", () => el.closest('[data-nav]').classList.add("opacity"));
        el.addEventListener("mouseleave", () => el.closest('[data-nav]').classList.remove("opacity"));
      }
    )
  }

  render() {

    return (
      <header className='header header-secondary' id='App' ref='header'>
        <div className='container-fluid'>
          <div className='row center-xs between-xs'>
            <div className='col-xs d-flex middle-xs'><Link to='/' className='header-logo'></Link></div>
            <nav className='col-xs col-sm-8 col-md header-nav end-lg d-flex middle-xs hidden-xs'>
              <div data-nav>
                <a href='#'>About us</a>
                <a href='#'>Portfolio</a>
                <Link to='/contact'>Contact</Link>
              </div>
              <span className='header-separator'></span>
              <ul className='header-lang'>
                <li>
                  <a href='#'><span>Eng</span></a>
                </li>
                <li>
                  <a href='#'><span>Ukr</span></a>
                </li>
              </ul>
            </nav>
            <div className='header-hamburger-wrap visible-xs' onClick={this.handleClick}></div>
          </div>
        </div>
        <a className='header-btn-message hidden-xs' href='#'>
          <span>Get in touch</span>
        </a>

        <Modal isOpen={this.state.showStore}
          transitionName="modal-anim">
          <div className='header-mob'>
            <div className='header-mob__container'>
              <div className='header-mob__top'>
                <a href='#' className='header-logo'></a>
                <div className='header-mob__close' onClick={this.handleClick}></div>
              </div>
              <nav className='header-mob__nav'>
                <a href='#' className='header-mob__link'>About us</a>
                <a href='#' className='header-mob__link'>Portfolio</a>
                <Link to='/contact' className='header-mob__link'>Contact</Link>
              </nav>
              <div className='header-mob__footer d-flex'>
                <a href='#' className='btn btn-primary'>ENG</a>
                <a href='#' className='btn btn-primary btn-primary--inactive'>УКР</a>
              </div>
            </div>
          </div>
        </Modal>

      </header>
    );
  }
}

export default Header;
