import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://marketplacer.imgix.net/xr/rXHuSsnJdVpdvI07q13cPt3Eg.jpg?auto=format&fm=pjpg&fit=max&q=90&w=1600&h=1000&s=60a9e8ddbe76c16214a94050a961b5db"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://marketplacer.imgix.net/YZ/gM97TS1vVxcBDIx_mtUtTMIIA.jpg?auto=format&fm=pjpg&fit=max&q=90&w=1600&h=1000&s=0a858f1ee4b9263917c2a96d685a238d"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://marketplacer.imgix.net/s1/Bv7XVkI4QtwqACM0oAEkKFGcw.jpg?auto=format&fm=pjpg&fit=max&q=90&w=1600&h=1000&s=04c0cdd10b5d05e085defc027f16a99d"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;