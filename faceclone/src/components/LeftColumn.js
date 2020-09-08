import React from 'react';
import ProfileBox from './ProfileBox';
import TextBox from './TextBox';

function LeftColumn() {
  return (
    <div class="left-column col-md-4">
      <ProfileBox />
      <TextBox />
    </div>
  )
}

export default LeftColumn;