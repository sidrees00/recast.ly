var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${Object.keys(props.video).length === 0 ? 'Ukg_U3CnJWI' : props.video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{Object.keys(props.video).length === 0 ? 'Please select a video' : props.video.snippet.title}</h3>
      <div>{Object.keys(props.video).length === 0 ? 'Please select a video' : props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;


//in html and jsx the onClick is implement similarly
// https://facebook.github.io/react/docs/events.html