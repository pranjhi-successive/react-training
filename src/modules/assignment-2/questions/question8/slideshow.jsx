import React, { useEffect, useState } from "react";
const Slideshow = () => {
  const [currentslide, setCurrentslide] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [userinterval, setUserInterval] = useState(4000);
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
  ];
  useEffect(() => {
    let time;
    if (isPlay) {
      time = setInterval(() => {
        if (currentslide === images.length - 1) {
          setCurrentslide(0);
        } else {
          setCurrentslide(currentslide + 1);
        }
      }, userinterval);
    } else {
      clearInterval(time);
    }
    return () => {
      clearInterval(time);
    };
  }, [currentslide, isPlay, userinterval, images.length]);
  const handlePlay = () => {
    setIsPlay(true);
  };
  const handlePause = () => {
    setIsPlay(false);
  };
  const handleInterval = (event) => {
    setUserInterval(parseInt(event.target.value, 10));
  };
  return (
    <div className="slideshow">
      <div className="slide">
        <img
          style={{ height: 500, width: 800 }}
          src={images[currentslide]}
          alt={`Slide ${currentslide}`}
        />
      </div>
      <div className="controls">
        <button className="play" onClick={handlePlay} disabled={isPlay}>
          PLAY
        </button>
        <button className="pause" onClick={handlePause} disabled={!isPlay}>
          PAUSE
        </button>
        <div>
          <label>Interval (ms):</label>
          <input type="number" value={userinterval} onChange={handleInterval} />
        </div>
      </div>
    </div>
  );
};
export default Slideshow;
