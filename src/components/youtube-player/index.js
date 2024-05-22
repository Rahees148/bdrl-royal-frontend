import React from "react";
import * as style from './video.module.scss'
const YoutubeVideo = ({ embedId, autoplay }) => (
  <div className={style.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay ? '1': '0'}`}
      allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`}
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeVideo;