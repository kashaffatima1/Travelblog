import Navbar from "@/components/Navbar";
import Mega from "@/components/Mega";
import React from "react";
import Footer from "@/components/Footer";
import About from "@/components/Work";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Mega />
    <About />
    <Footer />
   </div>
  );
}
