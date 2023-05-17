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
              id
              preview {
                image {                 
                  src
                  localFile {
                    url
                    childImageSharp {
                      gatsbyImageData(width: 1000)
                      id
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

