import React from "react";
import { graphql } from "gatsby";
import { Layout, ImageGallery } from 'components';
import {Grid} from './styles'
 
export const query = graphql`
    query ProductQuery($shopifyId: String) {       
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
          title
          description
          media {
            ... on ShopifyMediaImage {
              preview {
                image {                 
                  src
                  localFile {
                    url
                    childImageSharp {
                      gatsbyImageData(width: 1000)
                    }
                  }
                }
              }
            }
          }
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }           
    }
`

export default function ProductTemplate(props) {

    console.log('props', props.data.shopifyProduct.media[1].preview.image.localFile.childImageSharp.gatsbyImageData);
    console.log('props2', props.data.shopifyProduct.featuredImage.localFile.childImageSharp.gatsbyImageData);
    return (
        <Layout>
            <Grid>
                <div>
                    <h1>{props.data.shopifyProduct.title}</h1>
                    <p>{props.data.shopifyProduct.description}</p>
                </div>               
                {/* <div><ImageGallery featuredImage={props.data.shopifyProduct.featuredImage} /></div> */}
                <div><ImageGallery media={props.data.shopifyProduct.media} /></div>
                <div>
                
                </div>
            </Grid>           
        </Layout>
    )
}

