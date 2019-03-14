import React, { Component } from 'react';
import './sass/home.scss';
import './sass/portfolio.scss';
import lacousticslogo from './sass/media/img/lacoustics-2-logo.png';
import lacousticslogoxs from './sass/media/img/lacoustics-2-logo-xs.png';
import services from './sass/media/img/services.png';
import servicesxs from './sass/media/img/services-xs.png';
import StickySidebar from 'sticky-sidebar/src/sticky-sidebar';
import royal from './sass/media/img/Royal.jpg';
import center from './sass/media/img/19800865_1582391878461298_4358898124178416164_o.jpg';
import cover from './sass/media/img/project-cover.jpg';
import videos from './sass/media/video/__RIDER_VIDEO-xs.mp4';
import classNames from 'classnames';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {homeTitle: false};
    this.initLoader = this.initLoader.bind(this);
  }

  initLoader() {
    setTimeout(function() {
      this.setState({
        homeTitle: true
      });
    }.bind(this),1000)
  }

  componentDidMount() {

    if (this.refs.sidebar && window.matchMedia("(min-width: 1200px)").matches) {
      this.initSidebar();
      this.refs.sidebar.addEventListener('affixed.container-bottom.stickySidebar', () => this.isBottomSidebar = true);
      this.refs.sidebar.addEventListener('affix.top.stickySidebar', () =>  this.isBottomSidebar = false);
    }

    document.addEventListener("DOMContentLoaded", this.initLoader);
    }

    initSidebar() {
      this.stickySidebar = new StickySidebar(this.refs.sidebar, {
        containerSelector: '.js-sidebar-container',
        innerWrapperSelector: '.js-sidebar-inner',
        topSpacing: 100,
        bottomSpacing: 100
      });
    }

  render() {

    const homeTitleLoader = classNames ({
      'home-main__title': true,
      'home-main__title--animated': this.state.homeTitle
    })

    return (
      <div className='main home'>
        <div className='container'>
          <main className='row home-main middle-xs'>
            <div className='col-xs-12 col-md-6'>
              <h1 className={homeTitleLoader}>rider</h1>
              <div className='home-main_descr'>All the quality equipment and services to make your event stand out. Let’s make something great together!</div>
            </div>
          </main>
          <div className='row partneship'>
            <div className='col-xs-12'>
              <div className='secondary-pretitle'>partnership</div>
              <h2 className='secondary-title'>We’re proud to be the largest L’Acoustics Partner in Ukraine!</h2>
            </div>
            <div className='col-xs-3'>
              <div className='partneship-img'>
                <picture className='img-responsive'>
                  <source media='(min-width: 48em)' srcSet={lacousticslogo}/>
                  <source media='(max-width: 47.9em)' srcSet={lacousticslogoxs}/>
                  <img src={lacousticslogo} alt='' className='img-responsive'/>
                </picture>
              </div>
            </div>
            <div className='col-xs-9 col-sm-12 col-md-9'>
              <div className='row'>
                <div className='col-xs-12 col-sm-6 col-lg-5'>
                  <div className='partneship-card'>
                    <h3 className='partneship-card__title'>Qualified team</h3>
                    <div className='partneship-card__desrc'>Our team of talented, fully experienced technicians are qualified to operate the K standard system and do know exactly how to make your event go off with a bang and make uniqur vision reality!</div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1'>
                  <div className='partneship-card'>
                    <h3 className='partneship-card__title'>Universal standard</h3>
                    <div className='partneship-card__desrc'>As a certified L'Acoustics Rental Network Agent, we offer a universal standard to ensure performance and compatibility of systems for cooperation.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 d-flex middle-sm between-xs partneship-more-wrap'>
              <div className='partneship-more'>
                <span>interested in networking? find out more useful details.</span>
              </div>
              <a href='#' className='partneship-more-link'>learn more</a>
            </div>
          </div>
        </div>
        <div className='video-wrap'>
          <video autoPlay='autoplay' loop='loop' muted='muted' playsInline className='video'>
            <source src={videos} type='video/mp4'/>
          </video>
        </div>
        <div className='container'>
          <div className='row services'>
            <div className='col-xs-12 visible-xs'>
              <div className='secondary-pretitle'>what we offer</div>
              <h2 className='secondary-title'>Proven Services</h2>
            </div>
            <div className='col-xs-4 visible-xs'>
              <div className='pr-secondary'>
                <div className='services-img'>
                  <img src={servicesxs} alt='' className='img-responsive'/>
                </div>
              </div>
            </div>
            <div className='col-xs-8 visible-xs'>
              <div className='services-descr-list'>Starting back in 2008, RIDER was primarily a sound hire company, over the years though, we have grown and adapted into a full production company. We have earned our reputation for excellence in delivering the WOW!</div>
            </div>
            <div className='col-xs-12 col-md-5 col-lg-4 hidden-xs'>
              <div className='js-sidebar-container'>
                <div className='js-sidebar' ref='sidebar'>
                  <div className='js-sidebar-inner'>
                    <div className='row'>
                      <div className='col-xs-12'>
                        <div className='secondary-pretitle'>what we offer</div>
                        <h2 className='secondary-title'>Proven Services</h2>
                      </div>
                      <div className='col-xs-12 col-sm-6 col-md-12'>
                        <div className='pr-secondary'>
                          <div className='services-img'>
                            <img src={services} alt='' className='img-responsive'/>
                          </div>
                          <div className='services-desrc-list'>We offer a comprehensive range of services aimed at producing a stunning event that your audience will remember forever.</div>
                          <a href='#' className='btn btn-primary'>l'acoustics + consoles hire list</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-7 col-lg-8'>
              <div className='pl-secondary'>
                <div className='services-desrc-list hidden-xs'>Starting back in 2008, RIDER was primarily a sound hire company, over the years though, we have grown and adapted into a full production company. We have earned our reputation for excellence in delivering the WOW!</div>
                <ul className='services-list'>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>01</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Sound hire</h3>
                      <div className='services-item__descr'>We offer a great range of sound rental packages</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>02</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Lighting hire</h3>
                      <div className='services-item__descr'>We're passionate about creating custom lighting solutions</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>03</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Set and scenery design</h3>
                      <div className='services-item__descr'>Creative production for the entertainment and events industries</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>04</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Technical management</h3>
                      <div className='services-item__descr'>We have years of industry experience</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>05</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>AV installation</h3>
                      <div className='services-item__descr'>Turnkey Audio Visual solutions</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>06</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Multimedia</h3>
                      <div className='services-item__descr'>Where design, art and innovative technologies meet</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>07</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Staging and Truss</h3>
                      <div className='services-item__descr'>Highest quality staging systems suitable for any size and type of event</div>
                    </div>
                  </li>
                  <li className='services-item row middle-sm'>
                    <div className='col services-item__number'>08</div>
                    <div className='col'>
                      <div className='services-item__line'></div>
                    </div>
                    <div className='col'>
                      <div className='services-item__img'></div>
                    </div>
                    <div className='col services-item__content'>
                      <h3 className='services-item__title'>Equipment Logistics</h3>
                      <div className='services-item__descr'>Trusty and on time</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xs-12 visible-xs'>
              <div className='services-descr'>We offer a comprehensive range of services aimed at producing a stunning event that your audience will remember forever.</div>
              <a target="_download" href="http://rider-rent.qwert.com.ua/media/L'ACOUSTICS + Digital Consoles.pdf" className="btn btn-primary">l'acoustics + consoles hire list</a>
            </div>
          </div>
        </div>
        <div className='home-portfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <div className='secondary-pretitle'>portfolio</div>
                <h2 className='secondary-title'>Featured works</h2>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className='pr-secondary'>
                  <div className='home-portfolio__img'>
                    <div className='d-flex middle-xs center-xs'>Our care factor<br/>is always at<br className='hidden-xs'/> 100%</div>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-8'>
                <div className='pl-secondary'>
                  <div className='row'>
                    <div className='col-xs-12 home-portfolio__descr'>RIDER has over 10 years of expert knowledge, creative and technical know-how. From weddings, conferences, exhibitions, product launches to festivals and touring gigs we showcase our technical excellence, creative ideas and trusted service.</div>
                    <div className='col-xs-12 col-md-5'>
                      <a href="http://rider-rent.qwert.com.ua/portfolio" className="btn btn-primary btn-primary--minus">portfolio</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className='portfolio-col portfolio-col--secondary'>
                  <a href=''>
                    <div className='portfolio-img-wrap portfolio-img--secondary'>
                      <img src={royal} alt=''/>
                    </div>
                    <div className='portfolio-card'>
                      <div className='portfolio-card__top'>anniversary, business forum</div>
                      <div className='portfolio-card__desrc'>Royal Canin. 50 Years of Innovation</div>
                      <div className='portfolio-card__footer'>Full technical support, set and scenery design,  advertising constructions manufacturing</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className='portfolio-col portfolio-col--secondary'>
                  <a href=''>
                    <div className='portfolio-img-wrap portfolio-img--secondary'>
                      <img src={center} alt=''/>
                    </div>
                    <div className='portfolio-card'>
                      <div className='portfolio-card__top'>festival</div>
                      <div className='portfolio-card__desrc'>Atlas Weekend 2017</div>
                      <div className='portfolio-card__footer'>Full technical support of Toyota Night DJ Stage, Light Show</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <div className='portfolio-col portfolio-col--secondary'>
                  <a href=''>
                    <div className='portfolio-img-wrap portfolio-img--secondary'>
                      <img src={cover} alt=''/>
                    </div>
                    <div className='portfolio-card'>
                      <div className='portfolio-card__top'>festival</div>
                      <div className='portfolio-card__desrc'>BeLive 2018</div>
                      <div className='portfolio-card__footer'>Stage set design, Technical production, Full technical support</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-contact d-flex middle-xs'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <div className='secondary-pretitle'>contact us</div>
                <div className='secondary-title'>Want to create something exciting?<br/> Get in touch!</div>
              </div>
              <div className='col-xs-12 col-md-3'>
                <a href='' className='btn btn-primary btn-primary--minus'>contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
