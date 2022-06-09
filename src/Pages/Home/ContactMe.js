import React from 'react';

const ContactMe = () => {
    return (
        <div className='flex justify-center'>
           <div>
               <h1 className='text-center text-accent text-4xl font-semibold my-10'>Contact me</h1>
           <input type="text" className='rounded w-56' placeholder='Username' name="" id="" />
            <input type="textarea" className='block w-56 textarea my-3' placeholder='text' />
            <div className='flex justify-center'>
            <input type="button" value="Submit" className='btn bg-primary text-black justify-center' />
            </div>
           </div>
        </div>
    );
};

export default ContactMe;