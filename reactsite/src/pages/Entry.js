import React from 'react'
import {Link as reactLink} from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(reactLink)`
text-decoration: underline;
color: rgb(240, 60, 120)`;

export default function Entry(props) {

   // const cells = []
   // for (let i = 5; i > 0; i++) {
   //    cells.push(i)
   // };

   return (
      <div className = 'contentGrid homeMain'>
         <div className = 'homeText'>
            <h1>
               Hello!
            </h1>
            <p>
               I'm a <span className = 'highlight'>full-stack web developer</span> specialising in front-end, comfortable with taking a project from pen-and-paper to a device. What's most important to me is learning constantly, passing the knowledge on, and pushing others forward along the way. I'd be a teacher if I didn't love computers so much.
               <img 
                  src = {require('../thinkh.png')} 
                  alt = 'thinking emoji'
                  style = {{width: '20px', height: '20px'}}
               />
            </p>
            <p>
               If you're a business or individual needing presence on the web, <span className = 'highlight'>please get in touch with me <Link to = '/Contact' onClick = {() => props.setActiveTab('Contact')}>here</Link></span>. I look forward to hearing from you!
            </p>
         </div>
         <div className = 'homeSkills'>
            <h1>
               Technical Skills
            </h1>
               <div className = 'homeBarContainer'>
               {/* <ul> */}
               <div className = 'homeBar'>
                  <div className = 'barFill js'>Javascript</div>
               </div>
               <div className = 'homeBar'>
                  <div className = 'barFill react'>React.js</div>
               </div>
               <div className = 'homeBar'>
                  <div className = 'barFill nodeJs'>Node.js</div>
               </div>
               <div className = 'homeBar'>
                  <div className = 'barFill py'>Python</div>
               </div>
               <div className = 'homeBar'>
                  <div className = 'barFill htmlCss'>HTML/CSS</div>
               </div>
            </div>
         </div>
         <div className = 'homeWorks'>
            <p>
               works go here
            </p>
         </div>
      </div>
   )
}
