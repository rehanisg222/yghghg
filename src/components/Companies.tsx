import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Beastgrip",
      logo: "https://sdmntprwestus.oaiusercontent.com/files/00000000-385c-6230-baec-bf1bcbba9d01/raw?se=2025-05-06T09%3A11%3A19Z&sp=r&sv=2024-08-04&sr=b&scid=24b5a4bb-3166-5764-8e30-c64b6e30d5f4&skoid=72d71449-cf2f-4f10-a498-f160460104ee&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-06T03%3A21%3A54Z&ske=2025-05-07T03%3A21%3A54Z&sks=b&skv=2024-08-04&sig=NatuLQySUpDJyo3lAZa5Y93ENojIcGvvltF2Py0rUO8%3D",
    },
    {
      name: "Elite",
      logo: "https://i.ibb.co/Jk8Gw3S/elite.png",
    },
    {
      name: "Durable",
      logo: "https://i.ibb.co/0MKPWxv/durable.png",
    },
    {
      name: "Upstack",
      logo: "https://i.ibb.co/YRwBkHb/upstack.png",
    },
    {
      name: "Liftoff",
      logo: "https://i.ibb.co/Lx0h6Yh/liftoff.png",
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Companies That Trust Us
        </h2>
        
        <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div 
              key={company.name}
              className={`
                ${index > 2 ? 'col-span-3 md:col-span-1 md:col-start-2' : ''}
                flex items-center justify-center
                transform hover:scale-110 transition-transform duration-300 ease-in-out
                opacity-0 animate-fade-in
              `}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="h-16 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;