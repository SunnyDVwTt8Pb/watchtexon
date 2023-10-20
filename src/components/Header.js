import React from 'react';
import './header.css';
import headerImage from './me.jpg'; 

function Header() {
  return (
    <header className="header">
      
    
    <div className="header-content">
        <img src={headerImage} alt="Header Image" className="header-image" />
        <h1 className="header-name">Konduru Praveen kumar</h1>
      </div>
      <h3 >Hi there??.I am Konduru Praveen Kumar and I'm currently pursuing a BTECH in Computer Science Engineering with 
         from VIT-AP University. I am interested and looking forward to collaborate one the following topics Web Development, Artificial Intelligence, Machine Learning etc. Along with my academics, I have actively participated in various events such as coding competitions, hackathons. These experiences have helped me to hone my skills and have provided me with the opportunity to work on innovative projects with diverse teams.I'm eager to learn new skills and technologies. I am seeking to connect with professionals and experts in the field of computer science to learn and explore potential opportunities for my career growth.

      </h3>
    </header>
  );
}

export default Header;


