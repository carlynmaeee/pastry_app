import React from 'react'
import MainLayout from '@/components/layouts/MainLayout';
import Link from 'next/link';

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: "url('https://img.freepik.com/premium-photo/birthday-cake-with-candles-dinning-room-blurred-background-ai-generative_407474-5414.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <MainLayout>
      <main
        style={backgroundImageStyle}
        className='min-h-screen flex items-center justify-center p-6'
      >
        <div style={{ padding: '50px', textAlign: 'center', minHeight: '100vh' }}>
          <h1 style={{ marginBottom: '20px', color:'white', fontSize: '50px' }}>Welcome to Our Cake Shop!</h1>
          <p style={{ fontSize: '20px', marginBottom: '30px', color:'white', marginTop: '30px'}}>
            Indulge in our delicious selection of cakes made with love and quality ingredients.
          </p>
          <button style={{ padding: '10px 80px', backgroundColor: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '200px' }}>
            Cake Menu
          </button>
        </div>
      </main>
    </MainLayout>
  );
}
