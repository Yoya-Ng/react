import React, { Component, useState, useEffect } from 'react'

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export class Effect extends Component {

  render() {
    
    return <FriendStatus/>;
  }
}

export default Effect