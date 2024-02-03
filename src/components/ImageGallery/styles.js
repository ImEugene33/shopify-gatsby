import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section `
    > div:first-child {
        border: 5px solid #ccc;

        div {
            object-fit: cover;
            opacity: 1;
            width: 100%;
            height: 25vw;
        }
    }

    >div:last-child {
        margin-top: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;

        .gatsby-image-wrapper {
            object-fit: cover;
            opacity: 1;
            width: 100%;
            height: 100%;
        }

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`