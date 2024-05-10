import React from 'react'
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from 'next/image';

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog-section-s2 section-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        {blogs.slice(0, 6).map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <Image className="imageParallax" src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <span>in Design {blog.create_at}</span>
                                        <h2><Link onClick={ClickHandler} href={"/blog-single/[slug]"} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;