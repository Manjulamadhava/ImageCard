import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[hsl(30,38%,92%)] p-5 box-border">
      <div className="flex flex-col max-w-[600px] bg-white rounded-lg flex-wrap shadow-lg overflow-hidden  md:flex-row">
        <div className="w-full md:w-1/2">
          <img src="/image-product-desktop.jpg" alt="Product"  className="w-full h-full object-cover block rounded-t-[10px] md:rounded-none"/>
        </div>
        <div className="flex flex-1 p-5 md:p-6 flex-col justify-between gap-4 md:w-1/2">
          <span className="uppercase text-sm text-gray-500 tracking-[5px]">Perfume</span>
          <h1 className="leading-[1.2] font-bold text-3xl text-[hsl(212,21%,14%)]">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-sm leading-[1.6] color-[hsl(228,12%,48%)]">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-5">
            <h1 className="font-bold  text-2xl md:text-3xl text-[hsl(158,36%,37%)]">$149.99</h1>
            <span className="line-through text-sm md:text-base text-[hsl(228,12%,48%)]">$169.99</span>
          </div>
          <button className="flex items-center justify-center gap-2 p-3 bg-[hsl(158,36%,37%)] text-white 
          font-bold text-sm rounded-lg cursor-pointer hover:bg-[hsl(158,36%,20%)] transition-colors duration-200 ease-in-out">
            <img src="/icon-cart.svg" alt="cart icon" className="h-5 w-5"/>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
