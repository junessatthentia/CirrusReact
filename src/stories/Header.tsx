import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <nav className="tc-navbar-custom">
      <div className="row g-0 h-100 align-items-center flex-nowrap">
        <div className="col-auto h-100">
          <div className="row g-0 h-100 align-items-center flex-nowrap">
            <div className="col-auto h-100"><a className="tc-logo" href="../index.html" title="Logo">
                <svg className="tc-icon logo" viewBox="0 0 48 48">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.13493 42.72C0.0457382 43.5611 0 44.4152 0 45.28V48H48V45.28C48 44.4152 47.9543 43.5611 47.8651 42.72C46.5872 30.6688 36.3901 21.28 24 21.28C11.6099 21.28 1.41277 30.6688 0.13493 42.72ZM42.5464 42.72C41.2982 33.5924 33.4704 26.56 24 26.56C14.5296 26.56 6.70179 33.5924 5.45359 42.72H42.5464Z" fill="url(#paint0_linear_6_5882)"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 16L15.9998 13.28C15.9998 8.86174 19.5815 5.28001 23.9998 5.28001C28.4181 5.28001 31.9998 8.86173 31.9998 13.28L31.9998 16L15.9998 16ZM23.9998 1.08841e-05C31.3341 4.87299e-06 37.2798 5.94566 37.2798 13.28L37.2798 21.28L10.7198 21.28L10.7198 13.28C10.7198 5.94568 16.6654 1.68953e-05 23.9998 1.08841e-05Z" fill="url(#paint1_linear_6_5882)"></path>
                  <defs>svg 
                    <linearGradient id="paint0_linear_6_5882" x1="24" y1="21.28" x2="24" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E20083"></stop>
                      <stop offset="0.363839" stop-color="#E20083"></stop>
                      <stop offset="1" stop-color="#782B90"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_6_5882" x1="23.9998" y1="1.08841e-05" x2="23.9998" y2="21.28" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#E20083"></stop>
                      <stop offset="0.363839" stop-color="#E20083"></stop>
                      <stop offset="1" stop-color="#782B90"></stop>
                    </linearGradient>
                  </defs>
                </svg></a>
            </div>
            <div className="col-auto h-100">
              <button className="tc-global-nav__toggler tc-navbar__btn btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#global-nav">
                <svg className="tc-icon logo" viewBox="0 0 32 32">
                  <path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path>
                </svg>
              </button>
            </div>
            <div className="col h-100 d-none d-md-block">
              <nav className="tc-breadcrumbs tc-breadcrumbs--light">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="#0">Link</a></li>
                  <li className="breadcrumb-item active">Current Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-auto ms-auto h-100">
          <div className="row g-0 flex-nowrap h-100">
            <div className="col-auto h-100">
              <div className="tc-navbar-user-menu dropdown h-100">
                <div className="tc-navbar__btn dropdown-toggle" data-bs-toggle="dropdown" >
                  <div className="tc-avatar">
                    <div className="tc-avatar__content">
                      {user ? ( 
                        <> {user.name}
                        </>
                        ) : (
                        <>
                        <Button size="btn-sm" onClick={onLogin} label="Log in" />
                        <Button primary size="btn-sm" onClick={onCreateAccount} label="Sign up" />
                        </>
                        )}
                    </div>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#0" >
                      <svg className="tc-icon me-2" viewBox="0 0 32 32">
                        <path d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"></path>
                      </svg>Settings</a></li>
                  <li><a className="dropdown-item" href="#0" >
                      <svg className="tc-icon me-2" viewBox="0 0 32 32">
                        <path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"></path>
                        <path d="M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"></path>
                      </svg>Logout</a></li>
                </ul>
              </div>
            </div>
            <div className="col-auto h-100">
              <div className="tc-navbar-notifications">
                <div className="offcanvas offcanvas-end" id="navbar-notifications-offcanvas" data-bs-backdrop="false" data-bs-scroll="true">
                  <div className="offcanvas-header">
                    <div className="h5 offcanvas-title">Notifications</div>
                    <div><span className="badge text-bg-light rounded-pill" >999</span>
                      <button className="btn btn-sm tc-btn-transparent tc-navbar-notifications__btn-delete" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-title="Delete All Notifications" >
                        <svg className="tc-icon" viewBox="0 0 32 32">
                          <path d="M12 12H14V24H12zM18 12H20V24H18z"></path>
                          <path d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="offcanvas-body">
                    <div className="tc-navbar-notifications__group">
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-success" viewBox="0 0 32 32">
                            <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"></path>
                            <path fill="none" d="M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z" data-icon-path="inner-path"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-warning" viewBox="0 0 32 32" >
                            <path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path>
                            <path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path>
                            <path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-danger" viewBox="0 0 32 32">
                            <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25 c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path>
                            <path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22 C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-success" viewBox="0 0 32 32">
                            <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"></path>
                            <path fill="none" d="M14 21.591L9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z" data-icon-path="inner-path"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-warning" viewBox="0 0 32 32">
                            <path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path>
                            <path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path>
                            <path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                      <a className="tc-navbar-notification" href="#0">
                        <div className="tc-navbar-notification__icon">
                          <svg className="tc-icon text-danger" viewBox="0 0 32 32">
                            <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25 c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path>
                            <path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22 C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path>
                          </svg>
                        </div>
                        <div className="tc-navbar-notification__content">
                          <div className="h5 tc-navbar-notification__title">Notification Heading</div>
                          <div className="tc-navbar-notification__body">
                            <p>Notification body copy here</p>
                          </div>
                          <p className="tc-navbar-notification__date-time">Date &amp; Time</p>
                        </div></a>
                    </div>
                  </div>
                </div>
                <div className="tc-navbar__btn" data-bs-toggle="offcanvas" data-bs-target="#navbar-notifications-offcanvas" >
                  <div className="position-relative">
                    <svg className="tc-icon" viewBox="0 0 32 32">
                      <path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path>
                    </svg>
                    <div className="badge tc-badge--sm bg-danger rounded-pill tc-badge--bottom-right">4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto h-100">
              <div className="tc-mode-switch">
                <div className="offcanvas offcanvas-end" id="mode-switch-offcanvas" data-bs-backdrop="false" data-bs-scroll="true">
                  <div className="offcanvas-body">
                    <div className="tc-mode-switch__group">
                        <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7203 10.72V9.36C42.7203 7.10668 40.8936 5.28 38.6403 5.28C36.387 5.28 34.5603 7.10668 34.5603 9.36V10.72L42.7203 10.72ZM38.6403 0C33.4709 0 29.2803 4.19062 29.2803 9.36V16L48.0003 16V9.36C48.0003 4.19061 43.8097 0 38.6403 0Z" fill="url(#paint0_linear_6_6371)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.44 10.72V9.36C13.44 7.10668 11.6133 5.28 9.36 5.28C7.10668 5.28 5.28 7.10668 5.28 9.36L5.28 10.72H13.44ZM9.36 0C4.19062 0 0 4.19062 0 9.36L0 16L18.72 16L18.72 9.36C18.72 4.19061 14.5294 0 9.36 0Z" fill="url(#paint1_linear_6_6371)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3599 10.72V9.36C27.3599 7.10668 25.5332 5.28 23.2799 5.28C21.0266 5.28 19.1999 7.10668 19.1999 9.36V10.72L27.3599 10.72ZM23.2799 0C18.1105 0 13.9199 4.19062 13.9199 9.36V16L32.6399 16V9.36C32.6399 4.19061 28.4493 0 23.2799 0Z" fill="url(#paint2_linear_6_6371)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7203 42.72V25.36C42.7203 23.1067 40.8936 21.28 38.6403 21.28C36.387 21.28 34.5603 23.1067 34.5603 25.36V42.72H42.7203ZM38.6403 16C33.4709 16 29.2803 20.1906 29.2803 25.36L29.2803 48L48.0003 48V25.36C48.0003 20.1906 43.8097 16 38.6403 16Z" fill="url(#paint3_linear_6_6371)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.44 42.72L13.44 25.36C13.44 23.1067 11.6133 21.28 9.36 21.28C7.10668 21.28 5.28 23.1067 5.28 25.36L5.28 42.72H13.44ZM9.36 16C4.19062 16 0 20.1906 0 25.36L0 48H18.72L18.72 25.36C18.72 20.1906 14.5294 16 9.36 16Z" fill="url(#paint4_linear_6_6371)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3599 42.72L27.3599 25.36C27.3599 23.1067 25.5332 21.28 23.2799 21.28C21.0266 21.28 19.1999 23.1067 19.1999 25.36L19.1999 42.72H27.3599ZM23.2799 16C18.1105 16 13.9199 20.1906 13.9199 25.36L13.9199 48L32.6399 48V25.36C32.6399 20.1906 28.4493 16 23.2799 16Z" fill="url(#paint5_linear_6_6371)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_6371" x1="38.6403" y1="0" x2="38.6403" y2="16" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_6371" x1="9.36" y1="0" x2="9.36" y2="16" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_6371" x1="23.2799" y1="0" x2="23.2799" y2="16" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear_6_6371" x1="38.6403" y1="16" x2="38.6403" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint4_linear_6_6371" x1="9.36" y1="16" x2="9.36" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint5_linear_6_6371" x1="23.2799" y1="16" x2="23.2799" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Governance</a>
                        <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.72 42.72L10.72 26.72C10.72 25.2178 9.50221 24 8 24C6.49779 24 5.28 25.2178 5.28 26.72L5.28 42.72H10.72ZM8 18.72C3.58172 18.72 0 22.3017 0 26.72L0 48H16L16 26.72C16 22.3017 12.4183 18.72 8 18.72Z" fill="url(#paint0_linear_6_6303)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.72 32V8C26.72 6.49779 25.5022 5.28 24 5.28C22.4978 5.28 21.28 6.49779 21.28 8V32L26.72 32ZM24 0C19.5817 0 16 3.58172 16 8V37.28L32 37.28V8C32 3.58172 28.4183 0 24 0Z" fill="url(#paint1_linear_6_6303)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.72 42.72L42.72 13.28C42.72 11.7778 41.5022 10.56 40 10.56C38.4978 10.56 37.28 11.7778 37.28 13.28L37.28 42.72H42.72ZM40 5.28003C35.5817 5.28003 32 8.86175 32 13.28L32 48H48L48 13.28C48 8.86175 44.4183 5.28003 40 5.28003Z" fill="url(#paint2_linear_6_6303)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_6303" x1="8" y1="18.72" x2="8" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_6303" x1="24" y1="0" x2="24" y2="37.28" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_6303" x1="40" y1="5.28003" x2="40" y2="48" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Analytics</a>
                        <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0003 10.72L15.9203 10.72C12.96 10.72 10.5603 13.1197 10.5603 16.08C10.5603 19.0402 12.96 21.44 15.9203 21.44L40.0003 21.44L40.0003 10.72ZM5.28027 16.08C5.28027 21.9563 10.044 26.72 15.9203 26.72L45.2803 26.72L45.2803 5.43997L15.9203 5.43997C10.044 5.43997 5.28027 10.2037 5.28027 16.08Z" fill="url(#paint0_linear_6_6507)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0002 26.56L32.0002 26.56C35.0046 26.56 37.4402 28.9955 37.4402 32C37.4402 35.0044 35.0046 37.44 32.0002 37.44L8.0002 37.44L8.0002 26.56ZM42.7202 32C42.7202 37.9205 37.9207 42.72 32.0002 42.72L2.7202 42.72L2.7202 21.28L32.0002 21.28C37.9207 21.28 42.7202 26.0795 42.7202 32Z" fill="url(#paint1_linear_6_6507)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.28 42.88L21.28 8.16004C21.28 6.65782 22.4978 5.44004 24 5.44004C25.5022 5.44004 26.72 6.65782 26.72 8.16004L26.72 42.88L21.28 42.88ZM24 0.160035C28.4183 0.160034 32 3.74176 32 8.16004L32 48.16L16 48.16L16 8.16004C16 3.74176 19.5817 0.160035 24 0.160035Z" fill="url(#paint2_linear_6_6507)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_6507" x1="5.28027" y1="16.08" x2="45.2803" y2="16.08" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_6507" x1="42.7202" y1="32" x2="2.7202" y2="32" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_6507" x1="24" y1="0.160035" x2="24" y2="48.16" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Finance</a>
                        <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.44 0.13493C22.2811 0.0457381 23.1352 -1.07869e-07 24 -1.11901e-07L26.72 -1.24583e-07L26.72 48L24 48C23.1352 48 22.2811 47.9543 21.44 47.8651C9.38882 46.5872 -4.75769e-06 36.3901 -9.83506e-06 24C-1.49124e-05 11.6099 9.3888 1.41277 21.44 0.13493ZM21.44 42.5464C12.3124 41.2982 5.27999 33.4704 5.27999 24C5.27998 14.5296 12.3124 6.70179 21.44 5.45359L21.44 42.5464Z" fill="url(#paint0_linear_6_7277)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.1601 5.28039C32.2134 5.27994 32.2667 5.27972 32.3201 5.27972L37.4401 5.27972L37.4401 42.7197L32.3201 42.7197C32.2667 42.7197 32.2134 42.7195 32.1601 42.7191C21.895 42.6331 13.6001 34.2851 13.6001 23.9997C13.6001 13.7143 21.895 5.36633 32.1601 5.28039ZM32.1601 37.4388C24.8111 37.3531 18.8801 31.369 18.8801 23.9997C18.8801 16.6304 24.8111 10.6464 32.1601 10.5607L32.1601 37.4388Z" fill="url(#paint1_linear_6_7277)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7203 16.0003L42.5603 16.0003C38.142 16.0003 34.5603 19.582 34.5603 24.0003C34.5603 28.4186 38.142 32.0003 42.5603 32.0003L42.7203 32.0003L42.7203 16.0003ZM29.2803 24.0003C29.2803 31.3346 35.2259 37.2803 42.5603 37.2803L48.0003 37.2803L48.0003 10.7203L42.5603 10.7203C35.2259 10.7203 29.2803 16.6659 29.2803 24.0003Z" fill="url(#paint2_linear_6_7277)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_7277" x1="-9.83506e-06" y1="24" x2="26.72" y2="24" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_7277" x1="13.6001" y1="23.9997" x2="37.4401" y2="23.9997" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_7277" x1="29.2803" y1="24.0003" x2="48.0003" y2="24.0003" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Comms</a>
                      <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5379 29.184L10.3823 20.4339C8.40179 19.2905 7.72323 16.758 8.86666 14.7776C10.0101 12.7971 12.5425 12.1185 14.523 13.262L29.6786 22.0121L25.5379 29.184ZM4.29404 12.1376C6.8955 7.63172 12.6571 6.0879 17.163 8.68936L36.8912 20.0795L27.4705 36.3966L7.74226 25.0065C3.23641 22.405 1.69259 16.6434 4.29404 12.1376Z" fill="url(#paint0_linear_492_8323)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6794 26.1717L14.5237 34.9219C12.5433 36.0653 10.0109 35.3867 8.86744 33.4063C7.72402 31.4258 8.40257 28.8934 10.383 27.75L25.5387 18.9998L29.6794 26.1717ZM4.29482 36.0463C1.69337 31.5404 3.2372 25.7788 7.74305 23.1773L27.4713 11.7872L36.892 28.1044L17.1637 39.4945C12.6579 42.0959 6.89628 40.5521 4.29482 36.0463Z" fill="url(#paint1_linear_492_8323)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1415 21.079L29.1415 38.5793C29.1415 40.8661 27.2876 42.72 25.0008 42.72C22.7139 42.72 20.8601 40.8661 20.8601 38.5793L20.8601 21.079L29.1415 21.079ZM25.0008 48C19.7979 48 15.5801 43.7822 15.5801 38.5793L15.5801 15.799L34.4215 15.799L34.4215 38.5793C34.4215 43.7822 30.2037 48 25.0008 48Z" fill="url(#paint2_linear_492_8323)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4621 18.9991L39.6177 27.7492C41.5982 28.8926 42.2768 31.4251 41.1333 33.4055C39.9899 35.386 37.4575 36.0646 35.477 34.9211L20.3214 26.171L24.4621 18.9991ZM45.706 36.0455C43.1045 40.5514 37.3429 42.0952 32.837 39.4937L13.1088 28.1036L22.5295 11.7865L42.2577 23.1766C46.7636 25.7781 48.3074 31.5397 45.706 36.0455Z" fill="url(#paint3_linear_492_8323)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3211 22.0114L35.4767 13.2612C37.4572 12.1178 39.9896 12.7964 41.133 14.7768C42.2765 16.7573 41.5979 19.2897 39.6174 20.4332L24.4618 29.1833L20.3211 22.0114ZM45.7057 12.1368C48.3071 16.6427 46.7633 22.4043 42.2574 25.0058L22.5292 36.3959L13.1085 20.0788L32.8367 8.68863C37.3426 6.08717 43.1042 7.63099 45.7057 12.1368Z" fill="url(#paint4_linear_492_8323)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8585 27.1036L20.8585 9.60333C20.8585 7.31648 22.7124 5.46262 24.9992 5.46262C27.2861 5.46262 29.1399 7.31648 29.1399 9.60333L29.1399 27.1036L20.8585 27.1036ZM24.9992 0.182618C30.2021 0.182618 34.4199 4.40042 34.4199 9.60333L34.4199 32.3836L15.5785 32.3836L15.5785 9.60333C15.5785 4.40041 19.7963 0.182618 24.9992 0.182618Z" fill="url(#paint5_linear_492_8323)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_492_8323" x1="4.29404" y1="12.1376" x2="32.1809" y2="28.238" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_492_8323" x1="4.29482" y1="36.0463" x2="32.1817" y2="19.9458" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_492_8323" x1="25.0008" y1="48" x2="25.0008" y2="15.799" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear_492_8323" x1="45.706" y1="36.0455" x2="17.8191" y2="19.9451" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint4_linear_492_8323" x1="45.7057" y1="12.1368" x2="17.8188" y2="28.2373" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint5_linear_492_8323" x1="24.9992" y1="0.182618" x2="24.9992" y2="32.3836" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Configuration</a>
                      <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.72 26.56L26.72 40C26.72 41.5022 25.5022 42.72 24 42.72C22.4978 42.72 21.28 41.5022 21.28 40L21.28 26.56H26.72ZM24 48C19.5817 48 16 44.4183 16 40L16 21.28H32L32 40C32 44.4183 28.4183 48 24 48Z" fill="url(#paint0_linear_6_7139)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.72 16L34.72 32C34.72 37.9205 29.9205 42.72 24 42.72C18.0795 42.72 13.28 37.9205 13.28 32L13.28 16L34.72 16ZM24 48C15.1634 48 8 40.8366 8 32L8 10.72H40L40 32C40 40.8366 32.8366 48 24 48Z" fill="url(#paint1_linear_6_7139)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28 5.28L5.28 24C5.28 34.3388 13.6612 42.72 24 42.72C34.3388 42.72 42.72 34.3388 42.72 24L42.72 5.28H5.28ZM24 48C37.2548 48 48 37.2548 48 24L48 0L0 0L0 24C0 37.2548 10.7452 48 24 48Z" fill="url(#paint2_linear_6_7139)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_7139" x1="24" y1="48" x2="24" y2="21.28" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_7139" x1="24" y1="48" x2="24" y2="10.72" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_7139" x1="24" y1="48" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Security</a>
                      <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.72 5.28L7.99999 5.28C6.49778 5.28 5.28 6.49779 5.28 8C5.28 9.50221 6.49778 10.72 8 10.72L42.72 10.72L42.72 5.28ZM-3.27835e-06 8C-1.46777e-06 12.4183 3.58172 16 8 16L48 16L48 7.29872e-07L7.99999 9.16374e-07C3.58172 9.36974e-07 -5.08894e-06 3.58172 -3.27835e-06 8Z" fill="url(#paint0_linear_6_7208)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 21.28L34.7202 21.28C36.2224 21.28 37.4402 22.4978 37.4402 24C37.4402 25.5022 36.2224 26.72 34.7202 26.72L16.0002 26.72L16.0002 21.28ZM42.7202 24C42.7202 28.4183 39.1385 32 34.7202 32L10.7202 32L10.7202 16L34.7202 16C39.1385 16 42.7202 19.5817 42.7202 24Z" fill="url(#paint1_linear_6_7208)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 37.28L7.99999 37.28C6.49778 37.28 5.28 38.4978 5.28 40C5.28 41.5022 6.49778 42.72 8 42.72L16 42.72L16 37.28ZM-3.27835e-06 40C-1.46777e-06 44.4183 3.58172 48 8 48L21.28 48L21.28 32L7.99999 32C3.58172 32 -5.08894e-06 35.5817 -3.27835e-06 40Z" fill="url(#paint2_linear_6_7208)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_7208" x1="-3.27835e-06" y1="8" x2="48" y2="7.99998" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_7208" x1="42.7202" y1="24" x2="10.7202" y2="24" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_7208" x1="-3.27835e-06" y1="40" x2="21.28" y2="40" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Workflow</a>
                      <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.72 34.72L24 34.72C18.0795 34.72 13.28 29.9205 13.28 24C13.28 18.0795 18.0795 13.28 24 13.28L42.72 13.28L42.72 34.72ZM8 24C8 15.1634 15.1634 8 24 8L48 8L48 40L24 40C15.1634 40 8 32.8366 8 24Z" fill="url(#paint0_linear_6_6879)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28023 42.0451L24.0802 42.0451C27.0405 42.0451 29.4402 39.3386 29.4402 36C29.4402 32.6614 27.0405 29.9549 24.0802 29.9549L5.28022 29.9549L5.28023 42.0451ZM34.7202 36C34.7202 29.3726 29.9565 24 24.0802 24L0.000225067 24L0.000228214 48L24.0802 48C29.9565 48 34.7202 42.6274 34.7202 36Z" fill="url(#paint1_linear_6_6879)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86637 16L22.1936 16C24.9219 16 27.1336 13.6002 27.1336 10.64C27.1336 7.67976 24.9219 5.28001 22.1936 5.28001L4.86637 5.28003L4.86637 16ZM32 10.64C32 4.76369 27.6095 5.3976e-06 22.1936 1.20559e-05L1.33514e-05 3.93403e-05L1.36491e-05 21.28L22.1936 21.28C27.6095 21.28 32 16.5163 32 10.64Z" fill="url(#paint2_linear_6_6879)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0063 8.02515C15.1725 8.02515 8.01123 15.1864 8.01123 24.0202C8.01123 32.8541 15.1725 40.0153 24.0063 40.0154L24.32 40.0154L24.32 34.8954L24.0063 34.8954C18.0002 34.8953 13.1312 30.0264 13.1312 24.0202C13.1312 18.0141 18.0002 13.1451 24.0063 13.1451L24.32 13.1451L24.32 8.02515L24.0063 8.02515Z" fill="url(#paint3_linear_6_6879)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_6879" x1="8" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_6879" x1="34.7202" y1="36" x2="0.000226641" y2="36" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_6_6879" x1="32" y1="10.64" x2="1.35003e-05" y2="10.64" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint3_linear_6_6879" x1="10.5712" y1="24.0202" x2="48.3258" y2="24.0202" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.431672" stop-color="#D4098A"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Bridge</a>
                      <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9999 42.7201L31.9999 24.0801C31.9999 19.706 28.454 16.1601 24.0799 16.1601C19.7058 16.1601 16.1599 19.706 16.1599 24.0801L16.1599 42.7201H31.9999ZM24.0799 10.8801C16.7897 10.8801 10.8799 16.79 10.8799 24.0801L10.8799 48.0001H37.2799L37.2799 24.0801C37.2799 16.79 31.37 10.8801 24.0799 10.8801Z" fill="url(#paint0_linear_6_6954)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.7202 42.7199L42.7202 24.0799C42.7202 13.7853 34.3747 5.43991 24.0802 5.43991C13.7856 5.43991 5.44016 13.7853 5.44016 24.0799L5.44016 42.7199H42.7202ZM24.0802 0.159912C10.8695 0.159912 0.160156 10.8693 0.160156 24.0799L0.160156 47.9999L48.0002 47.9999L48.0002 24.0799C48.0002 10.8693 37.2908 0.159912 24.0802 0.159912Z" fill="url(#paint1_linear_6_6954)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_6_6954" x1="24.0799" y1="10.8801" x2="24.0799" y2="48.0001" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_6_6954" x1="24.0802" y1="0.159912" x2="24.0802" y2="47.9999" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#E20083"></stop>
                              <stop offset="0.363839" stop-color="#E20083"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Portal</a>
                        <a className="tc-mode-switch__link" href="#0" > 
                        <svg className="tc-icon tc-mode-switch__link-img" viewBox="0 0 48 48">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46723 36.659L37.7761 6.3501C38.8384 5.28788 40.5606 5.28787 41.6228 6.3501C42.685 7.41233 42.685 9.13454 41.6228 10.1968L11.3139 40.5057L7.46723 36.659ZM45.3563 2.61658C48.4805 5.74078 48.4805 10.8061 45.3563 13.9303L11.3139 47.9727L0.000181179 36.659L34.0426 2.61658C37.1668 -0.507618 42.2321 -0.507617 45.3563 2.61658Z" fill="url(#paint0_linear_528_8479)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.72L40 10.72C41.5022 10.72 42.72 9.50221 42.72 8C42.72 6.49778 41.5022 5.28 40 5.28L8 5.28L8 10.72ZM48 8C48 3.58172 44.4183 1.02734e-08 40 2.29463e-08L2.72 1.29876e-07L2.72 16L40 16C44.4183 16 48 12.4183 48 8Z" fill="url(#paint1_linear_528_8479)"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M37.28 40L37.28 8C37.28 6.49779 38.4978 5.28 40 5.28C41.5022 5.28 42.72 6.49779 42.72 8.00001L42.72 40L37.28 40ZM40 1.2449e-06C44.4183 5.57362e-07 48 3.58173 48 8L48 45.28L32 45.28L32 8.00001C32 3.58173 35.5817 1.93244e-06 40 1.2449e-06Z" fill="url(#paint2_linear_528_8479)"></path>
                          <defs>
                            <linearGradient id="paint0_linear_528_8479" x1="45.3563" y1="2.61658" x2="5.65706" y2="42.3159" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint1_linear_528_8479" x1="48" y1="8" x2="2.72" y2="8" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                            <linearGradient id="paint2_linear_528_8479" x1="40" y1="1.2449e-06" x2="40" y2="45.28" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#EC0089"></stop>
                              <stop offset="0.363839" stop-color="#EC0089"></stop>
                              <stop offset="1" stop-color="#782B90"></stop>
                            </linearGradient>
                          </defs>
                        </svg>Contactcenter</a>
                    </div>
                  </div>
                </div>
                <div className="tc-navbar__btn" data-bs-toggle="offcanvas" data-bs-target="#mode-switch-offcanvas" >
                  <svg className="tc-icon" viewBox="0 0 32 32">
                    <path d="M8 30H4a2 2 0 01-2-2V24a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 30zM4 24v4H8V24zM18 30H14a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 30zm-4-6v4h4V24zM28 30H24a2 2 0 01-2-2V24a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 30zm-4-6v4h4V24zM8 20H4a2 2 0 01-2-2V14a2 2 0 012-2H8a2 2 0 012 2v4A2 2 0 018 20zM4 14v4H8V14zM18 20H14a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0118 20zm-4-6v4h4V14zM28 20H24a2 2 0 01-2-2V14a2 2 0 012-2h4a2 2 0 012 2v4A2 2 0 0128 20zm-4-6v4h4V14zM8 10H4A2 2 0 012 8V4A2 2 0 014 2H8a2 2 0 012 2V8A2 2 0 018 10zM4 4V8H8V4zM18 10H14a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0118 10zM14 4V8h4V4zM28 10H24a2 2 0 01-2-2V4a2 2 0 012-2h4a2 2 0 012 2V8A2 2 0 0128 10zM24 4V8h4V4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
