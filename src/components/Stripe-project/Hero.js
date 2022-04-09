import React from 'react'
import { useGlobal } from './Context'
import phoneImg from './images/phone.svg'
const Hero = () => {
   const {closeSubmenu} = useGlobal();
   return <section className='hero' onMouseEnter={closeSubmenu}>
       <div className='hero-center'>
           <article className='hero-info'>
                <h1>payment infrastructre for internet</h1>
                <p>millons of companies are raedy for the way they are in the internt jsut to see the section..</p>
                <button className='btn'>start now</button>
           </article>
            <article className='hero-images'>
                <img src={phoneImg} alt='phone-image'></img>
            </article>
       </div>
   </section>
}

export default Hero
