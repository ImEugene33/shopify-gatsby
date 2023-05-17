import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageGalleryWrapper } from "./styles";
import ImageThumbnail from "./ImageThubnail";

export function ImageGallery({ media }) {

    const images = media.map((media) => {
        if (media.preview && media.preview.image && media.preview.image.localFile && media.preview.image.localFile.url) {
            return media.preview.image.localFile.childImageSharp.gatsbyImageData;
        }
        return null;
    });
    console.log('newImg', images);

    return (
        <ImageGalleryWrapper>
            <div>
                {/* <img src={images[0]}/> */}
                <GatsbyImage image={images[0]} alt="alt" />  {/*GatsbyImage показывает изображения продукта, не работает с просто src и наоборот gatsbyImageData нельзя отобразить без него */}
            </div>
            <div>
                {images.map((image, index) => {
                    return (
                        <ImageThumbnail key={index} image={image} alt="alt" />
                    )
                })}
            </div>
        </ImageGalleryWrapper>
    )
}