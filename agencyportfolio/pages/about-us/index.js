import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Link from 'next/link'
import Services from '../../api/service'
import aImg from '/public/images/about2.png'
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const AboutUsPage = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'About Us'} pagesub={'about'} />
            <section className="about-us-page section-padding pb-0">
                <div className="container">
                    <div className="about-page-top-img">
                        <Image className="imageParallax" src={aImg} alt="" />
                    </div>
                </div>
                <div className="service-section section-padding" id="case">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="service-left-text">
                                    <span>Accusamus Et Iust</span>
                                    <h2>The way we do things in our line of work.</h2>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id
                                        massa ante. Suspendisse.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-wrap">
                                    <div className="row">
                                        {Services.slice(0, 4).map((service, srv) => (
                                            <div className="ol col-lg-6 col-md-6 col-12" key={srv}>
                                                <div className="service-item">
                                                    <i><Image src={service.sIcon} alt="" /></i>
                                                    <h2><Link onClick={ClickHandler} href={"/service-single/[slug]"} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                                    <p>{service.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PartnerSection pClass={'black-bg'} />
                <ProjectSectionS2/>
            </section>
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;
