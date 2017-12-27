$(document).ready(function(){
var $main = $('.main')

var $tweetFeed = $('<div></div>');
$tweetFeed.appendTo($main);
$tweetFeed.html('');

var index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $tweet = $('<div></div>');
  $tweet.text('@' + tweet.user + ': ' + tweet.message);
  $tweet.appendTo($tweetFeed);
  
  //Add time stamp to our tweets
  $tweetTime = $('<span></span>');
  $tweetTime.addClass('timestamp');
  //make easy to read
  readableTime = moment(tweet.created_at).fromNow();
  $tweetTime.text(readableTime);
  $tweetTime.appendTo($tweet);
	
  //add tweet to our tweetFeed
  $tweet.appendTo($tweetFeed);
  
  index -= 1;
}
});
