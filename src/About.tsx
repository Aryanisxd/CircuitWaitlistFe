import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          About Us
        </h1>
        <p className="text-xl text-white/70 leading-relaxed">
          We are a passionate team dedicated to creating innovative solutions that push the boundaries of technology. 
          Our mission is to build products that not only solve real-world problems but also inspire and delight users.
        </p>
        <p className="text-xl text-white/70 leading-relaxed mt-6">
          With years of experience in design and development, we bring together creativity and technical expertise 
          to deliver exceptional digital experiences that make a difference.
        </p>
      </div>
    </div>
  );
}

export default About; 