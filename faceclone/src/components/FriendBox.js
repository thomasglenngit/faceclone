import React from 'react';
import FriendsHeader from './FriendsHeader';
import SuggestedFriend from './SuggestedFriend';

function FriendBox() {
  return (
    <React.Fragment>
      <FriendsHeader />
      <SuggestedFriend />
      <SuggestedFriend />
      <SuggestedFriend />
    </React.Fragment>
  )
}

export default FriendBox;