import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import vImg1 from '/public/images/video/video.jpg'
import btn from '/public/images/video/btn.png'
import shape1 from '/public/images/video/star.png'
import shape2 from '/public/images/video/arrow.png'
import Image from 'next/image'


const VideoSection = (props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="video-section section-padding pt-0">
            <div className="container">
                <div className="video-wrap">
                    <Image className="imageParallax" src={vImg1} alt=""/>
                    <button className="video-btn" onClick={() => setOpen(true)}><i><Image src={btn} alt=""/></i></button>
                </div>
            </div>
            <div className="star-shape">
                <Image src={shape1} alt=""/>
            </div>
            <div className="arrow-shape">
                <Image src={shape2} alt=""/>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-2Nyl5ctKJQ" onClose={() => setOpen(false)} />
        </section>
    )
}

export default VideoSection;