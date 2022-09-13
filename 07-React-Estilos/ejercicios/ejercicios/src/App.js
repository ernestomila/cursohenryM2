import React, { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonStyled from './components/ButtonStyled';
import { HiOutlineHand } from "react-icons/hi";

function App() {
  const [ show, letShow] = React.useState(false);
  return (
    <>
      {/* <h1 className='title'>Mi app React</h1>
      <h1 className='title' style={{textTransform: 'capitalize'}}>Otra app</h1>
      <Button icon={<HiOutlineHand />} onClick={() => alert("Hola Button")}>Hola</Button>
      <ButtonStyled icon={<HiOutlineHand />} onClick={() => alert("Hola ButtonStyled")}>Hola</ButtonStyled>
      <Button onClick={() => alert("Holaaa")}>Test2</Button> */}
      <button onClick={()=>letShow(!show)} > { show ? "Oculto" : "Muestro" } </button>
      {show && <CounterFunction />}
      {/* <CounterFunction/> */}
    </>
  );
}
//Componente Tipo Case
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleRemove() {
    this.setState({ counter: this.state.counter - 1 });
  }
  handlePlus2 = () =>{
    this.setState((state) => ({ 
      counter: state.counter + 1
    }));

    this.setState((state) => ({ 
      counter: state.counter + 1
    }));
  }
  // componentDidMount() {
  //   console.log("Init");
  // }

  // componentDidUpdate(){
  //   console.log("Update");
  // }
  
  // componentWillUnmount(){
  //   console.log("Unmount");

  // }
  render() {
    return (
      <>
        <div>
          <button style={{ cursor: "pointer" }} onClick={() => this.handleRemove()}>-</button>
          <span style={{ margin: "0 2rem" }}>El valor es: {this.state.counter}</span>
          <button style={{ cursor: "pointer" }} onClick={this.handleAdd}>+</button>
          <button style={{ cursor: "pointer" }} onClick={this.handlePlus2}>+2</button>
        </div>
      </>
    )
  }
}

//Componente tipo funcional
function CounterFunction() {
  const [state, setState] = React.useState({ counter: 10});

  function handleAdd() {
    setState({counter: state.counter + 1});
  }

  function handlePlus2() {
    setState((state)=>({counter: state.counter + 1}));
    setState((state)=>({counter: state.counter + 1}));
  }

  function handleRemove() {
    setState({counter: state.counter - 1});
  }


  useEffect(()=>{
    console.log("Montando");
  },[])
  
  useEffect(()=>{
    console.log("Actualizando", state.counter);
  },[state.counter])

  useEffect(()=>{
    return () =>console.log("DesMontando");
  },[])

  return (
    <>
      <div>
        <button style={{ cursor: "pointer" }} onClick={() => handleRemove()}>-</button>
        <span style={{ margin: "0 2rem" }}>El valor es: {state.counter}</span>
        <button style={{ cursor: "pointer" }} onClick={handleAdd}>+</button>
        <button style={{ cursor: "pointer" }} onClick={handlePlus2}>+2</button>
      </div>
    </>
  )  
}
export default App;