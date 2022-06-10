import React from 'react';

const AboutMe = () => {
    return (
        <div className='container mb-10  mx-auto'>
            <h1 data-aos="fade-up-left" className='text-4xl text-center mb-2 uppercase font-bold text-accent'>about me</h1>
            <p data-aos="fade-up-right" className='text-md text-accent mb-5'>I’am a junior front end developer. Usually I create applications with reactjs.My goal
                is to finish the task on time and trying to learn more. Currently I am pursuing Bachelor’s Degree in
                Software Engineering.</p>
            <div className='grid grid-cols-1 gap-5'>
                <div data-aos="fade-up-right" className='border bg-[#c4c4c41a]   p-3 rounded-md'>
                    <h1 className='text-4xl mb-2 text-center uppercase text-accent font-semibold '>programming Skills</h1> <hr />
                    <div className='ml-5 mt-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/LYbZ6mF/732212.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="95" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/9Y3DqkV/732190.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="93" max="100"></progress>
                        </div>
                    </div>
                    <div className='ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/tHVGhsN/bootstrapicon.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="87" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/F6fMZ2V/qy0ctxjhdgvvj6e4ra10.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="94" max="100"></progress>
                        </div>
                    </div>
                    <div className='ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/SBrQdDX/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-th.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="80" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/HKhT2Yc/kisspng-react-javascript-library-github-5af70e3c5c73d5-5239164815261404763787.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="85" max="100"></progress>
                        </div>
                    </div>
                    <div className='ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/HnZkrVj/kisspng-firebase-cloud-messaging-computer-icons-google-clo-bell-notification-youtube-transparent-amp.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="50" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/p3bqbTZ/no6273n057-node-js-logo-nodejs-transparent-logo-google-search-removebg-preview.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="25" max="100"></progress>
                        </div>
                    </div>
                    <div className='ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/H7TH3JY/kisspng-mongodb-database-clip-art-computer-icons-nosql-5b900df9c897c4-0301692015361674178216.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="30" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} className='rounded-full' src="https://i.ibb.co/Lk3sbNF/png-clipart-common-daisy-flower-saisy-text-logo-thumbnail.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="85" max="100"></progress>
                        </div>
                    </div>
                    <div className='ml-5 flex justify-evenly flex-col lg:flex-row sm:flex-row'>
                        <div className='flex my-2'>
                            <img width={30} src="https://i.ibb.co/5KH28Qq/919832.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="10" max="100"></progress>
                        </div>
                        <div className='flex my-2'>
                            <img width={30} className='rounded-full' src="https://i.ibb.co/ckPgXCM/Rlogical-Blog-Images-thumbnail.png" alt="" /><progress class="progress mt-3 progress-primary border h-3 ml-3 w-64" value="5" max="100"></progress>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up-left" className='border bg-[#c4c4c41a] skills shadow-xl p-3 rounded-md'>
                    <h1 className='text-4xl mb-2 text-center uppercase text-accent font-semibold '>Education </h1> <hr />
                    <div className='flex justify-around items-center'>
                        <div data-aos="zoom-in"> <p className='text-accent text-xl m-5'>BSC in Software Engineering <br />
                            Daffodil International University <br />
                            Semester : 11th <br />
                            CGPA : 3.54 <br />
                        </p></div>
                        <div data-aos="zoom-in">
                            <img width={180} src="https://i.ibb.co/51sL04H/daffodil-international-university-logo.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;