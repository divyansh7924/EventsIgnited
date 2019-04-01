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
import landing from './assets/images/hangout.svg'
import mobile from './assets/images/Illustrations/mobile_2.svg'
import Explore from './assets/images/Explore.svg'
import organise from './assets/images/organise.svg'
import plans from './assets/images/plans.svg'


let message = {
    title: "EventsIgnited",
    minutes: 9
}



class Message extends React.Component{
    render(){
        return(
            <div className="App-landing">
                <div className="bg-landing">
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
                        <div className="content-main">
                            <p>Build</p>
                            <a href="" class="typewrite" data-period="2000" data-type='[ "Sexy","Magnanimous", "Corporate", "Economical", "Huge","Eco Friendly","Eye Catchy"]'>
                                <span class="wrap"></span>
                            </a> <br/>
                            <p>Events</p>
                            <button class="btn btn-primary navbar-btn">Know more</button>
                        </div>
                        <img src={landing} className="illustration"/>
                    </div>
                
                <div className="howitwork">
                    <h4 id="howitwork-head">Everything you need to manage Events.</h4>
                    <div id="part1">
                        <img src={mobile}/>
                    </div>
                    <div id="part2">
                        <ul>
                            <li id="step1">
                                <h5>Design</h5><h4>
                                Create killer event emails and websites</h4>Take creative control with our 100% visual design editor, Canvas. Design on-brand, mobile-responsive email invites and registration websites without a line of code.
                                </li>
                                <li id="step2">
                                <h5>Design</h5><h4>
                                    Create killer event emails and websites</h4>Take creative control with our 100% visual design editor, Canvas. Design on-brand, mobile-responsive email invites and registration websites without a line of code.
                                </li>
                                <li id="step3">
                                <h5>Design</h5><h4>
                                    Create killer event emails and websites</h4>Take creative control with our 100% visual design editor, Canvas. Design on-brand, mobile-responsive email invites and registration websites without a line of code.
                                </li>
                        </ul>
                    </div>
                </div>
                </div>
                {/* <div className="categories">
                        <div className="categories-column-1">
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
                </div> */}
                <div className="features">
                <div className="row">
                        <div class="column">
                            <h3>
                            <img src={Explore}/>
                            <br/>
                            Explore & attend</h3><br/>
                            <p>Search and attend near by events</p>
                            <hr class="vertical" />
                        </div>
                        <div class="column">
                            <h3>
                            <img src={organise}/>
                            <br/>
                            Organise & Connect</h3>
                            <br/>
                            <p>Organise events or meet-ups and connect with people</p>
                            <hr class="vertical" />
                        </div>
                        <div class="column">
                            <h3>
                            <img src={plans}/>
                            <br/>
                            Plan & execute</h3>
                            <br/>
                            <p>Plan and execute events in your budget</p>
                            <hr class="vertical" />
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
                <div class="footer-distributed">
                    <div class="footer-left">
                        <h3>Company<span>logo</span></h3>
                        <p class="footer-links">
                            <a href="#">Home</a>
                            .
                            <a href="#">Blog</a>
                            .
                            <a href="#">Pricing</a>
                            .
                            <a href="#">About</a>
                            .
                            <a href="#">Faq</a>
                            .
                            <a href="#">Contact</a>
                        </p>
                        <p class="footer-company-name">Company Name &copy; 2015</p>
                    </div>
                    <div class="footer-center">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>21 Revolution Street</span> Paris, France</p>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+1 555 123456</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">support@company.com</a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </p>
                        <div class="footer-icons">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
                        </div>
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