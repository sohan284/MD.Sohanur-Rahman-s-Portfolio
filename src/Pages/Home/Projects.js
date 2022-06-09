import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Projects = () => {
    return (
        <div className='container mb-20 mx-auto'>
            <h1 className='text-4xl text-center my-10 uppercase font-bold text-accent'>Projects</h1>
            <div className='flex justify-center'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                
                <div>
                    <div class="card h-96 w-72 shadow-xl project image-full">
                        <figure><img height={200}  src="https://i.ibb.co/R0rr1x7/Screenshot-7.png" alt="" /></figure>
                        <div class="card-body">
                            <h1 className='text-center text-accent'>Menufacturer</h1>
                            <h1 className='text-3xl my-16 text-primary font-semibold text-center'>Moto Parts</h1>
                            <div class="card-actions justify-center">
                                <a href="https://moto-parts-c256e.web.app/" class="btn border-2 bg-transparent " target='blank'>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card h-96 w-72  shadow-xl project  image-full">
                        <figure><img src="https://i.ibb.co/c6YsL3N/Screenshot-9.png" alt="" /></figure>
                        <div class="card-body">
                        <h1 className='text-center text-accent'>E-Commerce</h1>
                            <h1 className='text-3xl my-20 text-primary font-semibold text-center'>Grocery Shop</h1>
                            <div class="card-actions  justify-center">
                            <a href="https://grocery-shop-c9e00.web.app/" class="btn border-2 bg-transparent " target='blank'>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card h-96 w-72 shadow-xl project  image-full">
                        <figure><img src="https://i.ibb.co/BqNgsfS/Screenshot-8.png" alt="" /></figure>
                        <div class="card-body">
                            <h1 className='text-3xl my-20 text-primary font-semibold text-center'>Perfect Couple</h1>
                            <div class="card-actions justify-center">
                            <a href="https://perfect-couple-90811.web.app/" class="btn border-2 bg-transparent " target='blank'>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
               

            </div>
            </div>
        </div>
    );
};

export default Projects;