import React from 'react';
import BlogCard from '../components/BlogCard';
import title from "process";
import  "../../public/images/card1.jpg"
import "../../public/images/card2.jpg"
import "../../public/images/card3.jpg"
import "../../public/images/card4.jpg"
import "../../public/images/card5.jpg"
import "../../public/images/card6.jpg"
import "../../public/images/card7.jpg"
import "../../public/images/card8.jpg"
import "../../public/images/card9.jpg"

export default function  Mega (){
  const posts = [
  {
    id: "1",
    title: "Maya Bay In Thailand",
    description: "The beach at Maya Bay is one of the most famous and photogenic places in Thailand, and it’s the main thing responsible for bringing travelers to the...",
    date: "September 1,2024",
    imgURL: "/images/card1.jpg",
  },
  {
    id: "2",
    title: "10 Day Morocco Itinerary: Marrakesh, Fes, Sahara & Toubkal",
    description: "Morocco is an amazing place to travel. If you have 10 days in the country, the best way to spend it is by seeing the old cities…",
    date: "October 20, 2024",
    imgURL: "/images/card2.jpg",
  },
  {
    id: "3",
    title: "11 Tips For Visiting Mount Rushmore National Memorial",
    description: "Mount Rushmore is one of the most famous landmarks in the United States, and it’s well worth a quick visit if you’re traveling through the Black Hills…",
    date: "October 15, 2024",
    imgURL: "/images/card3.jpg",
  },
  {
    id: "4",
    title: "How To Visit Khao Sok National Park In Thailand",
    description: "One of the best places to see nature and animals in Thailand is at the Khao Sok National Park, which is not too far from Phuket and…",
    date: "September 3, 2024",
    imgURL: "../images/card4.jpg",
  },
  {
    id: "5",
    title: "Fulidhoo Island Guide: Shark & Stingray Beach In Maldives",
    description: "Fulidhoo is a small, budget-friendly local island we visited recently in the Maldives, along with Dhigurah island, which we loved for its beaches and sandbar. Aside from…",
    date: "September 20, 2024",
    imgURL: "../images/card5.jpg",
  },
  {
    id: "6",
    title: "Sanur Bali Travel Guide: 24 Best Things To Do",
    description: "Sanur is known for being one of the most quiet and family friendly areas of Bali Indonesia, but there are also plenty of good things to do…",
    date: "April 7, 2024",
    imgURL: "../images/card6.jpg",
  },
  {
    id: "7",
    title: "How To Hike To The Tiger’s Nest Monastery In Bhutan",
    description: "The Tiger’s Nest Monastery hike is one of the best things to do in Bhutan, and probably one of the most amazing day hikes in the world.…",
    date: "March 24, 2024",
    imgURL: "../images/card7.jpg",
  },
  {
    id: "8",
    title: "Bohol Island Travel Guide For The Philippines",
    description: "The island of Bohol Philippines is a unique one, with exotic landscapes like the ‘Chocolate Hills,’ and wild tarsiers, the world’s smallest primate. Bohol may not be…",
    date: "March 10, 2024",
    imgURL: "../images/card8.jpg",
  },
  {
    id: "9",
    title: "How To Visit Himeji Castle On A Day Trip From Osaka & Kyoto",
    description: "Himeji Castle, also known as Himeji-jo, is the biggest medieval Samurai castle in Japan, and arguably one of the coolest and most photogenic places in the entire…",
    date: "March 15, 2024",
    imgURL: "../images/card9.jpg",
  }
];

return(
  <div className="my-8">
    <h1 className='text-3xl font-extrabold text-center my-8 b text-purple-400'>
      {"  "}
      EXPLORE. DREAM. DISCOVER.</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div className='fade-in' key={post.id}>
          <div className='blog-card'>
            <BlogCard post={post} isDarkBackground={index % 2 === 0} />

          </div>
        </div>
      ))}
    </div>
  </div>
); 
}


  