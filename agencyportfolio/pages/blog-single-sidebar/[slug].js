import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';


const BlogDetailsSidebar = () => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'}/>
            <PageTitle pageTitle={'Blog Details'} pagesub={'Blog'} />
            <BlogSingle sidebarClass={'with-sidebar'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsSidebar;
