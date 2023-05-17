import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnailWrapper } from "./styles";

export default function ImageThumbnail({isActive, onClick, image}){
    const handleClick =()=>{
        onClick(image)
    }
    return (
        <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
            <GatsbyImage image={image} alt="alt" />
        </ImageThumbnailWrapper>
    )
}