import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div style={{
        backgroundColor: 'rgba(254, 190, 204, 0.7)', // Light pink with transparency
        backdropFilter: 'blur(10px)', // Blur effect
        height: '100vh', // Full height
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        padding: '20px',
        boxSizing: 'border-box', // Include padding in height/width
      }}>
        <div style={{
          backgroundColor: 'white', // White background for content
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px', // Max width for content
          margin: 'auto',
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
          
          <section>
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>
              We would love to hear from you! Feel free to reach out through any of the methods below.
            </p>
            
            <div style={{ textAlign: 'left' }}>
              <h3>Phone</h3>
              <p>
                <a href="09815856727/09262608241" style={{ color: 'blue' }}>09815856727/09262608241</a>
              </p>

              <h3>Email</h3>
              <p>
                <a href="carlynmaedugmoc@gmail.com" style={{ color: 'blue' }}>carlynmaedugmoc@gmail.com</a>
              </p>

              <h3>Address</h3>
              <p>
                Purok Pantalan, Pantad,<br />
                Dumalinao, Zamboanga del Sur, Philippines, 7015
              </p>

              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 8:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}