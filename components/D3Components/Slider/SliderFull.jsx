import { motion } from 'framer-motion';
import { useRef, useEffect, useState, } from "react";
import styled from "styled-components";
import Slider from './Slider';

export default function SliderFull() {

    const [width, setWidth] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
    }, []);

    return (
        <div>
            <motion.div ref={slider} className="overflow-hidden cursor-grab">
                <motion.div className='flex flex-no-wrap gap-10'>
                    <Slider />
                </motion.div>
            </motion.div>
        </div>
    )
}