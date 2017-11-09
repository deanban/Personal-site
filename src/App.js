import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (


      	<div id="fh5co-main">
      		<div class="fh5co-tab-wrap">
      			<ul class="fh5co-tab-menu">
      				<li class="active"><a href="#" data-tab="1"><span class="icon icon-glass"></span><span class="menu-text">Profile</span></a></li>
      				<li><a href="education" data-tab="2"><span class="icon icon-graduation-cap"></span><span class="menu-text">Education</span></a></li>
      				<li><a href="Work" data-tab="3"><span class="icon icon-black-tie"></span><span class="menu-text">Work</span></a></li>
      				<li><a href="skills" data-tab="4" data-pie="yes"><span class="icon icon-fighter-jet"></span><span class="menu-text">Skills</span></a></li>
      			</ul>
      			<div class="fh5co-tab-content active" data-content="1">
      				<div class="fh5co-content-inner text-center">
      					<div class="row row-bottom-padded-sm">
      						<div class="col-md-12">
      							<figure>
      								<img src="images/user-3.jpg"/>

      							</figure>
      							<h1>Dean Banik</h1>
      							<p>I am a recent <a href="https://flatironschool.com">Flatiron School Full Stack Development</a> graduate. Currently seeking exciting and challenging position as a software developer.</p>
      						</div>
      					</div>
      					<div class="row">
      						<div class="col-md-12 fh5co-counter">
      							<div class="fh5co-number fh5co-left">2</div>
      							<div class="fh5co-text">
      								<h3 class="border-bottom">Years of experience in Full Stack Development</h3>
      								{/* <p>Far far away, behind the word mountains, far from the countries.</p> */}
      							</div>
      						</div>
      					</div>
      					<ul class="fh5co-social">
      						<li><a href="mailto:dean.b87@icloud.com?Subject=Hello" target="_top"><i class="icon-envelope"></i></a></li>
      						{/* <li><a href="#"><i class="icon-twitter"></i></a></li>
      						<li><a href="#"><i class="icon-instagram"></i></a></li> */}
      						<li><a href="https://github.com/deanban"><i class="icon-github"></i></a></li>
      						<li><a href="https://linkedin.com/in/p-d-banik"><i class="icon-linkedin"></i></a></li>
      					</ul>
      				</div>
      			</div>
      			<div class="fh5co-tab-content" data-content="2">
      				<div class="fh5co-content-inner">
      					<div class="row">
      						<div class="col-md-12">
      							<p>Full stack software engineer with strong background in Math and Physics.</p>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-graduation-cap"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>July 2017 - October 2017</h2>
      									<p>Flatiron School Full Stack Web Development Bootcamp</p>
      								</div>
      							</div>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-graduation-cap"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>2011 - 2013</h2>
      									<p>Mechanical Engineeing</p>
      									<p>City College of New York</p>
      								</div>
      							</div>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-graduation-cap"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>2008-2010</h2>
      									<p>Engineering Science at BMCC</p>
      								</div>
      							</div>

      						</div>

      					</div>
      				</div>
      			</div>
      			<div class="fh5co-tab-content" data-content="3">
      				<div class="fh5co-content-inner">
      					<div class="row">
      						<div class="col-md-12">

      							<p>I have the privilege to work with these cool companies.</p>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-black-tie"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>2016 - present</h2>
      									<h3>Domibus Real Estate</h3>
      									<p>Minority owner and deve</p>
      								</div>
      							</div>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-black-tie"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>2013 - 2015</h2>
      									<h3>Figmentum INC</h3>
      									<p>Owner</p>
      								</div>
      							</div>

      							<div class="fh5co-feature">
      								<div class="fh5co-icon">
      									<i class="icon-black-tie"></i>
      								</div>
      								<div class="fh5co-text">
      									<h2>1999-2004</h2>
      									<h3>Previous Ltd Co.</h3>
      									{/* <p>Far far away, behind the word mountains, far from the countries.</p> */}
      								</div>
      							</div>

      						</div>

      					</div>
      				</div>
      			</div>
      			<div class="fh5co-tab-content" data-content="4">
      				<div class="fh5co-content-inner">
      					<div class="row">
      						<div class="col-md-12">
      							<p>These are my areas of expertise.</p>
      						</div>
                  <div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="90"><span><strong>Ruby</strong>90%</span></div>
      						</div>
      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="90"><span><strong>Ruby on Rails</strong>90%</span></div>
      						</div>

      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="90"><span><strong>JavaScript</strong>90%</span></div>
      						</div>

      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="80"><span><strong>jQuery</strong>80%</span></div>
      						</div>
      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="95"><span><strong>ReactJS</strong>95%</span></div>
      						</div>
      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="90"><span><strong>Redux</strong>90%</span></div>
      						</div>
      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="90"><span><strong>PostgreSQL</strong>90%</span></div>
      						</div>
                  <div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="85"><span><strong>HTML5</strong>85%</span></div>
      						</div>
      						<div class="col-md-4 col-sm-6 col-xs-12 text-center">
      							<div class="chart" data-percent="85"><span><strong>CSS3</strong>85%</span></div>
      						</div>

      					</div>
      				</div>
      			</div>
      		</div>
      		<footer id="fh5co-footer">
      			<div class="row">
      				<div class="col-md-6 col-md-offset-3 text-center">
      					<small>
      						&copy; Personal Site. <span class="fh5co-author"/>
      					</small>
      				</div>
      			</div>
      		</footer>
      	</div>
    );
  }
}

export default App;
