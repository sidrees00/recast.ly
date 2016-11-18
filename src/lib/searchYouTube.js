var searchYouTube = (options, callback) => {
  const request = $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: {
      "key": options.key,
      "part": "snippet",
      "q": options.query,
      "maxResults": options.max,
    },
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  request.done(function(data) {
    callback(data.items);
  });
    
  request.error(function(message) {
    console.error('Your youTube API request returned an error. =.(');
  });
};

window.searchYouTube = searchYouTube;
