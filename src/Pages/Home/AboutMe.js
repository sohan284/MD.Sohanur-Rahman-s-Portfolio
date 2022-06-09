import React from 'react';

const AboutMe = () => {
    return (
        <div className='container mb-10  mx-auto'>
<h1 className='text-4xl mb-2 uppercase font-bold text-accent'>about me</h1>
<p className='text-md text-accent mb-5'>I’am a junior front end developer. Usually I create applications with reactjs.My goal
is to finish the task on time and trying to learn more. Currently I am pursuing Bachelor’s Degree in
Software Engineering.</p> 
<div className='grid lg:grid-cols-2 gap-5'>
<div className='border bg-[#c4c4c41a] skills  p-3 rounded-md'>
    <h1  className='text-4xl mb-2 text-center uppercase text-accent font-semibold '>programming Skills</h1> <hr />
    <div className='m-5'>
    <span className='text-accent font-semibold mr-10'>HTML</span><progress class="progress mt-3 progress-primary w-96" value="80" max="90"></progress> <br />
    <span className='text-accent font-semibold mr-10'>CSS</span><progress class="progress mt-3 progress-primary w-96" value="80" max="100"></progress> <br />
    <span className='text-accent font-semibold mr-10'>JavaScript</span><progress class="progress mt-3 progress-primary w-96" value="80" max="100"></progress> <br />
    <span className='text-accent font-semibold mr-10'>ReactJS</span><progress class="progress mt-3 progress-primary w-96" value="70" max="100"></progress> <br />
    <span className='text-accent font-semibold mr-10'>NodeJS</span><progress class="progress mt-3 progress-primary w-96" value="30" max="100"></progress> <br />
    </div>
</div>
<div className='border bg-[#c4c4c41a] skills shadow-xl p-3 rounded-md'>
    <h1  className='text-4xl mb-2 text-center uppercase text-accent font-semibold '>Education </h1> <hr />
    <p className='text-accent text-xl m-5'>BSC in Software Engineering <br />
Daffodil International University <br />
Semester : 11th <br />
CGPA : 3.54 <br />
</p>
    </div>
</div>
        </div>
    );
};

export default AboutMe;