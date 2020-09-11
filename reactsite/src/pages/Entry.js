import React from 'react'

export default function Entry() {

   // const cells = []
   // for (let i = 5; i > 0; i++) {
   //    cells.push(i)
   // };

   return (
      <div className = 'contentGrid'>
         <div className = 'homeText'>
            <h1>
               Hello!
            </h1>
            <p>
               Pariatur occaecat aute incididunt magna sunt nisi sunt et adipisicing do. Occaecat sint ipsum ullamco proident incididunt occaecat consectetur ullamco magna ea. Consectetur in proident laboris qui ex incididunt aliquip magna nisi pariatur irure laboris ipsum.
            </p>
         </div>
         <div className = 'homeSkills'>
            <h1>
               Skills
            </h1>
            <p>
               Pariatur occaecat aute incididunt magna sunt nisi sunt et adipisicing do. Occaecat sint ipsum ullamco proident incididunt occaecat 
            </p>
            <ul>
               <li>asd</li>
            </ul>
         </div>
         <div className = 'homeWorks'>
            <p>
               works go here
            </p>
         </div>
      </div>
   )
}
