import React from 'react'
import Link from "next/link";
import Icon from '/public/images/exprience/l-icon.png'
import clIcon1 from '/public/images/exprience/calendar1.png'
import clIcon2 from '/public/images/exprience/calendar2.png'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Exprience = (props) => {
    return (
        <section className="exprience-section section-padding" id="case">
            <div className="container">
                <div className="exprience-wrap">
                    <div className="exprience-left-icon">
                        <Image src={Icon} alt="" />
                    </div>
                    <div className="exprience-items">
                        <div className="exprience-title">
                            <span>MY Experience resume</span>
                            <h2>Work History</h2>
                        </div>

                        <div className="row">
                            <div className="col col-lg-6 col-md-12 col-12">
                                <div className="exprience-item">
                                    <div className="exprience-item-icon">
                                        <i>
                                            <Image src={clIcon1} alt="" />
                                        </i>
                                    </div>
                                    <div className="exprience-item-text">
                                        <span>2013- Present</span>
                                        <h3><Link onClick={ClickHandler} href="/services">Senior UI Designer</Link></h3>
                                        <p>We are helping client to create UI websites.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-12 col-12">
                                <div className="exprience-item">
                                    <div className="exprience-item-icon">
                                        <i>
                                            <Image src={clIcon2} alt="" />
                                        </i>
                                    </div>
                                    <div className="exprience-item-text">
                                        <span>2008- 2010</span>
                                        <h3><Link onClick={ClickHandler} href="/services">Junior UI Designer</Link></h3>
                                        <p>We are helping client to create UI websites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="exprience-wrap style-2">
                    <div className="exprience-left-icon">
                        <Image src={Icon} alt="" />
                    </div>
                    <div className="exprience-items">
                        <div className="exprience-title">
                            <span>MY Experience resume</span>
                            <h2>Education</h2>
                        </div>
                        <div className="row">
                            <div className="col col-lg-6 col-md-12 col-12">
                                <div className="exprience-item">
                                    <div className="exprience-item-icon">
                                        <i>
                                            <Image src={clIcon2} alt="" />
                                        </i>
                                    </div>
                                    <div className="exprience-item-text">
                                        <span>2011 - 2013</span>
                                        <h3><Link onClick={ClickHandler} href="/services">Programming Course</Link></h3>
                                        <p>New York University</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-12 col-12">
                                <div className="exprience-item">
                                    <div className="exprience-item-icon">
                                        <i>
                                            <Image src={clIcon2} alt="" />
                                        </i>
                                    </div>
                                    <div className="exprience-item-text">
                                        <span>2013 - 2016</span>
                                        <h3><Link onClick={ClickHandler} href="/services">University Of Design</Link></h3>
                                        <p>Kingston, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exprience;