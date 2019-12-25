import React from 'react';
import ReactDOM from 'react-dom';


    const style = {
      fontSize: 30
    }


  const date = new Date('December 17, 1995 03:24:00')
  const hours = date.getHours()
  let time


  if (hours < 12) {
    time = "morning"
    style.color="red"
  } else if (hours >= 17 && hours < 12) {
    time = "afternoon"
    style.color="red"
  } else { 
    time = "evening"
    style.color="red"
    
  }



class Header extends React.Component {
  render() {
    return (
      <div>
      <h1 className='navbar'>This is a Header</h1>
        <p style={style}>good {time}</p>
    </div>
      
    );
  }
}


export default Header;
