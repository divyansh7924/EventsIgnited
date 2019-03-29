import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

let message = {
    title: "EventsIgnited",
    minutes: 9
}

class Message extends React.Component{
    render(){
        return(
            <div className="App-landing">
                <nav class="navbar">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">{this.props.title}</a>
                        </div>
                        <div className="App-header-elements">
                        <ul class="nav navbar-nav">
                                <li class="active"><a href="#">Portfolio</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Signup</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                            <button class="btn btn-danger navbar-btn">How it Works</button>
                        </div>
                    </div>
                </nav>
                <div className="App-landing-content">
                    <h2>
                        Hi, We organise Great Events
                    </h2>
                    <img src="ill1.svg" className="illustration"/>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <Message
    title={message.title}
    minutes={message.minutes}/>,
    document.getElementById('root')   
)