import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12">
      {/* Top centered heading */}
      <h1 className="text-5xl md:text-7xl font-bold text-black mb-10 text-center w-full">About Us</h1>
      {/* Centered text with even borders */}
      <div className="flex items-stretch w-full max-w-4xl px-4 mb-12">
        {/* Left border */}
        <div className="hidden md:block border-l border-black/20 mr-6" />
        {/* Centered text */}
        <div className="flex-1 text-center self-center">
          <p className="text-xl text-black leading-relaxed">
            We are a passionate team dedicated to creating innovative solutions that push the boundaries of technology. 
            Our mission is to build products that not only solve real-world problems but also inspire and delight users.
          </p>
          <p className="text-xl text-black leading-relaxed mt-6">
            With years of experience in design and development, we bring together creativity and technical expertise 
            to deliver exceptional digital experiences that make a difference.
          </p>
        </div>
        {/* Right border */}
        <div className="hidden md:block border-r border-black/20 ml-6" />
      </div>
      {/* Bento grid for images - hack1.png big on left, hack2.png and hack3.png stacked on right */}
      <div className="w-full max-w-5xl px-2 md:px-4 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 items-stretch mb-10">
        {/* Large left image: hack1.png */}
        <div className="md:col-span-2 md:row-span-2 h-full">
          <img 
            src="/hack1.png" 
            alt="Hack 1" 
            className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-md"
          />
        </div>
        {/* Top right: hack2.png */}
        <div className="md:col-span-1 md:row-span-1">
          <img 
            src="/hack2.png" 
            alt="Hack 2" 
            className="w-full h-full max-h-[245px] object-cover rounded-2xl shadow-md"
          />
        </div>
        {/* Bottom right: hack3.png */}
        <div className="md:col-span-1 md:row-span-1">
          <img 
            src="/hack3.png" 
            alt="Hack 3" 
            className="w-full h-full max-h-[245px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
      {/* Hackathon ecosystem text */}
      <div className="w-full max-w-3xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Building the Hackathon Ecosystem</h2>
        <p className="text-lg text-black leading-relaxed">
          Hackathons are more than just competitions—they are a celebration of creativity, collaboration, and innovation. Our mission is to empower hackers, organizers, and communities by providing the tools, resources, and support needed to make every hackathon a success.<br /><br />
          Whether you're a first-time participant or a seasoned hacker, we're building an ecosystem where everyone can learn, grow, and connect. Join us as we shape the future of hackathons together!
        </p>
      </div>
    </div>
  );
}

export default About; 