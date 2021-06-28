import './App.css';
import React from 'react'
import Counter from './componenets/Counter'


class App  extends React.Component {
  state={
    show : true
  }
  render() {
    return (
      <div className="App">
       <button classeName='buttonCoutener' onClick={()=>this.setState({show:!this.state.show})}> Show me  </button>
     {
      this.state.show &&   <Counter />

    }
    {!this.state.show &&   <h1 style={{fontSize: '3em',padding: '100px', fontFamily: 'Cambria'}}> HELLO EVERYONE ! </h1>      }
     
      
      </div>
    )
  }
}


export default App;
