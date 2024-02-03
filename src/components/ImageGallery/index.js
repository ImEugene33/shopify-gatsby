import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageGalleryWrapper } from "./styles";
import ImageThumbnail from "./ImageThubnail";

export function ImageGallery({ media }) {

    const imagesArray = media.map((media) => {
        if (media.preview && media.preview.image && media.preview.image.localFile && media.preview.image.localFile.url) {
            return media.preview.image.localFile.childImageSharp.gatsbyImageData;
        }
        return null;
    });

    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(imagesArray[0])

    const handleClick = (imageActive) => {
        setActiveImageThumbnail(imageActive)
    }
    console.log('activeImageThumbnail.id',activeImageThumbnail.id);

    return (
        <ImageGalleryWrapper>
            <div>
                {/* <img src={images[0]}/> */}
                <GatsbyImage image={activeImageThumbnail} alt="alt" />  {/*GatsbyImage показывает изображения продукта, не работает с просто src и наоборот gatsbyImageData нельзя отобразить без него */}
            </div>
            <div>
                {imagesArray.map((image, index) => {

                    return (
                        <ImageThumbnail key={index} onClick={handleClick} image={image} isActive={activeImageThumbnail.images.fallback.src === image.images.fallback.src} alt="alt" />
                    )
                })}
            </div>
        </ImageGalleryWrapper>
    )
}