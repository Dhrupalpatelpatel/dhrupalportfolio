import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/pfolio.jpg'
import IMG5 from '../../assets/pfolio.jpg'
import IMG6 from '../../assets/pfolio.jpg'



const data =[


 
  {
    id: 2,
    image: IMG1,
    title: "clonespotify",
    github: 'https://github.com',
    demo: "https://github.com/AbhayGajjar/clonespotify",
  },
  
  {
    id: 4,
    image: IMG2,
    title: "E-commerce website",
    github: 'https://github.com',
    demo: "https://github.com/AbhayGajjar/facebook-log-in-with-tailwind-css",
  },
  {
    id: 5,
    image: IMG3,
    title: "TextConverter",
    github: 'https://github.com',
    demo: "https://github.com/AbhayGajjar/TextConverter",
  },
];




const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2>portfolio</h2>
      
      <div className="container portfolio__container">
    {
      data.map(({id,image,title,github,demo}) =>{
      return (
        <article key={id} className='portfolio-item'>
        <div className="portfolio__item-image">


          <img src={image} alt={title} />
        </div>
          <h3>{title}</h3>
         <div className="portfolio__item-cta">
         <a href={github} className='btn'  target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
          
       


      </article>
      )
    })
    }
        
      </div>
    </section>
  )
}

export default Portfolio
