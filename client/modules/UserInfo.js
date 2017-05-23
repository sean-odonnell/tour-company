import React from 'react';

export default props => {
  // not Guide
  if (!props.currentUserPage.isGuide) {
    if (props.currentUserPage.image) {
      return (
        <div>
          <img src={props.currentUserPage.image} />
          <p>{props.currentUserPage.bio}</p>
        </div>
      );
    }
    return (
      <div>
        <p>{props.currentUserPage.bio}</p>
      </div>
    );
  }
  // Guide
  else {
    if (props.currentUserPage.image) {
      return (
        <div>
          <img src={props.currentUserPage.image} />
          <p><strong>Bio: </strong>{props.currentUserPage.bio}</p>
        </div>
      );
    }
    return (
      <div>
        <p><strong>Bio: </strong>{props.currentUserPage.bio}</p>
      </div>
    );
  }
};