"use client";

import Slider from "react-slick";
import React, {useRef} from "react";
import SliderDetails from "@/components/SliderDetails";

const SliderSection1 = () => {

    let sliderRef = useRef(null);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const items = [
        {
            id: 1,
            imageUrl: "https://dummyimage.com/1920x1080/fff/aaa"
        },
        {
            id: 2,
            imageUrl: "https://dummyimage.com/1920x1080/ccc/000"
        },
        {
            id: 3,
            imageUrl: "https://dummyimage.com/1920x1080/fff/aaa"
        },
        {
            id: 4,
            imageUrl: "https://dummyimage.com/1920x1080/ccc/000"
        },
        {
            id: 5,
            imageUrl: "https://dummyimage.com/1920x1080/fff/aaa"
        },
        {
            id: 6,
            imageUrl: "https://dummyimage.com/1920x1080/ccc/000"
        }
    ]

    return (
        <div className="slider-section">
            <div className="slider-section-content container">
                <div className="slider-left-content">
                    <SliderDetails/>
                    <div className="slider-arrows">
                        <p
                            className="left"
                            onClick={() => sliderRef.slickPrev()}
                        >
                            &lt;
                        </p>
                        <p
                            className="right"
                            onClick={() => sliderRef.slickNext()}
                        >
                            &gt;
                        </p>
                    </div>
                </div>
                <div className="custom-slider">
                    <Slider
                        ref={slider => {
                            sliderRef = slider
                        }}
                        {...settings}
                    >
                        {
                            items.map((item, index) => (
                                <div key={index}>
                                    <div className="carousel-item" onClick={() => sliderRef.slickGoTo(index)}>
                                        <img alt="slide" src={item.imageUrl}/>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );

};

export default SliderSection1;