// import { watch } from 'fs'
// import Image from 'next/image'
// import React from 'react'

// const watches = () => {


//   const WatchData = [
//     { id: 1, name: "Rolex", price: 8000, description: "Luxury Watch", image: "" }

//   ]

//   return (
//     <div>
//       <div className='watches'>
//         {WatchData.map((watch) => (
//           <div key={watch.id} className='watchCard'>
//             <img src={watch.image} alt={watch.name} />

//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

///////////
import Image from 'next/image';

const watches = () => {
  const WatchData = [
    { id: 1, name: "Rolex", price: 1999, description: "Luxury Watch", image: "/w1.png" },
    { id: 2, name: "Grace", price: 8999, description: "Luxury Watch", image: "/w8.png" },
    { id: 3, name: "Rado", price: 4500, description: "Luxury Watch", image: "/w3.png" },
    { id: 4, name: "cartier", price: 2900, description: "Luxury Watch", image: "/w4.png" },
    { id: 5, name: "Casio", price: 6799, description: "Luxury Watch", image: "/w5.png" },
    { id: 6, name: "Hublot", price: 599, description: "Luxury Watch", image: "/w6.png" },





  ];

  return (
    <div>
      <div className='watches'>
        {WatchData.map((watch) => (
          <div key={watch.id} className='watchCard'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <p className='price'>Price: ${watch.price}</p>
            <button>Add to card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default watches;


//////////





// // export default watches

// import React from 'react';

// const Watches = () => {
//   const WatchData = [
//     {
//       id: 1,
//       name: "Rolex",
//       price: 8000,
//       description: "Luxury Watch",
//       video: "/videoplayback.mp4", // Video ka URL yahaan daalo
//     },
//   ];

//   return (
//     <div>
//       <div className='watches'>
//         {WatchData.map((watch) => (
//           <div key={watch.id} className='watchCard'>
//             {/* Video Tag */}
//             <video width="300" height="300" controls>
//               <source src={watch.video} type="video/mp4" />
//               {/* Tumhara browser is video format ko support nahi karta. */}
//             </video>
//             <h3>{watch.name}</h3>
//             <p>{watch.description}</p>
//             <p>Price: ${watch.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Watches;


// import React from 'react';

// const Watches = () => {
//   const WatchData = [
//     {
//       id: 1,
//       name: "Rolex",
//       price: 8000,
//       description: "Luxury Watch",
//       video: "The new Rolex Deepsea (1).mp4", // Video ka URL yahaan daalo
//     },
//   ];

//   return (
//     <div>
//       <div className='watches'>
//         {WatchData.map((watch) => (
//           <div key={watch.id} className='watchCard'>
//             {/* Auto-play Video */}
//             <video width="300" height="300" autoPlay loop muted>
//               <source src={watch.video} type="video/mp4" />
//               {/* Tumhara browser is video format ko support nahi karta. */}
//             </video>
//             <h3>{watch.name}</h3>
//             <p>{watch.description}</p>
//             <p>Price: ${watch.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Watches;
