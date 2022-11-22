import video from "../video/Trianglify.webm";
import VideoCSS from "./VideoBg.module.css";

const VideoBg = () => {
  return (
    <div className={`${VideoCSS.main}`}>
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default VideoBg;
