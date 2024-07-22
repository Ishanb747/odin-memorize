import '../styles/background.css';

function VideoBackground() {
    return (
      <video autoPlay loop muted className="video-background">
        <source src=".\background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
}

export default VideoBackground;
