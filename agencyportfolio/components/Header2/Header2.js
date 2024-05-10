import React, { useState } from 'react'
import Link from "next/link";
import logo from '/public/images/logo-2.svg'
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';


const Header2 = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <header className={`header-area ${props.hclass}`}>
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-7">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/home"><Image src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/home">_home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/home">Home Page 01</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-2">Home Page 02</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-3">Home Page 03</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-4">Home Page 04</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} href="/about-me">_pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/about-me">About Me</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/about-us">About Us</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/services">Services</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service-single/Creative-Design">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/team">Team Page</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/team-single/Thomas">Team Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">404</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu"><Link onClick={ClickHandler} href="/portfolio">_portfolio</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/portfolio">Portfolio Grid</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/portfolio-s2">Portfolio Grid S2</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/portfolio-s3">Portfolio Grid S3</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project-single/Business">Portfolio Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/home">_blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/blog-grid">Blog Grid Style</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-right-sidebar">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single/10-Reasons-why-you-should-make-a-physical-portfolio">Blog Single Main</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-single-sidebar/10-Reasons-why-you-should-make-a-physical-portfolio">Blog Single Sidebar</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} href="/contact">_contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-3 text-left">
                                <div className="header-area-right">
                                    <ul>
                                        <li><span className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>Search</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></button>
                <form method="post" onSubmit={SubmitHandler}>
                    <div className="form-group">
                        <input type="text" name="search" value="" placeholder="Search Here" required="" />
                        <button type="submit" className="search-btn"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default Header2;