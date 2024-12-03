import Image from 'next/image';

const Watches = () => {
  const WatchData = [
    { id: 1, name: "Rolex", price: 1999, description: "Luxury Watch", image: "/w1.png" },
    { id: 2, name: "Grace", price: 8999, description: "Luxury Watch", image: "/w8.png" },
    { id: 3, name: "Rado", price: 4500, description: "Luxury Watch", image: "/w3.png" },
    { id: 4, name: "Cartier", price: 2900, description: "Luxury Watch", image: "/w4.png" },
    { id: 5, name: "Casio", price: 6799, description: "Luxury Watch", image: "/w5.png" },
    { id: 6, name: "Hublot", price: 599, description: "Luxury Watch", image: "/w6.png" },
  ];

  return (
    <div>
      <div className='watches'>
        {WatchData.map((watch) => (
          <div key={watch.id} className='watchCard'>
            {/* Using the Next.js Image component */}
            <Image src={watch.image} alt={watch.name} width={180} height={230} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <p className='price'>Price: ${watch.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
