import React from 'react';
import './PageStyles/Contact.css';
import ContactCards from '../components/ContactCards';

export default function Contact() {
  return (
    <div className="contact">
      <img
        id="phone"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uPA-ky5AQmTLrR_2C3zR7apVj6CKwqt6zw&usqp=CAU"
      />
      <h1>Contact Me</h1>
      <p>
        Here are my social media links. I'm very active on these platforms and
        Direct Messaging is the best way to get in touch.
      </p>
      <ContactCards />
    </div>
  );
}
