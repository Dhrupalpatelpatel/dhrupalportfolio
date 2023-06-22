import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>services</h2>

     <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>UI/UX Design</h3>

        </div>

        <ul className='service__list'>
         
          <li>

           <BiCheck className='service__list-icon'/>
<p>User Research: Conducting interviews, surveys, and usability tests</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Wireframing and Prototyping: Creating visual representations (wireframes)</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Information Architecture: Organizing and structuring content in a way that facilitates</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Interaction Design: Defining how users interact with the product through intuitive </p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Usability Testing: Conducting tests with representative users to identify usability issues</p>
</li>
<li>

<BiCheck className='service__list-icon'/>
<p>User Interface Development: Translating the design into functional user interfaces using.</p>
</li>
        </ul>
      </article>
      {/* end of ui/ux */}

      {/* web devlopment */}

      <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>

        </div>

        <ul className='service__list'>
          
          <li>

           <BiCheck className='service__list-icon'/>
<p>Front-end Development  HTML, CSS, and JavaScript.</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Back-end Development: Building the server-side logic and database functionality.</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Full Stack Development: Combining front-end and back-end development skills to create end-to-end solutions</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Responsive Web Design: Designing websites that adapt and optimize their layout.</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Content Management System (CMS) Development.</p>
</li>
<li>

<BiCheck className='service__list-icon'/>
<p>E-commerce Development.</p>
</li>
<li>

<BiCheck className='service__list-icon'/>
<p>Web Application Development.</p>
</li>
        </ul>
      </article>

{/* end of wd */}

{/* content creation */}

      <article className='service'>
        <div className="service__head">
          <h3>Content Creation</h3>

        </div>

        <ul className='service__list'>
        
          <li>

           <BiCheck className='service__list-icon'/>
<p>Copywriting Crafting compelling and persuasive written content for websites.</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Content Strategy  Developing a strategic plan for content creation, including target audience</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Blogging Creating informative and engaging blog posts on specific topics to educate</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Article Writing Producing well-researched and informative articles for online .</p>
</li>
<li>

           <BiCheck className='service__list-icon'/>
<p>Social Media Content Developing engaging and shareable content for social media platforms.</p>
</li>
<li>

<BiCheck className='service__list-icon'/>
<p>Infographic Designing visually appealing and informative infographics to present data.</p>
</li>
        </ul>
      </article>
      {/* end of content creation */}
     </div>
    </section>
  )
}

export default services
