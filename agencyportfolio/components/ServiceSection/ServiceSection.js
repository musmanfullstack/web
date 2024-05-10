import React from 'react';
import Services from '../../api/service'
import Link from "next/link";
import shape from '/public/images/service/arrow-shape.png'
import { Slide } from "react-awesome-reveal";
import Image from 'next/image';

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="service-section section-padding" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-left-text">
                            <span>Accusamus Et Iust</span>
                            <h2>The way we do things in our line of work. <i><Image
                                src={shape} alt="" /></i></h2>
                            <p>We are helping client to create WordPress websites with our talented expert.</p>
                            <Link onClick={ClickHandler} href="/services" className="read-more">Read case study</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-wrap">
                            <div className="row">
                                {Services.slice(0, 4).map((service, srv) => (
                                    <div className="col col-lg-6 col-md-6 col-12" key={srv}>
                                        <Slide direction='up' triggerOnce={'false'}>
                                            <div className="service-item">
                                                <i><Image src={service.sIcon} alt="" /></i>
                                                <h2><Link onClick={ClickHandler} href={"/service-single/[slug]"} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                                <p>{service.description}</p>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;