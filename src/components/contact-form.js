import React, { Component } from "react";
import './sass/contact.scss';
import './sass/btn.scss';
import './sass/form.scss';
import classNames from 'classnames';
import IMask from 'imask';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form erros being empty
  Object.values(formErrors).forEach(val => {
     val.length > 0 && (valid = false);
});

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
});

  return valid;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstlastName: null,
      phone: null,
      email: null,
      message: null,
      formErrors: {
        firstlastName: "",
        phone: "",
        email: "",
        message: ""
      }
    };
  }

  componentDidMount() {
    var numberMask = new IMask(
      document.getElementById('number-mask'),
    {
      mask: Number
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          First Last Name: ${this.state.name}
          Phone number: ${this.state.phone}
          Email: ${this.state.email}
          Your message: ${this.state.message}
        `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstlastName":
        formErrors.firstlastName =
          value.length < 3 ? "The name field is required" : "";
        break;
      case "phone":
        formErrors.phone =
          value.length < 3 ? "The phone field is required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "The email field is required";
          //The mail field must be a valid email
        break;
      case 'message':
        formErrors.message =
          value.length < 3 ? "The message field is required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value}, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    const firstlastClass = classNames({
      'form-input': true,
      'error': formErrors.firstlastName.length > 0
    });

    const phoneClass = classNames({
      'form-input': true,
      'error': formErrors.phone.length > 0
    });

    const emailClass = classNames({
      'form-input': true,
      'error': formErrors.email.length > 0
    });

    const messageClass = classNames({
      'form-input--textarea': true,
      'form-input': true,
      'error': formErrors.message.length > 0
    });


      return (
        <div className='main contact'>
          <div className='contact-cover'>
            <h1 className='title-primary contact-cover__title'><span>Contact</span> us, that’s easy!</h1>
          </div>
          <div className='container--contact'>
            <div className='container'>
              <div className='row'>
                <div className='col-xs-12'>
                  <div className='contact-form-wrap'>
                    <div className='contact-form-wrap-inner'>
                      <h2 className='contact-form-title'>Tell us about your project</h2>
                      <div className='row'>
                        <div className='col-xs-12 col-md-6'>
                          <div>
                          <form onSubmit={this.handleSubmit} noValidate>
                            <div className='form-group'>
                              <div className='form-label'>Name</div>
                              <input
                              type='text'
                              className={firstlastClass}
                              name='name'
                              noValidate
                              onInput={this.handleChange}
                              />
                              {formErrors.firstlastName.length > 0 && (
                                <span className='form-error-label'>{formErrors.firstlastName}</span>
                              )}
                              </div>
                              <div className='form-group'>
                              <div className='form-label'>Phone number</div>
                              <input
                              type='tel'
                              id='number-mask'
                              className={phoneClass}
                              name='phone'
                              noValidate
                              onInput={this.handleChange}
                              />
                              {formErrors.phone.length > 0 && (
                                <span className='form-error-label'>{formErrors.phone}</span>
                              )}
                              </div>
                              <div className='form-group'>
                              <div className='form-label'>Email</div>
                              <input
                              type='email'
                              className={emailClass}
                              name='email'
                              noValidate
                              onChange={this.handleChange}
                              />
                              {formErrors.email.length > 0 && (
                                <span className='form-error-label'>{formErrors.email}</span>
                              )}
                              </div>
                              <div className='form-group form-group--secondary'>
                              <div className='form-label'>Your message</div>
                              <textarea
                              className={messageClass}
                              required
                              type='text'
                              name='message'
                              noValidate
                              onInput={this.handleChange}
                              >
                              </textarea>
                              {formErrors.message.length > 0 && (
                                <span className='form-error-label'>{formErrors.message}</span>
                              )}
                              </div>
                              <button disabled='disabled' type='submit' onClick={this.handleSubmit} className='btn btn-primary btn-primary--minus'>Send request</button>
                              <div className='visible-xs'>
                                <div className='contact-form-footer'><span>to rider rent</span></div>
                              </div>
                          </form>
                          </div>
                        </div>
                        <div className='col-xs-12 col-md-6 hidden-xs'>
                          <div className='contact-form-rc-wrap'>
                            <div className='contact-form-rc'>
                              <div className='contact-form-rc__item'>
                                <h3 className='contact-form-rc__title'>Let’s talk about your project!</h3>
                                <div className='contact-form-rc__descr'>You can call us directly on <br></br>
                                  +38 (067) 502- 33- 63 or <br></br>
                                  +38 (050) 442-13-56
                                </div>
                              </div>

                              <div className='contact-form-rc__item'>
                                <h3 className='contact-form-rc__title'>Rather send an email?</h3>
                                <div className='contact-form-rc__descr'>No problem, drop us a line and our friendly specialist staff will get you and your event covered
                                </div>
                                <a className='contact-form-rc__link'  href='#'>rider.rent@gmail.com</a>
                              </div>

                              <div className='contact-form-rc__item'>
                                <h3 className='contact-form-rc__title'>We are located in</h3>
                                <div className='contact-form-rc__descr'>Kiev, Ukraine</div>
                                </div>

                              <div className='contact-form-rc__item'>
                                <h3 className='contact-form-rc__title'>Download</h3>
                              <div className='contact-form-rc__link-wrap'>
                                <a  className='contact-form-rc__link' href='#'>Our presentation</a>
                                <span  className='contact-form-rc__separator'>|</span>
                                <a  className='contact-form-rc__link' href='#'>Hire Price List</a>
                              </div>
                            </div>

                          </div>
                          <div  className="contact-form-footer"><span>to rider rent</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 visible-xs'>
              <div className='contact-form-rc-wrap'>
                <div className='contact-form-rc__item'>
                  <h3 className='contact-form-rc__title'>Let’s talk about your project!</h3>
                  <div className='contact-form-rc__descr'>You can call us directly on <br></br>
                    +38 (067) 502- 33- 63 or <br></br>
                    +38 (050) 442-13-56
                  </div>
                </div>

                  <div className='contact-form-rc__item'>
                    <h3 className='contact-form-rc__title'>Rather send an email?</h3>
                    <div className='contact-form-rc__descr'>No problem, drop us a line and our friendly specialist staff will get you and your event covered
                    </div>
                    <a className='contact-form-rc__link'  href='#'>rider.rent@gmail.com</a>
                  </div>

                  <div className='contact-form-rc__item'>
                    <h3 className='contact-form-rc__title'>We are located in</h3>
                    <div className='contact-form-rc__descr'>Kiev, Ukraine</div>
                  </div>

                  <div className='contact-form-rc__item'>
                    <h3 className='contact-form-rc__title'>Download</h3>
                  <div className='contact-form-rc__link-wrap'>
                    <a  className='contact-form-rc__link' href='#'>Our presentation</a>
                    <span  className='contact-form-rc__separator'>|</span>
                    <a  className='contact-form-rc__link' href='#'>Hire Price List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='contact-team'>
                <div className='row'>
                  <div className='col-xs-12 col-lg-8'>
                    <div className='contact-team-pretitle'>CAREER</div>
                    <h2 className='contact-team-title'>Join our team</h2>
                    <p className='contact-team-descr'>We’re always on the look out for talented people to join the team or to collaborate with on projects. So if you’re looking for full-time employment, freelance opportunities or internship at Rider Rent, please email your portfolio and covering note to <a href="mailto:rider.rent@gmail.com">rider.rent@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className='contact-social row'>
                <div className='contact-social-descr col-xs-12 col-sm-4'>See what were up to by following
                  us on our social networks
                </div>
                <div className='col-xs-12 col-sm-8'>
                  <div className='visible-xs d-flex between-xs contacn-social__links'>
                    <a href='#' className='contact-social__link'>Facebook</a>
                    <span className='contact-social__separator'>•</span>
                    <a href='#' className='contact-social__link'>Instagram</a>
                    <span className='contact-social__separator'>•</span>
                    <a href='#' className='contact-social__link'>Youtube</a>
                  </div>
                  <div className='row hidden-xs'>
                    <div className='col-xs-4'>
                      <a href='#' className='btn btn-primary'>Facebook</a>
                    </div>
                    <div className='col-xs-4'>
                      <a href='#' className='btn btn-primary'>Instagram</a>
                    </div>
                    <div className='col-xs-4'>
                      <a href='#' className='btn btn-primary'>Youtube</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Form;
