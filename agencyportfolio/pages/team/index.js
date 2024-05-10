import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import Teams from '../../api/team'
import aImg from '/public/images/team/arrow.png'
import eImg1 from '/public/images/event/icon1.png'
import eImg2 from '/public/images/event/icon2.png'
import eImg3 from '/public/images/event/icon3.png'
import eImg4 from '/public/images/event/icon4.png'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const TeamPage = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'Teams'} pagesub={'team'} />
            <section className="team-page">
                <div className="team-section-s2 section-padding">
                    <div className="container">
                        <div className="team-wrap">
                            <div className="row">
                                {Teams.slice(3, 9).map((team, tm) => (
                                    <div className="col col-lg-4 col-md-6 col-sm-6 col-12" key={tm}>
                                        <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <Image className="imageParallax" src={team.tImg} alt="" />
                                                </div>
                                                <div className="team-text">
                                                    <h3><Link onClick={ClickHandler} href={"/team-single/[slug]"} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                                    <span>{team.title}</span>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <section className="event-section section-padding pt-0">
                    <h2 className="hidden">some</h2>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="event-left-img">
                                    <Image src={aImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="event-items">
                                    <h3>Awards</h3>
                                    <div className="event-item">
                                        <div className="icon"><Image src={eImg1} alt="" /></div>
                                        <div className="text">
                                            <h4>awwards AWARD</h4>
                                            <span>June 2023</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="icon"><Image src={eImg2} alt="" /></div>
                                        <div className="text">
                                            <h4>Campaign AWARD</h4>
                                            <span>June 2013</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="icon"><Image src={eImg3} alt="" /></div>
                                        <div className="text">
                                            <h4>Animation AWARD</h4>
                                            <span>Aug 2010</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="icon"><Image src={eImg4} alt="" /></div>
                                        <div className="text">
                                            <h4>Peach Of the day</h4>
                                            <span>Aug 2000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="event-items">
                                    <h3>Events</h3>
                                    <div className="event-item">
                                        <div className="text">
                                            <h4>CES 2021</h4>
                                            <span>February 2023</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="text">
                                            <h4>Campaign ARTS</h4>
                                            <span>June 2013</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="text">
                                            <h4>Tokiko Art</h4>
                                            <span>Aug 2010</span>
                                        </div>
                                    </div>
                                    <div className="event-item">
                                        <div className="text">
                                            <h4>Best Design Award</h4>
                                            <span>Aug 2000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment >
    )
};
export default TeamPage;
