import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex justify-between">
      {/* First Text Area with Button Group */}
      <div className="w-1/2 mr-2 rounded-lg overflow-hidden shadow-md bg-white">
        <textarea
          className="w-full h-32 border-b border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your text here..."
        ></textarea>
        <div className="p-3 bg-gray-100 flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Button 1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Button 2
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Button 3
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Button 4
          </button>
        </div>
      </div>
      {/* Second Text Area with Input Box */}
      <div className="w-1/2 ml-2 rounded-lg overflow-hidden shadow-md bg-white">
        <textarea
          className="w-full h-32 border-b border-gray-300 p-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your text here..."
        ></textarea>
        <input
          type="text"
          className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter something..."
        />
      </div>
    </div>
  );
};

export default MyComponent;

