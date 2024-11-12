import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div style={{
        backgroundColor: '#f8d5e4',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '800px', backgroundColor: 'white', borderRadius: '8px', padding: '30px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>About Us</h1>
          
          <section>
            <p style={{ marginBottom: '20px' }}>
            Welcome to SweetCake! We are a passionate team dedicated to crafting delightful cakes and treats that bring joy to every occasion.
            Our mission is to provide high-quality confections that cater to the diverse tastes and preferences of our valued customers.
            </p>

            <h3>Our Story</h3>
            <p style={{ marginBottom: '20px' }}>
            Founded in 2021, SweetCake began with a dream to create innovative and delectable desserts.
            Over the years, we have expanded and refined our offerings, continuously adapting to meet the evolving desires of our patrons.
            </p>

            <h3>Our Values</h3>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Customer Focused: Our customers are at the heart of everything we do, and we strive to ensure their happiness and satisfaction.</li>
              <li>Creativity: We embrace creativity and innovation, always seeking new ways to elevate our cakes and desserts.</li>
              <li>Integrity: We uphold honesty, transparency, and ethical practices in all our business dealings.</li>
              <li>Collaboration: We believe in the power of teamwork, working together to achieve our goals and deliver the best treats to our customers.</li>
            </ul>

            <h3>Our Vision</h3>
            <p>
              Our vision is to be the premier destination for cake lovers, recognized for our commitment to quality, exceptional customer service, and innovative flavors.
            We aim to forge lasting relationships with our customers while making a positive impact in the communities we serve.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}