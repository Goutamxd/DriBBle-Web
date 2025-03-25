import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const shots = [
  { id: 1, image: "https://source.unsplash.com/random/400x300", title: "Minimal UI" },
  { id: 2, image: "https://source.unsplash.com/random/401x301", title: "Creative Concept" },
  { id: 3, image: "https://source.unsplash.com/random/402x302", title: "Modern Aesthetics" },
  { id: 4, image: "https://source.unsplash.com/random/403x303", title: "Sleek & Clean" },
];

export default function DribbbleUI() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-pink-500">Dribbble</h1>
        <div className="flex gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
            />
            <Search className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
          </div>
          <Button variant="outline" className="flex items-center">
            <User className="mr-2 w-4 h-4" /> Login
          </Button>
          <Button className="bg-pink-500 text-white">Sign Up</Button>
        </div>
      </nav>

      {/* Shots Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shots.map((shot) => (
          <Card key={shot.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition">
            <img src={shot.image} alt={shot.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{shot.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
