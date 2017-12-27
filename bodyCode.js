$(document).ready(function(){
	var $main = $('.main')
	
	var $refreshLinkButton = $('<a href="#" class="refreshLinkButton"></a>');
	$refreshLinkButton.text('New messages');
	$refreshLinkButton.prependTo($main);

	var $tweetFeed = $('<div></div>');
	$tweetFeed.appendTo($main);


	var displayTweets = function(type){

		var tweet;
		var $tweet;
		var source;
		var $user;
		var $tweetTime;
		var readableTime;
		
		$tweetFeed.html('');
		
		if (type === 'Home') {
		  source = streams.home; 
		} else if (type) {
		  source = streams.users[type];
		}
		
		var index = streams.home.length - 1;
		while(index >= 0){
		  tweet = source[index];
		  $tweet = $('<div></div>');
		  
		  // add user info
		  $user = $('<a></a>');
		  $user.attr({'href': '#', 'data-user': tweet.user, 'class': 'username'});
		  $user.text('@' + tweet.user)
		  $user.appendTo($tweet);
			
		  $tweet.append(': ' + tweet.message);
		  
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
		
		// Create a user profile page if user is clicked on
		$('.username').on('click', function (value) {
		  value.preventDefault();
		  displayTweets($(this).data('user'));
		});
	};

	$refreshLinkButton.clone().appendTo($main);
	
	//default display
	displayTweets('Home');

    $('.refreshLinkButton').on('click', function (value) {
	  value.preventDefault();
	  displayTweets('Home');
    });
	
	// default display
	displayTweets('Home');
	

	
});
