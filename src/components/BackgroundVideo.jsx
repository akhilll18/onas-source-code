import React from "react";
import "./BackgroundVideo.css";

export default function BackgroundVideo() {
    return (
        <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
        >
            <source src="/videos/globe.mp4" type="video/mp4" />
        </video>
    );
}