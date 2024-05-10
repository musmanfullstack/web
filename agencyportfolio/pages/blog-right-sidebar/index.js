import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import NewsLatter from '../../components/NewsLatter/NewsLatter';

const BlogRightPage = (props) => {

    return (
        <Fragment>
            <Header2 hclass={'header-style-3'} />
            <PageTitle pageTitle={'Blog'} pagesub={'blog'} />
            <BlogList />
            <NewsLatter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogRightPage;
