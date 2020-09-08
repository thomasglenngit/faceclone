import React from 'react';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

function Body() {
  return (
    <div class="body row">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </div>
  );
}

export default Body;