class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  handleVideoTitleClick(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  render() {
    return <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList handleVideoTitleClick={this.handleVideoTitleClick.bind(this)} videos={this.state.videos}/>
      </div>
    </div>;
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// videos = array of video objects
// jsx = language from react that allows us to HTML like code inside of JS function. **react specific.

 /*<VideoList videos={window.exampleVideoData}/>

Videolist({videos:window.exampleVideoData})
key = videos
value = window.exampleVideoData


render is a method of the app class
render is an es6 class method must have a return statement

return value if it is a class or just whatever is in the () if it isn't
*/
