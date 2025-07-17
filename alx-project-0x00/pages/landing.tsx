import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-extralight">Landing page</h1>
      
      <Card />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Small Buttons */}
        <Button title="Small - Rounded-sm" styles="text-sm px-3 py-1 rounded-sm bg-blue-500 text-white" />
        <Button title="Small - Rounded-md" styles="text-sm px-3 py-1 rounded-md bg-green-500 text-white" />
        <Button title="Small - Rounded-full" styles="text-sm px-3 py-1 rounded-full bg-red-500 text-white" />
        <Button title="Small - Rounded-lg" styles="text-sm px-3 py-1 Rounded-lg bg-red-500 text-white" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded-sm" styles="text-base px-4 py-2 rounded-sm bg-purple-500 text-white" />
        <Button title="Medium - Rounded-md" styles="text-base px-4 py-2 rounded-md bg-yellow-500 text-black" />
        <Button title="Medium - Rounded-full" styles="text-base px-4 py-2 rounded-full bg-pink-500 text-white" />
        <Button title="Medium - Rounded-lg" styles="text-base px-4 py-2 Rounded-lg bg-pink-500 text-white" />

        {/* Large Buttons */}
        <Button title="Large - Rounded-sm" styles="text-lg px-6 py-3 rounded-sm bg-gray-800 text-white" />
        <Button title="Large - Rounded-md" styles="text-lg px-6 py-3 rounded-md bg-indigo-500 text-white" />
        <Button title="Large - Rounded-full" styles="text-lg px-6 py-3 rounded-full bg-teal-500 text-white" />
        <Button title="Large - Rounded-lg" styles="text-lg px-6 py-3 Rounded-lg bg-teal-500 text-white" />
      </div>
    </div>
  );
};

export default Landing;
