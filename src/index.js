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
import landing from './assets/images/brainstorming.svg'
import mobile from './assets/images/Illustrations/mobile_2.svg'
import Explore from './assets/images/Explore.svg'
import organise from './assets/images/organise.svg'
import plans from './assets/images/plans.svg'
import music_cat from './assets/images/music-cat.jpg'
import art_cat from './assets/images/art-cat.jpg'
import business_cat from './assets/images/business-cat.jpg'
import parties_cat from './assets/images/parties-cat.jpg'
import classes_cat from './assets/images/classes-cat.jpg'
import sports_cat from './assets/images/sports-cat.jpg'
import underline from './assets/images/underline.svg'

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
                                <h4 class="navbar-brand brand" href="#">{this.props.title}</h4>
                            </div>
                            <div className="App-header-elements">
                            <nav>
                                <ul>
                                <li class="item"><a href="#">Portfolio</a></li>
                                <li class="item"><a href="#">Features</a></li>
                                <li class="item"><a href="#">About Us</a></li>
                                <li class="item"><a href="#">Contact us</a></li>
                                <li class="item"><a href="#">Login</a></li>
                                <li class="item"><span href="#" id="get-demo">Get Started</span></li>
                                </ul>
                            </nav>
                                {/* <button class="btn btn-danger navbar-btn">How it Works</button> */}
                            </div>
                        </div>
                    </nav>
                    <div className="App-landing-content container">
                        <div className="content-main">
                            <p>Build</p>
                            <span class="typewrite" data-period="2000" data-type='[ "Sexy","Magnanimous", "Corporate", "Economical", "Huge","Eco Friendly","Eye Catchy"]'>
                                <span class="wrap"></span>
                            </span> <br/>
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
                <div className="bg-landing-2">
                <div className="features">
                <h4 id="features-head">Features.</h4>
                <div className="row">
                        <div class="column">
                            <h3>
                            <img src={Explore}/>
                            <br/>
                            Explore & attend</h3><br/>
                            <p>Search and attend near by events</p>
                        </div>
                        <div class="column">
                            <h3>
                            <img src={organise}/>
                            <br/>
                            Organise & Connect</h3>
                            <br/>
                            <p>Organise events or meet-ups and connect with people</p>
                        </div>
                        <div class="column">
                            <h3>
                            <img src={plans}/>
                            <br/>
                            Plan & execute</h3>
                            <br/>
                            <p>Plan and execute events in your budget</p>
                        </div>
                    </div>
                </div>
                
          
            {/* <div id="teamdata">
            <h4 id="category-head">Categories.</h4>
                <div class="teamphoto">
                    <a class="gallery-item vert-move-delay" href="#">
                        <img src={brokerage}/>
                    </a>
                    <a class="gallery-item vert-move-delay" href="#">
                        <img src={theater}/>
                    </a>
                    <a class="gallery-item vert-move-delay" href="#">
                        <img src={donation}/>
                    </a>
                </div>
                <div id="teamphoto2">
                    <a class="gallery-item vert-move-delays" href="#">
                            <img src={healthy}/>
                    </a>
                    <a class="gallery-item vert-move-delays" href="#">
                        <img src={holiday}/>
                    </a>
                   
                </div>
            </div> */}

<h4 id="category-head">Categories.</h4>
                <div id="category-row">
                            <div className="box">
                            <img src={music_cat} className="category-column"/>
                            <h4>Music</h4>
                            </div>
                            <div className="box">
                            <img src={art_cat} className="category-column"/>
                            <h4>Art</h4>
                            </div>
                            <div className="box">
                            <img src={business_cat} className="category-column"/>
                            <h4>Business</h4>
                           </div>
                           <div className="box">
                            <img src={parties_cat} className="category-column"/>
                            <h4>Parties</h4>
                           </div>
                           <div className="box">
                            <img src={classes_cat} className="category-column"/>
                            <h4>Classes</h4>
                            </div>
                            <div className="box">
                            <img src={sports_cat} className="category-column"/>
                            <h4>Sports</h4>
                            </div>
                </div>
                </div>
               
<div className="bg-landing-3">
                <div>
                <h4 id="about-head">About Us.</h4>
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
                    <div id="about-part-2">
                        <span>
                        Get your Event live within minutes
                        
                        </span>
                        <p id="about-little">
                        Welcome to the one stop destination for all event management queries. 
                        Deliver the audience with greatest ever experience.
                        </p>
                        <div class="input-with-btn">
                        <input name="prefilEmail" type="email" class="input-standart" required="" placeholder="Enter your email"/>
                        <input type="submit" value="GET STARTED" class="btn-standart darkblue"/>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                 {/* <h4 id="category-head">Categories.</h4>
                <div id="category-row">
                            <div className="box">
                            <img src={music_cat} className="category-column"/>
                            <h4>Music</h4>
                            </div>
                            <div className="box">
                            <img src={art_cat} className="category-column"/>
                            <h4>Art</h4>
                            </div>
                            <div className="box">
                            <img src={business_cat} className="category-column"/>
                            <h4>Business</h4>
                           </div>
                           <div className="box">
                            <img src={parties_cat} className="category-column"/>
                            <h4>Parties</h4>
                           </div>
                           <div className="box">
                            <img src={classes_cat} className="category-column"/>
                            <h4>Classes</h4>
                            </div>
                            <div className="box">
                            <img src={sports_cat} className="category-column"/>
                            <h4>Sports</h4>
                            </div>
                </div> */}
                
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