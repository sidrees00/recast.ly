class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: {}
    };
    this.boundStateUpdate = this.updateStateFromAPI.bind(this);
    this.debouncedAPICall = _.debounce((options, boundStateUpdate) => this.props.searchYouTube(options, boundStateUpdate), 50, {maxWait: 50});
  }

  updateStateFromAPI(results) {
    this.setState({
      videos: results,
      currentVideo: results[0]
    });
  }

  optionsConstructor(searchQuery) {
    return {
      key: window.YOUTUBE_API_KEY,
      query: searchQuery,
      max: 5
    };
  }

  onNewSearchbarInput (searchQuery) {
    const options = this.optionsConstructor(searchQuery.target.value);
    this.debouncedAPICall(options, this.boundStateUpdate);
    // this.props.searchYouTube(options, this.boundStateUpdate); // Makes last search test pass
  }

  handleVideoTitleClick(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  componentDidMount() {
    const options = this.optionsConstructor('javascript');
    this.props.searchYouTube(options, this.boundStateUpdate);
  }

  render() {
    return <div>
      <Nav handleNewSearchbarInput={this.onNewSearchbarInput.bind(this)} />
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
