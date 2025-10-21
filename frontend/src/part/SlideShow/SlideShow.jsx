import { useState } from "react"
import "./SlideShow.scss"
import OverImage from "../OverImage/OverImage";

import left from "../../assets/SlideShowNav/Left.svg";
import right from "../../assets/SlideShowNav/Right.svg";
import noImage from "../../assets/noImage.jpg"
import ReactModal from "react-modal";

function SlideShow({ images }) {
    let [openModal, setOpenModal] = useState(false);

    if (images.length === 0)
        images = [{ image: noImage, text: "no image" }];
    const [indexImage, setIndexImage] = useState(0);

    const setImage = (id) => {
        setIndexImage(id);
    }

    const previousImage = (e) => {
        e.stopPropagation();
        setImage((indexImage - 1) < 0 ? (images.length - 1) : (indexImage - 1));
    }

    const nextImage = (e) => {
        e.stopPropagation();
        setImage((indexImage + 1) % images.length);
    }

    return (<>
        <ReactModal isOpen={openModal} onRequestClose={() => setOpenModal(false)} style={{ overlay: { backgroundColor: "none", display: "flex", justifyContent: "center" }, content: { background: "none", border: "0px", borderRadius: "none", position: "auto", maxWidth: "80%"}}}>
            <img src={images[indexImage].image} alt={images[indexImage].text} style={{width: "100%"}}></img>
        </ReactModal>
        <div className="Carousel" onClick={() => setOpenModal(true)}>
            <OverImage img={images[indexImage].image} alt={images[indexImage].text}>
                {<>
                    <div className="OverImage-Mid Carousel-nav" style={{ 'visibility': `${images.length > 1 ? "show" : "hidden"}` }} >
                        <button onClick={previousImage}><img src={left} alt={images[indexImage].text + " left button"}></img></button>
                        <button onClick={nextImage}><img src={right} alt={images[indexImage].text + " left button"}></img></button>
                    </div>
                    <div className="OverImage-Bottom Carousel-nav-txt" style={{ 'visibility': `${images.length > 1 ? "show" : "hidden"}` }}>
                        <p>{indexImage + 1}/{images.length}</p>
                    </div>
                </>}
            </OverImage>
        </div>
    </>)
}

export default SlideShow