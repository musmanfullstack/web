import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import Image from 'next/image';

const ProjectSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (

        <section className="project-section section-fluid">
            <div className="container-fluid">
                <div className="project-active">
                    <Slider {...settings}>
                        {Projects.slice(0, 5).map((project, srv) => (
                            <Slide direction='up' triggerOnce={'false'} key={srv}>
                                <div className={`project-item s-${project.Id}`}>
                                    <div className="project-img">
                                        <Image src={project.pImg} alt="" />
                                    </div>
                                    <div className="project-text">
                                        <h2><Link onClick={ClickHandler} href={"/project-single/[slug]"} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <span>{project.sub}</span>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </Slider>

                </div>
            </div>
        </section>
    );
}

export default ProjectSection;