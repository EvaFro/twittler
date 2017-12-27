$(document).ready(function(){
var $main = $('.main')

var $tweetFeed = $('<div></div>');
$tweetFeed.appendTo($main);
$tweetFeed.html('');

var index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $tweet = $('<div></div>');
  
  // add user info
  var $user = $('<a></a>');
  $user.attr({'href': '#', 'data-user': tweet.user, 'class': 'username'});
  $user.text('@' + tweet.user)
  $user.appendTo($tweet);
    
  $tweet.append(': ' + tweet.message);
  
  //Add time stamp to our tweets
  var $tweetTime = $('<span></span>');
  $tweetTime.addClass('timestamp');
  //make easy to read
  var readableTime = moment(tweet.created_at).fromNow();
  $tweetTime.text(readableTime);
  $tweetTime.appendTo($tweet);
	
  //add tweet to our tweetFeed
  $tweet.appendTo($tweetFeed);
  
  index -= 1;
}
});
