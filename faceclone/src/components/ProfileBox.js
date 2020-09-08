import React from 'react';

function ProfileBox() {
  return (
    <React.Fragment>
      <p>User Name</p>
      <div class="directions">
        <button class="btn" type="button">TWEETS</button>
        <button class="btn" type="button">FOLLOWING</button>
        <button class="btn" type="button">FOLLOWERS</button>
      </div>
    </React.Fragment>
  );
}

export default ProfileBox;