<?php

namespace Naif\NovaTwitterTimeline\Http\Controllers;

use Illuminate\Routing\Controller;
use TwitterAPIExchange;

class TwitterTimeline extends Controller
{
    public function index()
    {
         require_once('TwitterAPIExchange.php');
         $settings = array(
             'consumer_key' => config('services.nova_twitter_timeline.consumer_key'),
             'consumer_secret' => config('services.nova_twitter_timeline.consumer_key_secret'),
             'oauth_access_token' => config('services.nova_twitter_timeline.access_token'),
             'oauth_access_token_secret' => config('services.nova_twitter_timeline.access_token_secret')
         );
         $url = "https://api.twitter.com/1.1/statuses/".config('services.nova_twitter_timeline.timeline').".json";
         $twitter = new TwitterAPIExchange($settings);
         $user_timeline = $twitter
             ->setGetfield('?count='.config('services.nova_twitter_timeline.tweets_count'))
             ->buildOauth($url, "GET")
             ->performRequest();
         return $user_timeline;

    }
}