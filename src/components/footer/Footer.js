import React from 'react';

function Footer() {
  const icons = [
    {
      name: "fa fa-github",
      link: "https://github.com/jaaarsh"
    },
    {
      name: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/joshua-ellis-jr-509371219/"
    },
    {
      name: "fa fa-stack-overflow",
      link: "https://stackoverflow.com/users/16621498/jarsh"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>(
      <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
        <i className={icon.name}></i>
      </a>
      ))}
    </footer>
  );
}

export default Footer;