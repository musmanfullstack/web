import { React } from 'react'
import Projects from '../../api/project'
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const ProjectSectionS5 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="porfolio-page">
            <div className="project-section-s2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="portfolio-container portfolio-fancybox masonry-gallery row gallery-container">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                                    <Masonry columnsCount={4} gutter="20px">
                                        {Projects.slice(6, 10).map((project, srv) => (
                                            <div className="grid-item" key={srv}>
                                                <Slide direction='up' triggerOnce={'false'}>
                                                    <div className="project-item">
                                                        <div className="project-img">
                                                            <Image src={project.pImg} alt="" />
                                                        </div>
                                                        <div className="project-text">
                                                            <div className="project-left">
                                                                <h2><Link onClick={ClickHandler} href={"/project-single/[slug]"} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                                                <span>{project.sub}</span>
                                                            </div>
                                                            <div className="arrow-btn">
                                                                <Link onClick={ClickHandler} href={"/project-single/[slug]"} as={`/project-single/${project.slug}`}><i className="ti-arrow-top-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slide>
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionS5;