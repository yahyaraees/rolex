import React from 'react'

const contact = () => {
  return (
   <div>
    <section className='contactForm'>
      <h2>Contact Us</h2>
      <form action="">
        <input type="text" placeholder='Enter Your Name' required/>
        <input type="email" placeholder='Email Address' required/>
        <input type="text" placeholder='Phone Number'/>
        <textarea placeholder='Your Message' rows={2} required></textarea>
         <button type='submit'>Send Message</button>
      </form>
    </section>
   </div>
  )
}

export default contact
