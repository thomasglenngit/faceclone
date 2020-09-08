import React from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList';

function CenterColumn() {
  return  (
    <div class="center-column col-md-4">
      <AddTweet />
      <TweetList />
    </div>
  );
}

export default CenterColumn;