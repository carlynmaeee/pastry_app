import React from 'react'
import Link from 'next/link'

const Header:React.FC = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 15px' }}>
            <Link href="/" className='text-white hover:text-gray-400'>Home</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link href="/about" className='text-white hover:text-gray-400'>About</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link href="/contact" className='text-white hover:text-gray-400'>Contact</Link>
          </li>
          <li style={{ margin: '0 15px' }}>
            <Link href="/signin" className='text-white hover:text-gray-400'>Sign In</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;