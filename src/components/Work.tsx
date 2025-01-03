import React from 'react';

const Work = () => {
  const paragraphs = [
    "As an experienced traveler with a modest budget and a passion for hiking and photography, my work meshes with young people, backpackers, couples, and other important travel demographics.",
    "Together with your brand, we can create engaging experiences that will reach like-minded travelers and help you sell your products or promote your travel destination.",
    "This blog has up to 350,000 readers per month. My goal is to create unique and fresh travel content and photos from around the world, with an emphasis on quality over quantity.",
    "I do all of the writing and photography on this website myself. I never use AI writing or stock photos unless otherwise noted, and I plan to keep it that way. Everything on my blog comes from my own personal experience.",
    "I'm also an FAA Part 107 trained and certified drone pilot for doing commercial work with drones in the United States.",
    "My past work has been featured by some big names in the travel industry, such as Travel + Leisure and BBC Travel, and my videos have racked up more than 20 million views on Facebook via companies like UNILAD Adventure and Must Do Travels.",
    "Over the years, I've also partnered with hotels, tourism bureaus, and some great equipment brands like Napier Outdoors.",
    "You can be next! Feel free to contact me using the form below!"
  ];

  return (
    <div className="my-8 text-left mx-auto max-w-4xl px-4">
      <h1 className='text-3xl font-extrabold text-left my-8 text-purple-400'>
        Work With Me
      </h1>
      <h3 className='text-xl font-thin mt-0 text-left text-black'>
        Collabs
      </h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className='text-lg text-gray-500 font-normal text-left mt-4'>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Work;
