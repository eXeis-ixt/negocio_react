import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Cover } from "./ui/cover";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";

export function Hero() {
  return (
    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center py-16 sm:py-24 lg:py-32">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl max-w-3xl">
          <span className="block">Transform your ideas into</span>{' '}
          <span className="block text-blue-600">With Communic</span>
        </h1>
        <p className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl max-w-2xl">
          Create stunning digital experiences that captivate your audience. Our platform helps you build, deploy, and scale your next big idea with ease.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size={"lg"}>
          <Link prefetch
            href="/"
            className="flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
            </Button>
            <Button size={"lg"} variant={"ghost"}>
          <Link prefetch
            href="/"
            className="flex items-center justify-center"
          >
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
            </Button>
        </div>
      </div>
    </div>
  </div>

  );
}
