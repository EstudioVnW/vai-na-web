/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import cover from '../images/images/VNW-66.png';

const SEO = ({
  postData, frontmatter = {}, postImage,
}) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            keywords
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta = frontmatter || postData.childMarkdownRemark.frontmatter || {};

      const title = postMeta.title || seo.title;
      const description = postMeta.description || seo.description;
      const image = postImage ? `${seo.siteUrl}${postImage}` : `${seo.siteUrl}${cover}`;
      const url = postMeta.slug
        ? `${seo.siteUrl}/${postMeta.slug}/`
        : seo.siteUrl;
      const keywords = seo.keywords.join(', ');

      return (
        <>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
        </>
      );
    }}
  />
);

SEO.defaultProps = {
  postData: { childMarkdownRemark: {} },
  postImage: null,
};

export default SEO;
