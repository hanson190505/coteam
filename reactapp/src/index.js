import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Navbar from './component/Navbar'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <Navbar />
//     <App />

//   </React.StrictMode>,
//   document.getElementById('root')
// );
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//       <Navbar name="nav-bar" />
//       <Navbar name="dog" />
//       <Navbar name="chump" />
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: new Date()
//     }
//   }
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello world</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// )
function ActionLink() {
  function handleClick(e) {
    e.preventDefault()
    console.log('the link was clicked.');
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}
class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn:!state.isToggleOn
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'ON' : 'OFF'}
      </button>
    )
  }
}
function UserGreeting(props) {
  return <h1>Welcome back</h1>
}
function GuestGreeting(props) {
  return <h1> please sign up </h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props) {
  return ( <button onClick = {props.onClick}>
    Logout </button>
  )
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn:false}
  }
  handleLoginClick() {
    this.setState({isLoggedIn:true})
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick = {this.handleLoginClick}/>
    }
    
    
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <ActionLink />
    <Toggle /> 
    <LoginControl/>
  </React.StrictMode>,
  
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();