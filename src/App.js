import React,{Component} from 'react';
import './App.css';
import Navbar from './Component/Navbar'

class App extends Component{
  render(){
    return (
      <div>
        {
          <Navbar></Navbar>
        }
        <section>
        {
          this.props.children
        }
        </section>
      </div>
    )
  }
}

export default App;
