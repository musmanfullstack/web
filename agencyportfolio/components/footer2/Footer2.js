
import React from 'react'
import Link from "next/link";
import logo from '/public/images/logo.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer2 = (props) => {
    return (
        <footer className="footer-section">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="logo"/>
                                </div>

                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Address</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-phone-call"></i>+ 1 (246) 333-0088</li>
                                        <li><i className="fi flaticon-email"></i>alma.lawson@example.com</li>
                                        <li><i className="fi flaticon-placeholder"></i>4140 Parker Rd. Allentown,
                                            <br/> New Mexico 31134
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Follow Us</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Behance</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Instagram</Link></li>
                                    <li><Link onClick={ClickHandler} href="/">Youtube</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget subscribe">
                                <div className="widget-title">
                                    <h3>Subscribe</h3>
                                </div>
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-field">
                                        <input type="email" placeholder="Your e-mail address" id="semail" required/>
                                            <button type="submit"><i className="ti-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-12">
                            <ul className="lower-footer-link">
                                <li><Link onClick={ClickHandler} href="/contact">Privacy & Terms.</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="copy-right">
                                <p className="copyright"> &copy; 2023 <Link onClick={ClickHandler} href="/index">Unded</Link>, All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;