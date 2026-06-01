import 'react-horizontal-scrolling-menu/dist/styles.css';
import { publicApiType, ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from 'react';
import Image from 'next/image';

const imagens = [
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
    "/logo-comum.jpg",
]

export function Gallery() {
    return (
        <div className='gallery-scroll'>
            {
                imagens.map((imagem, index) => (
                    <div key={`${imagem}-${index}`} className='gallery-item'>
                        <Image src={imagem} alt="" width={600} height={400} className='image-gallery' />
                    </div>

                ))
            }

        </div>
    )
}

const LeftArrow = () => {
    const visibility = useContext<publicApiType>(VisibilityContext);
    const isFirstItemVisible = visibility.useIsVisible('first', true);
    return (
        <button
            disabled={isFirstItemVisible}
            onClick={() => visibility.scrollPrev()}
            className="left"
        >
            Left
        </button>
    );
};

const RightArrow = () => {
    const visibility = useContext<publicApiType>(VisibilityContext);
    const isLastItemVisible = visibility.useIsVisible('last', false);
    return (
        <button
            disabled={isLastItemVisible}
            onClick={() => visibility.scrollNext()}
            className="right"
        >
            Right
        </button>
    );
};