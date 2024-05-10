import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import vImg1 from '/public/images/video/video.png'
import btn from '/public/images/video/btn2.png'
import Image from 'next/image'


const VideoSectionS2 = (props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="video-section-s2">
            <div className="video-wrap">
                <div className="video-img">
                    <Image src={vImg1} alt=""/>
                        <button className="video-btn" onClick={() => setOpen(true)}><i><Image src={btn} alt="" /></i></button>
                </div>
            </div>
            <h2>View Video</h2>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-2Nyl5ctKJQ" onClose={() => setOpen(false)} />
        </section>
    )
}

export default VideoSectionS2;