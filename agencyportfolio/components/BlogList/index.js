import React from 'react';
import Link from "next/link";
import BlogSidebar from '../BlogSidebar'
import blogs from '../../api/blogs'
import Image from 'next/image';



const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-md-12 col-12 ${props.blRight}`}>
                        <div className="blog-page-left">
                            {blogs.slice(0, 4).map((blog, bitem) => (
                                <div className="blog-item" key={bitem}>
                                    <div className="blog-img">
                                        <Image src={blog.bSingle} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <span>in Design {blog.create_at}</span>
                                        <h2><Link onClick={ClickHandler} href={"/blog-single/[slug]"} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                                            ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.</p>
                                        <Link onClick={ClickHandler} href={"/blog-single/[slug]"} as={`/blog-single/${blog.slug}`} className="read-more">Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
