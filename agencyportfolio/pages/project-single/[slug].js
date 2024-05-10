import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';
import Link from "next/link";
import Projects from '../../api/project'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ProjectSinglePage = (props) => {

    const router = useRouter()

    const projectDetails = Projects.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={projectDetails?.title} pagesub={'Project'} />
            <div className="porfolio-single-page">
                <div className="portfolio-details-wrap section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="portfolio-details-img">
                                    <Image src={projectDetails?.psImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="portfolio-details-text">
                                    <h2>{projectDetails?.title}</h2>
                                    <div className="portfolio-text-items">
                                        <div className="portfolio-text-item">
                                            <h4>Client:</h4>
                                            <span>Robert Fox</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Designer:</h4>
                                            <span>Cameron Williamson</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Category:</h4>
                                            <span>Drawing</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Share:</h4>
                                            <div className="social">
                                                <Link onClick={ClickHandler} href="/">fb</Link>
                                                <Link onClick={ClickHandler} href="/">tw</Link>
                                                <Link onClick={ClickHandler} href="/">In</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id
                                        massa ante. Suspendisse sit amet neque euismod, convallis quam eget,
                                        dignissim massa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-project-section section-padding pt-0">
                    <div className="container">
                        <div className="section-title-s3">
                            <span>Recent Portfolio</span>
                            <h2>Related Work</h2>
                        </div>
                        <div className="project-active-s2">
                            <div className="row">
                                {Projects.slice(2, 5).map((project, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className={`project-item s-${project.Id}`}>
                                            <div className="project-img">
                                                <Image src={project.pImg} alt="" />
                                            </div>
                                            <div className="project-text">
                                                <h2><Link onClick={ClickHandler} href={"/project-single/[slug]"} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                                <span>{project.sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;