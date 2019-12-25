import React from 'react';
const firstname = 'This is a'
const lastname = 'Main'
const date = new Date()
class Main extends React.Component {

  render() {
      return (
        <div>
              <h1 style={{color: 'green'}}>{firstname + ' ' + lastname}</h1>
              <p> {`${firstname} ${lastname}`}</p>
          <h2>{date.getMonth()}</h2>
          
        </div>
      
      
    );
  }
}


export default Main;
