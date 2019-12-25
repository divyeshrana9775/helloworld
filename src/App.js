import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      
       <div>
        <Header />
        <Main/>
        <Footer/>
      
        </div>
      
      
    );
  }
}
var myapp = document.innerHTML = "Divyesh Rana";

export default App;
