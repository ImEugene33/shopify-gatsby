import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ImageThumbnailWrapper } from "./styles";

export default function ImageThumbnail({isActive, onClick, image}){
    return (
        <ImageThumbnailWrapper onClick={()=>{console.log('Click!');}}>
            <GatsbyImage image={image} alt="alt" />
        </ImageThumbnailWrapper>
    )
}