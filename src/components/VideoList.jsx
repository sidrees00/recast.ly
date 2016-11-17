var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map((video, index) => {
      return <VideoListEntry handleVideoTitleClick={props.handleVideoTitleClick} video={video} key={index}/>;
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};
//Proptype - checks if the prop is the correct type.


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

//when you have javascript inside of JSX you need to put it in {}.
//
