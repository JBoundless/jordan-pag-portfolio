import React from 'react';
import LazyHero from 'react-lazy-hero';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import WorkCards from '../components/WorkCards';
import ExperienceCard from '../components/ExperienceCard';
import Awards from '../components/Awards';

function Home() {
  return (
    <div className="Home">
      <LazyHero imageSrc="https://www.campusvarta.com/wp-content/uploads/2020/04/vintage-keyboard-typewriter-old.jpg">
        <h1 style={{fontSize: "40px"}}>Jordan Pagkalinawan</h1>
        <p style={{fontSize: "20px"}}>Student journalist.</p>
      </LazyHero>
      <section id="about" style={{paddingBottom: '15px'}}>
        <h1>Hello!</h1>
        <p>
          My name is Jordan Pagkalinawan, an aspiring journalist with experience
          in both print and digital media. Check out my work below!
        </p>
      </section>
      <section id="work-cards" style={{paddingBottom: '15px'}}>
        <h2>My Work</h2>
        <WorkCards />
      </section>
      <section id="awards" style={{paddingBottom: '15px'}}>
        <h2>Awards</h2>
        <Awards />
      </section>
      <section id="experience" style={{paddingBottom: '15px'}}>
        <h2>Experience</h2>
        <ExperienceCard />
      </section>
      <section>
        <h2>Computer Science Portfolio</h2>
        <p>I created a separate site for my Computer Science portfolio, which can be found <a href="https://jpag-cs.vercel.app">here</a>.</p>
      </section>
      <section>
          <h2>Please Note</h2>
          <p>I am constantly updating the website, so if any accessibility errors arise, chances are I'm already aware of them and attempting to fix them ASAP. If any problems show up, they should be taken care of in 24-72 hours.</p>
          <p>The website's repo can be found here: <a href="https://github.com/JBoundless/jordan-pag-portfolio">https://github.com/JBoundless/jordan-pag-portfolio</a></p>
      </section>    
</div>
  );
}

export default Home;
