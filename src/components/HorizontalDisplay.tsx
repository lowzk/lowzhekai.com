"use client"

import React, { useState } from 'react';
import './HorizontalDisplay.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { StaticImageData } from 'next/image';
import JobDisplay from './JobDisplay';
import FlippedJobDisplay from './FlippedJobDisplay';

export interface Details {
    photograph: StaticImageData | string;
    header: string;
    subheader: string;
    logo: StaticImageData | string;
    date: string;
    write_up: string;
    relevant_skills: string[];
    color: string;
    website_link: string;
}

interface HorizontalDisplayProps {
    details: Details[];
    flipped: boolean;
}

export default function HorizontalDisplay({ details, flipped }: HorizontalDisplayProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < details.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {details.map((detail, index) => (
                    <div
                        key={index}
                        className="slider-image"
                    >
                        {flipped ? <FlippedJobDisplay detail={detail} /> : <JobDisplay detail={detail} />}
                    </div>
                ))}
            </div>

            <button className="slider-controls-left" onClick={handlePrevious} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>
                <ArrowCircleLeftIcon className='icon-style' />
            </button>
            <button className="slider-controls-right" onClick={handleNext} style={{ display: currentIndex === details.length - 1 ? 'none' : 'block' }}>
                <ArrowCircleRightIcon className='icon-style' />
            </button>
        </div>
    )
}