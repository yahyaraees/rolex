// import React from 'react'

// const HomeContant = () => {
//   return (
//     <section className='hero'> 
//     <div> 


//       <h2>The collection</h2>
//       <h1>Sea‑Dweller</h1>
//     </div>
//     </section>
//   )
// }

// export default HomeContant

import React from 'react';

const HomeContant = () => {
  return (
    <section className='hero'> 
      <div>
        {/* Video Tag */}
        <video className='hero-video' autoPlay loop muted>
          <source src="/The new Rolex Deepsea (1).mp4" type="video/mp4" />
          {/* Tumhara browser is video format ko support nahi karta. */}
        </video>

        {/* Text Content */}
        <div className='hero-content'>
          <h2>The collection</h2>
          <h1>Sea‑Dweller</h1>
        </div>
      </div>
    </section>
  );
};

export default HomeContant;
