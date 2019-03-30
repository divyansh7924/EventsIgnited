import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import brokerage from './assets/images/brokerage.png'
import theater from './assets/images/theater.png'
import donation from './assets/images/donation.png'
import healthy from './assets/images/healthy.png'
import holiday from './assets/images/sunbed.png'
import aboutuspica from './assets/images/aboutuspic1.jpg'
import aboutuspicb from './assets/images/aboutuspic2.jpg'
import aboutuspicc from './assets/images/aboutuspic3.jpg'


let message = {
    title: "EventsIgnited",
    minutes: 9
}

class Message extends React.Component{
    render(){
        return(
            <div className="App-landing">
                <nav class="navbar container">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand brand" href="#">{this.props.title}</a>
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
                <div className="App-landing-content container">
                    <h2 className="content-main">
                        Hi, We help you organize great events<br/><h4>
                        We mean it! You’ll save time, energy, and money while<br/> giving your audience an unparralled event experience.
                        </h4>
                        <br/>
                        <button class="btn btn-primary navbar-btn">Know more</button>
                    </h2>
                    <img src="ill1.svg" className="illustration"/>
                </div>
                <div className="features">
                    <div className="row">
                        <div class="column">
                            Hello
                        </div>
                        <div class="column">
                            Hello2
                        </div>
                        <div class="column">
                            Hello3
                        </div>
                    </div>
                </div>
                <div className="howitwork container">
                    <div id="part1">
                        <img src="ill1.svg"/>
                    </div>
                    <div id="part2">
                        <p id="step1">
                            Book Us
                        </p>
                        <p id="step2">
                            We Do All Planning In Your Budget
                        </p>
                        <p id="step3">
                            Enjoy !
                        </p>
                    </div>
                </div>
                <div className="categories">
                        <div className="categories-column-1 row">
                            <div class="vert-move-delay circle">
                                <img src={brokerage} className="illustration-categories"/>
                            </div>
                            <div className="vert-move-delays circle">
                                <img src={theater} className="illustration-categories"/>
                            </div>
                            <div className="vert-move-delay circle end">
                                <img src={donation} className="illustration-categories"/>
                            </div>
                        </div>
                        <div className="categories-column-2 row">
                            <div class="vert-move-delay circle">
                                <img src={healthy} className="illustration-categories"/>
                            </div>
                            <div className="vert-move-delays circle">
                                <img src={holiday} className="illustration-categories"/>
                            </div>
                        </div>
                </div>
                <div className="about-us flex-row">
                    <div className="about-us-pics">
                        <div className="aboutuspica">
                            <img src={aboutuspicc}/>
                        </div>
                        <div className="aboutuspicb">
                            <img src={aboutuspica} alt="alternate"/>
                        </div>
                        <div className="aboutuspicc">
                            <img src={aboutuspicb}/>
                        </div>
                    </div>
                    <div id="part2">
                        <h1>
                        We mean it! You’ll save time, energy, and money while giving your audience an unparralled event experience.
                        </h1>
                    </div>
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