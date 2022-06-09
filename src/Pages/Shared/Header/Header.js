import React from 'react';

const Header = () => {
    return (
        <div class="navbar bg-black text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
        <li><a>HOME</a></li>
        <li tabindex="0">
         
          
        </li>
        
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-4xl">SOHAN</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><a>HOME</a></li>
      
      
    </ul>
  </div>
</div>
    );
};

export default Header;