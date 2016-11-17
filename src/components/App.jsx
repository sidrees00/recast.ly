class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos,
      currentVideo: props.videos[0]
    };
    
    var that = this;

    this.handleVideoTitleClick = (newVideo) => {
      that.setState({currentVideo: newVideo});
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  someFunction() {
    console.log('some function ran..');
  }

  render() { 
    return <div>
      {console.log(this.state)}
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList handleVideoTitleClick={this.handleVideoTitleClick} videos={this.state.videos}/>
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


*/
