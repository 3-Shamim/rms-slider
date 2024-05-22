"use client";

import React, {useRef} from 'react';
import SliderDetails from "@/components/SliderDetails";
import CustomSlider from "@/components/slider-section/CustomSlider";

const SliderSection = () => {

    let customSliderRef = useRef();

    const next = () => {
        customSliderRef.next();
    };

    const previous = () => {
        customSliderRef.previous();
    };

    const goTo = (page) => {
        customSliderRef.goTo(page);
    };

    return (
        <div className="slider-section">
            <div className="slider-section-content container">
                <div className="slider-left-content">
                    <SliderDetails/>
                    <div className="slider-arrows">
                        <p
                            className="left"
                            onClick={previous}
                        >
                            &lt;
                        </p>
                        <p
                            className="right"
                            onClick={next}
                        >
                            &gt;
                        </p>
                    </div>
                </div>
                <CustomSlider
                    ref={slider => {
                        customSliderRef = slider
                    }}
                />
            </div>
        </div>
    );
}

export default SliderSection;