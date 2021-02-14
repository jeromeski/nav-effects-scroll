/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/homey-logo.png';
import icons from '../assets/img/sprites.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleSlideDown);
  }

  componentWillUpdate() {
    window.addEventListener('scroll', this.handleSlideDown);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSlideDown);
  }

  handleSlideDown = () => {
    var triggerPoint = Math.round(window.innerHeight / 4);
    if (window.scrollY > triggerPoint) {
      document
        .querySelector('.nav-area')
        .classList.remove('transparent-header');
      document.querySelector('.header').classList.add('sticky-nav-area');
      document.querySelector('.header').classList.add('homey-in-view');
    } else {
      document.querySelector('.nav-area').classList.add('transparent-header');
      document.querySelector('.header').classList.remove('sticky-nav-area');
      document.querySelector('.header').classList.remove('homey-in-view');
    }
  };

  render() {
    const { scrolled } = this.state;

    return (
      <div className='nav-area transparent-header'>
        <div className='header'>
          <div className='navbar'>
            <div className='navbar__logo-wrap'>
              <a href='' className='navbar__logo-link'>
                <div className='navbar__logo'></div>
              </a>
            </div>
            <div className='navbar__nav-area'>
              <div className='navbar__list'>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Home
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Listing
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Property
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Pages
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Elementor
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>
                    Searches
                    <svg className='navbar__icon'>
                      <use xlinkHref={`${icons}#icon-angle-down`}></use>
                    </svg>
                  </Link>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>Login</Link>
                </li>
                <li className='navbar__item'>
                  <svg className='navbar__icon2'>
                    <use xlinkHref={`${icons}#icon-circle-thin`}></use>
                  </svg>
                </li>
                <li className='navbar__item'>
                  <Link className='navbar__link'>Register</Link>
                </li>
              </div>
            </div>
            <div className='navbar__btn-wrap'>
              <button className='btn'>Become a Host</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
