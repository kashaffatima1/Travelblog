"use client";
import React from 'react'
import CommentSection from '@/components/Comment';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

   const posts = [
   {
     id: "1",
     title: "Maya Bay In Thailand: The Beach Is Open! (Phi Phi Leh)",
     description: "The beach at Maya Bay is one of the most famous and photogenic places in Thailand, and it’s the main thing responsible for bringing travelers to the Phi Phi islands. In fact, it’s now one of the most famous white sand beaches in the world. Maya Bay is open again for 2024! It was temporarily closed for conservation from August 1 to September 30, but it reopened for tourists on October 1, so now is a great time to plan a visit!  The entire beach is surrounded by tall limestone cliffs, with clear turquoise water, baby sharks swimming around, and sand that’s white as snow. Everything about it looks perfect. Yep, this is paradise! Maya Bay in Thailand, nestled on the picturesque Phi Phi Leh island, is a natural gem that has reopened its shores to visitors. Known for its stunning azure waters and dramatic limestone cliffs, Maya Bay gained global fame from the movie The Beach. The bay was temporarily closed to allow the delicate ecosystem to recover from the impact of mass tourism. This initiative has been successful, leading to a significant revival of its coral reefs and marine life. Today, visitors can once again bask in the beauty of Maya Bay, but with new regulations in place to safeguard its natural splendor. Measures include limiting the number of tourists and prohibiting boats from anchoring directly in the bay, ensuring the preservation of its pristine environment. The reopening of Maya Bay is a reminder of the importance of sustainable tourism practices. By managing tourist activities responsibly, it's possible to enjoy and protect this stunning destination. The clear waters, vibrant marine life, and serene atmosphere now offer a more mindful experience for all who visit. Maya Bay stands as a testament to the positive impact of conservation efforts, inviting travelers to explore and appreciate its rejuvenated beauty.",
    date: "September 1,2024",
     imgURL: "/images/card1.jpg",
   },
   {
     id: "2",
     title: "10 Day Morocco Itinerary: Marrakesh, Fes, Sahara & Toubkal",
     description: "Embark on an unforgettable 10-day journey through Morocco, starting with the vibrant city of Marrakesh, where you can explore bustling souks, historic palaces, and the enchanting Jardin Majorelle. Next, head to the cultural heartland of Fes, home to one of the world's oldest universities and a maze-like medina filled with artisan workshops and ancient architecture. From Fes, venture into the vast Sahara Desert for a magical experience of camel trekking and camping under the starry skies. Feel the serenity of the endless dunes as you witness breathtaking sunrises and sunsets. Continue your adventure to the High Atlas Mountains, where you'll conquer the majestic Mount Toubkal, North Africa's highest peak. The trek offers stunning landscapes, traditional Berber villages, and a rewarding sense of achievement. Along the way, savor the rich flavors of Moroccan cuisine, from aromatic tagines to sweet pastries. This itinerary seamlessly blends urban exploration, cultural immersion, and natural wonders, providing a comprehensive glimpse into Morocco's diverse beauty. Whether you're wandering through ancient medinas, marveling at desert vistas, or scaling mountain heights, this 10-day adventure promises to be an enriching and exhilarating experience that showcases the very essence of Morocco.",
     date: "October 20, 2024",
     imgURL: "/images/card2.jpg",
   },
   {
     id: "3",
     title: "11 Tips For Visiting Mount Rushmore National Memorial",
     description: "Visiting Mount Rushmore National Memorial is a breathtaking experience, and with a little preparation, you can make the most of your trip. Start by arriving early to avoid crowds and secure a good parking spot. The morning light also offers fantastic photo opportunities of the monument. Be sure to take the Presidential Trail, a half-mile loop that provides closer views of the carvings and leads to the Sculptor's Studio, where you can learn about the monument's creation. Don’t miss the evening lighting ceremony, which adds a dramatic touch to the already stunning site. Pack comfortable walking shoes and water, as you’ll be doing a fair bit of exploring. Check out the visitor center for educational exhibits and a short film about the history of Mount Rushmore. If you’re traveling with children, the Junior Ranger Program offers engaging activities. For a unique perspective, consider a helicopter tour. Don't forget to explore the surrounding Black Hills, including Custer State Park and Crazy Horse Memorial. Lastly, respect the site and its significance to American history by following all guidelines and preserving its natural beauty for future visitors. With these tips in mind, your visit to Mount Rushmore will be both memorable and enriching.",
      date: "October 15, 2024",
     imgURL: "/images/card3.jpg",
   },
   {
     id: "4",
     title: "How To Visit Khao Sok National Park In Thailand",
     description: "Khao Sok National Park in Thailand is a breathtaking destination that offers visitors a chance to experience lush rainforests, towering limestone cliffs, and pristine lakes. To visit, start by traveling to Surat Thani, the closest city with an airport and train station. From there, you can take a bus or taxi to the park, which is about a two-hour drive away. Once you arrive, you'll find a range of accommodation options, from budget-friendly bungalows to luxurious treehouse resorts. Be sure to explore the park's stunning Cheow Lan Lake, where you can enjoy a boat tour or stay overnight in a floating raft house. Don't miss the chance to trek through the jungle with a local guide, who can help you spot exotic wildlife and unique flora. The park also offers opportunities for kayaking, cave exploring, and swimming in natural pools. To make the most of your visit, plan your trip during the dry season (November to April) for the best weather conditions. Whether you're an adventure seeker or nature lover, Khao Sok National Park provides a serene escape into Thailand's natural beauty, ensuring an unforgettable experience.",
     date: "September 3, 2024",
     imgURL: "../images/card4.jpg",
   },
   {
     id: "5",
     title: "Fulidhoo Island Guide: Shark & Stingray Beach In Maldives",
     description: "Fulidhoo Island in the Maldives is a hidden gem perfect for those seeking an off-the-beaten-path experience. Known for its idyllic beaches and vibrant marine life, Fulidhoo offers a serene escape from bustling tourist hotspots. One of the island’s main attractions is Shark and Stingray Beach, where visitors can witness these magnificent creatures up close. As dusk falls, nurse sharks and stingrays glide gracefully through the shallow waters, creating a mesmerizing spectacle. Snorkeling here is a must, providing an incredible opportunity to explore the underwater world and its diverse marine species. The island's small size means everything is within walking distance, including local eateries where you can savor Maldivian cuisine. Friendly locals add to the island's charm, offering insights into traditional practices and customs. Accommodation options range from guesthouses to boutique hotels, ensuring a comfortable stay. For a complete experience, consider taking a boat trip to nearby reefs and sandbanks, perfect for a day of snorkeling, swimming, and relaxation. Fulidhoo Island strikes a perfect balance between adventure and tranquility, making it an ideal destination for nature lovers and those looking to unwind amidst the natural beauty of the Maldives.",
      date: "September 20, 2024",
     imgURL: "../images/card5.jpg",
   },
   {
     id: "6",
     title: "Sanur Bali Travel Guide: 24 Best Things To Do",
     description: "Sanur in Bali is a tranquil haven known for its laid-back vibe and family-friendly atmosphere. Whether you're looking to unwind or explore, there are plenty of activities to keep you entertained. Start your day with a serene sunrise walk along the beachfront promenade, where you can enjoy the stunning views of the calm ocean and Mount Agung in the distance. The Sanur Beach is perfect for swimming, sunbathing, and engaging in water sports such as paddleboarding and windsurfing. Don't miss the opportunity to visit the Le Mayeur Museum, showcasing the works of the Belgian painter Adrien-Jean Le Mayeur and Balinese culture. For nature enthusiasts, the Bali Orchid Garden offers a colorful display of exotic flowers. When hunger strikes, head to the local night market, Pasar Sindhu, to savor delicious Balinese cuisine. A day trip to the nearby Serangan Island, also known as Turtle Island, provides a chance to learn about turtle conservation efforts. Lastly, indulge in a relaxing spa treatment to rejuvenate your senses. Sanur's blend of cultural experiences, natural beauty, and leisurely activities makes it a must-visit destination in Bali, offering something for every type of traveler.",
      date: "April 7, 2024",
     imgURL: "../images/card6.jpg",
   },
   {
     id: "7",
     title: "How To Hike To The Tiger’s Nest Monastery In Bhutan",
     description: "Hiking to the Tiger's Nest Monastery, also known as Paro Taktsang, in Bhutan is an unforgettable adventure that combines physical challenge with spiritual reward. Perched on a cliffside 3,000 feet above the Paro Valley, this iconic monastery offers breathtaking views and a profound sense of peace. Begin your journey early in the morning to avoid the midday heat and ensure ample time for the hike. The trail starts at the base of the mountain, winding through lush forests of blue pine and rhododendron, with prayer flags fluttering in the breeze. The initial ascent is moderately steep, leading to a viewpoint where you can take a break and capture stunning photos. From there, the trail continues to a charming cafeteria, a perfect spot for refreshments and rest. The final stretch involves a series of stone steps, testing your endurance but rewarding you with closer views of the monastery's intricate architecture. Upon reaching the Tiger's Nest, you'll be awed by its serene beauty and the rich history embedded within its walls. Remember to dress modestly and respect the site's spiritual significance. Hiking to the Tiger's Nest Monastery is not just a trek; it's a journey into Bhutan's heart and soul, leaving you with memories to cherish forever. ",
       date: "March 24, 2024",
     imgURL: "../images/card7.jpg",
   },
   {
     id: "8",
     title: "Bohol Island Travel Guide For The Philippines",
     description: "Bohol Island in the Philippines is a traveler’s paradise, offering a unique blend of natural wonders and cultural experiences. Begin your journey by exploring the iconic Chocolate Hills, a geological formation of over a thousand cone-shaped hills that turn brown in the dry season, resembling chocolate mounds. A visit to the Tarsier Sanctuary is a must, where you can see the world’s smallest primates up close in their natural habitat. For beach lovers, Panglao Island boasts pristine white sands and crystal-clear waters perfect for snorkeling and diving. Alona Beach, in particular, is popular for its vibrant marine life and stunning coral reefs. Don't miss a cruise on the Loboc River, where you can enjoy a serene meal on a floating restaurant while taking in the lush jungle scenery. Bohol also offers historical sites like the Baclayon Church, one of the oldest stone churches in the Philippines. Adventure seekers can try zip-lining at the Danao Adventure Park or paddleboarding in the Loboc River. Lastly, indulge in local cuisine, including fresh seafood and the famous Bohol Bee Farm’s organic delights. Whether you’re seeking adventure, relaxation, or cultural immersion, Bohol Island promises an unforgettable experience. ",
       date: "March 10, 2024",
     imgURL: "../images/card8.jpg",
   },
   {
     id: "9",
     title: "How To Visit Himeji Castle On A Day Trip From Osaka & Kyoto",
     description: "Visiting Himeji Castle on a day trip from Osaka or Kyoto is a delightful experience, offering a glimpse into Japan's rich history and stunning architecture. Start your journey early by taking the shinkansen (bullet train) from either Osaka or Kyoto to Himeji Station, which takes about 30-60 minutes. From the station, it's a pleasant 15-minute walk to the castle, where you'll be greeted by the breathtaking view of the well-preserved white structure, often referred to as the White Heron Castle due to its elegant appearance. Begin your exploration with the main keep, where you can climb to the top for panoramic views of the city. As you wander through the castle grounds, take time to appreciate the intricate details of the architecture, defensive features, and the beautifully maintained gardens. Don't miss the Koko-en Garden, located adjacent to the castle, which offers a serene escape with its ponds, tea houses, and seasonal flowers. Enjoy lunch at one of the nearby restaurants serving delicious local cuisine. Before heading back, browse the souvenir shops for unique mementos. With its rich history and captivating beauty, a day trip to Himeji Castle from Osaka or Kyoto is a rewarding adventure that provides a deep connection to Japan's cultural heritage.",
     date: "March 15, 2024",
     imgURL: "../images/card9.jpg",
   }
 ];

 export default function Post({params}: {params: {id: string}}) {
  const {id} = params;
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return(
       <h2 className='text-2xl text-center font-bold mt-15 text-purple-400'>Blog not found</h2>
    )
  };

  const renderParagraphs = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="text-justify mt-4 ">
        {paragraph.trim()}
      </p>
    ));
};

return(
  <div>
    <Navbar />
    <div className=" max-w-3xl mx-auto p-5">
  {post.imgURL && (
    <div className="flex justify-center">
        <img
        src={post.imgURL}
        alt={post.title}
        className="w-[500px] h-auto mt-4  ml-5 rounded-md"
        />
        </div>
      )}
      <h1 className="text-3xl text-center font-bold mt-5 text-purple-900">
        {post.title}
        </h1>
      <div className="mt-6 text-lg text-gray-500">
        {renderParagraphs(post.description)}
      </div>
    </div>
    <CommentSection postID={post.id}/>
     <div className='mt-8'>
     <Footer />
     </div>
    
  </div>
)
 }
