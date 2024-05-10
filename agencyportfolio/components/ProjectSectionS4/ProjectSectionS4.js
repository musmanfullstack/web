import React from 'react';
import { Slide } from "react-awesome-reveal";
import Projects from '../../api/project'
import Link from "next/link";
import Image from 'next/image';

const ProjectSectionS4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className="project-section-s4 section-fluid" id="portfolio">
            <div className="container-fluid">
                <div className="project-active">
                    <div className="row">
                        {Projects.slice(0, 4).map((project, srv) => (
                            <div className="col-lg-3 col-sm-6 col-12" key={srv}>
                                <Slide direction='up' triggerOnce={'false'}>
                                    <div className={`project-item s-${project.Id}`} >
                                        <div className="project-img">
                                            <Image src={project.pImg} alt="" />
                                        </div>
                                        <div className="project-text">
                                            <h2><Link onClick={ClickHandler} href={"/project-single/[slug]"} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                            <span>{project.sub}</span>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProjectSectionS4;