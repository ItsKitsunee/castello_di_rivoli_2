import Video from '../videos/video_cavallo.mp4';
import './Components.css';

function VideoComponent() {
    return (
        <video
            src={Video}
            autoPlay
            muted

            playsInline
            className="video-full-width"
        />
    );
}

export default VideoComponent;