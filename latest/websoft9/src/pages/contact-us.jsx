import * as React from "react";
import { graphql } from "gatsby";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-02";
import PageHeader from "@containers/page-header/layout-01";
import CtaArea from "@containers/cta/layout-04";
import ContactArea from "@containers/elements/box-large-image/section-03";
import ContactInformationArea from "@containers/elements/box-image/section-05";
import CultureArea from "@containers/elements/box-image/section-03";

const ContactUsPage = ({ location, data }) => {
    return (
        <Layout location={location}>
            <Seo title={data.allContentfulPage.nodes[0].title} />
            <Header />

            <main className="site-wrapper-reveal">
                <PageHeader data={data.allContentfulPage.nodes[0].content[0]} />

                <ContactArea data={data.allContentfulPage.nodes[0].content[0]} />

                <ContactInformationArea data={data.allContentfulPage.nodes[0].content[1]} />

                <CultureArea data={data.allContentfulPage.nodes[0].content[2]}/>

                <CtaArea data={data.allContentfulPage.nodes[0].content[3]}  /> 

            </main>
            <Footer />
        </Layout>
    );
};

export const query = graphql`
    query ContactUsQuery($language: String!) {
        #多语言
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        #查询当前页面数据
        allContentfulPage(filter: {node_locale: {eq: $language}, key: {eq: "ContactUs"}}) {
            nodes {
            title
            content {
                id
                headings: title
                texts: subTitle
                image: backgourdImage
                buttons {
                        id
                        content: key
                        path: value
                    }
                features {
                ... on ContentfulBaseFeature {
                    id
                    title
                    subtitle
                    image
                    icon
                    description {
                        description
                    }
                }
                }
            }
            }
        }
    }
`;

export default ContactUsPage;
