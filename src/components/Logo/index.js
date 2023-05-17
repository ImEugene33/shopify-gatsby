import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Logo() {
  const data = useStaticQuery(graphql`
    {
      myImage: file(relativePath: { eq: "MadHatter.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);
  
    // const imageData = data.file.childImageSharp.gatsbyImageData

  // return <StaticImage fixed={data.file.childImageSharp.fixed} />;
  return (
    <StaticImage
      image={data.myImage.childImageSharp.gatsbyImageData}
      alt="My Image"
      placeholder="blurred"
      layout="fullWidth"
    />
  )
}
