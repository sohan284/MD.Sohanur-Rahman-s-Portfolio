import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div data-aos="fade-down" class="navbar head text-white">
  <div class="navbar-start container">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
        <li className='font-semibold'><Link to={'/home'}>HOME</Link></li>
        <li  className='font-semibold'><a href="/home#contact">CONTACT</a></li>
        <li  className='font-semibold'><Link to={'/blogs'}>BLOGS</Link></li>
        <li  className='font-semibold'><Link to={'/aboutme'}>ABOUT</Link></li>
        <li tabindex="0"> 
        </li>
        
      </ul>
    </div>
    <a href='/home' class="btn btn-ghost mx-auto normal-case text-4xl">SOHAN</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li className='font-semibold'><Link  to={'/home'}>HOME</Link></li>
    <li  className='font-semibold'><a href="/home#contact">CONTACT</a></li>
    <li className='font-semibold'><Link to={'/blogs'}>BLOGS</Link></li>
    <li className='font-semibold'><Link to={'/aboutme'}>ABOUT</Link></li>
    <a href='https://drive.google.com/file/d/1XrNxXJutfFfdtvuvBF2-gAVDSRz7-MB7/view?usp=share_link' target="_blank"  class="btn btn-sm mt-2 bg-accent text-black font-bold rounded-full hover:btn-success ">Get Resume</a>
      
    </ul>
  </div>
</div>
    );
};

export default Header;