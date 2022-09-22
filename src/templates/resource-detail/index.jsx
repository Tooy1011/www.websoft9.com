import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import { SectionWrap, ListGroupWrap } from "./style";
import ProductArea from "@containers/elements/box-image/section-01";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link,graphql }  from  'gatsby';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BoxImage from "@components/box-image/layout-01";
import PropTypes from "prop-types";
import defaultImage from "@assets/images/default.png";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-01";
import ResourceDetailArea from "@containers/cta/layout-05";

const ResourceDetailTemplate = ({ location,data }) => {

    const resourceType = data.allContentfulResource.nodes[0].type.key;

    return (
        <Layout location={location}>
            <Seo title="App Detail" />
            <Header shortcutMenuData= { data.shortcutMenu.nodes } topMenuData={ data.topMenu.nodes } />
        
        <main className="site-wrapper-reveal">
             <ResourceDetailArea data={ data.allContentfulResource.nodes[0]} relatedReading={data.RelatedReading.nodes} siteData={ data.site.siteMetadata }/> 

        </main>
        <Footer data={ data.BottomMenu.nodes } siteData={ data.site.siteMetadata } footerMenuData={data.FooterMenu.nodes} />
        </Layout>
    );
};

export const query = graphql`
    query ResourceDetailQuery($language: String!,$slug:String!) {
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
        site {
            siteMetadata {
            copyright
            description
            socials {
                icon
                id
                link
                title
            }
            }
        }
        #查询相关阅读
        RelatedReading:allContentfulResource(
            filter: {node_locale: {eq: $language}}
            limit: 4
            sort: {fields: time, order: DESC}
        ) {
            nodes {
            id
            slug
            title
            image:featureImage
            type {
                id
                key
                title
            }
            }
        }
        #查询资源详情
        allContentfulResource(filter: {node_locale: {eq: $language}, slug: {eq: $slug}}) {
            nodes {
            id
            slug
            title
            image: featureImage
            type {
                id
                key
                title
            }
            author {
                id
                title
                fullName
                pictureUrl
            }
            content {
                id
                content
                childMarkdownRemark {
                    html
                }
            }
            persons {
                id
                title
                reviews
                image:pictureUrl
                fullName
            }
            customers {
                id
                name
                siteurl
                logo {
                imageurl
                }
            }
            products {
                id
                key
                trademark
            }
            solutions {
                id
                title
                slug
                type{
                    id
                    key
                    title
                }
            }
            tags {
                id
                name
                keyword
            }
            time(formatString: "YYYY-MM-DD")
            downloadUrl
            }
        }

        #查询顶部快捷菜单
        shortcutMenu: allContentfulMenu(
            filter: {type: {eq: "TopMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link    
            }
        }
        #查询导航主菜单
        topMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "MainMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            text: title
            link
            megamenu: submenu {
                ... on ContentfulMenu {
                id
                text: title
                submenu {
                    ... on ContentfulMenu {
                    id
                    text: title
                    link
                    }
                    ... on ContentfulProduct {
                    id
                    key
                    text: trademark
                    logo {
                        imageurl
                    }
                    }
                    ... on ContentfulResource {
                    id
                    slug
                    text: title
                    }
                }
                }
                ... on ContentfulBaseFeature {
                id
                title
                subtitle
                image
                buttons:link {
                    key
                    value
                }
                }
            }
            }
        }
        #查询底部菜单
        BottomMenu: allContentfulMenu(
            filter: {node_locale: {eq: $language}, type: {eq: "BottomMenu"}}
            sort: {fields: title}
        ) {
            nodes {
            id
            menus: submenu {
                ... on ContentfulMenu {
                id
                title
                link
                submenu {
                    ... on ContentfulMenu {
                    id
                    title
                    link
                    }
                }
                }
            }
            }
        }      
        #查询页脚菜单
        FooterMenu: allContentfulMenu(
            filter: {type: {eq: "FooterMenu"}, node_locale: {eq: $language}}
        ) {
            nodes {
            id
            title
            link
            submenu {
                ... on ContentfulMenu {
                id
                title
                link
                }
            }
            }
        }
    }
`;

export default ResourceDetailTemplate;
