import { useState } from 'react';
import './Category.css';

export function Categorybox({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isbuttonVisible, setbuttonVisible] = useState(false);

    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }
    const prevImg = ()=>{
        setCurrentIndex((currentIndex - 1 + images.length)%images.length);
    }
    const nextImg = ()=>{
        setCurrentIndex((currentIndex + 1)%images.length);
    }
    const boxStyle = {
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div onMouseEnter={() => setbuttonVisible(true)}
             onMouseLeave={() =>setbuttonVisible(false)}
             className="ccontainer" style={boxStyle}> 
            {/* <div className="guest-favourite">Guest's favourites</div> */}
            <div className="btn-container">
                <div className="prev-img-btn">
                    {isbuttonVisible && (
                        <button className='btn-setting' onClick={prevImg}><img style={{width:'12px', height:'12px'}} src="/prev.png" alt="" /></button>
                    )}  
                </div>
                <div className="next-img-btn">
                    {isbuttonVisible && (
                        <button className='btn-setting' onClick={nextImg}><img style={{width:'12px', height:'12px'}} src="/next.png" alt="" /></button>
                    )}                           
                </div>
            </div>
        </div>
    );
}
