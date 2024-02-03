import React from "react";
import { graphql } from "gatsby";
import { Layout, ImageGallery } from 'components';
import {Grid} from './styles'
import CartContext from "../../context/CartContext";

export const query = graphql`
    query ProductQuery($shopifyId: String) {
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
          shopifyId
          id
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

  const { getProductById } = React.useContext(CartContext)
  console.log('getProductById', props.data.shopifyProduct.shopifyId);
  console.log('CartContext', CartContext);

  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      console.log('result', result);
    })
  }, [getProductById, props.data.shopifyProduct.shopifyId])

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

