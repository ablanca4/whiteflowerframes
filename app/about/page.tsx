"use client";

import { Camera, Award, Users, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1624873613044-be3c1de7f09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzY4Mzk2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About photographer"
            fill={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-4">About Aperture</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Telling stories through the lens since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-gray-700 font-bold text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Welcome to Aperture, where every photograph tells a unique story.
              Founded in 2015, we&apos;ve been dedicated to capturing the beauty
              and emotion of life&apos;s most precious moments.
            </p>
            <p>
              Our journey began with a simple passion for photography and has
              evolved into a full-service studio that specializes in portrait,
              event, and commercial photography. We believe that great
              photography goes beyond technical excellence—it&apos;s about
              connecting with people and capturing the essence of every moment.
            </p>
            <p>
              With over a decade of experience, we&apos;ve had the privilege of
              working with hundreds of clients, from intimate family portraits
              to large-scale corporate events. Each project is approached with
              creativity, professionalism, and a commitment to exceeding
              expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-gray-700 font-bold text-center">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Camera className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-gray-700 font-bold text-lg">
                Creativity
              </h3>
              <p className="text-gray-600 text-sm">
                Pushing boundaries and exploring new perspectives in every shot
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-gray-700 font-bold text-lg">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Delivering the highest quality work with attention to every
                detail
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-gray-700 font-bold text-lg">
                Connection
              </h3>
              <p className="text-gray-600 text-sm">
                Building meaningful relationships with every client we work with
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-gray-700 font-bold text-lg">Passion</h3>
              <p className="text-gray-600 text-sm">
                Bringing enthusiasm and dedication to every project we undertake
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-gray-700 font-bold text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="mb-3 text-gray-700 font-bold">
                Portrait Photography
              </h3>
              <p className="text-gray-600 text-sm">
                Professional headshots, family portraits, and personal branding
                sessions
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="mb-3 text-gray-700 font-bold">
                Event Photography
              </h3>
              <p className="text-gray-600 text-sm">
                Weddings, corporate events, and special celebrations captured
                beautifully
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="mb-3 text-gray-700 font-bold">
                Commercial Photography
              </h3>
              <p className="text-gray-600 text-sm">
                Product photography, advertising campaigns, and brand
                storytelling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-4">Let&apos;s Create Together</h2>
          <p className="text-white/80 mb-8 text-lg">
            Ready to start your photography journey with us? Get in touch to
            discuss your project.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-400 transition-colors mb-6 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
