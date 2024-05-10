import React from 'react';
import Link from "next/link";
import blogs from '../../api/blogs'
import Services from '../../api/service';
import Image from 'next/image';


const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="blog-right-info widget">
                    <h3>Cameron Williamson</h3>
                    <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                        ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.</p>
                </div>
                <div className="recent-post widget">
                    <h3>Recent Posts</h3>
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className="post" key={Bitem}>
                            <div className="post-img">
                                <Image src={blog.screens} alt="" />
                            </div>
                            <div className="post-content">
                                <h4><Link onClick={ClickHandler} href={"/blog-single/[slug]"} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                <span className="date">{blog.create_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="category-widget widget">
                    <h3>Category</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href={"/service-single/[slug]"} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="tag-widget widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-right-sidebar">Brand</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-right-sidebar">Development</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-right-sidebar">UX/ UI Design</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
