import React from "react";
import ProblemsPage from "./ProblemsPage";

import CompilerPage from "./CompilerPage";

const Home = ({ isLoggedIn }) => {
  return (
    // <div className=" bg-richblack-900 ">
    //   {/* <header className="bg-blue-500 text-white py-4">
    //     <div className="container mx-auto px-4">
    //       <h1 className="text-3xl font-bold">DSA Problem Solver</h1>
    //       <p className="mt-2">
    //         Empowering Students to Master Data Structures and Algorithms
    //       </p>
    //     </div>
    //   </header> */}

    //   <main className="container mx-auto px-4 py-8">
    //     <section className="mb-8">
    //       <h2 className="text-2xl font-semibold mb-4 text-yellow-400 ">
    //         Explore Topics
    //       </h2>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Arrays and Strings</h3>
    //           <p>Explore problems related to arrays and strings.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Linked Lists</h3>
    //           <p>Practice problems related to linked lists.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Stacks and Queues</h3>
    //           <p>Challenge yourself with stacks and queues problems.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Trees and Graphs</h3>
    //           <p>Solve problems involving trees and graphs.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">
    //             Sorting and Searching
    //           </h3>
    //           <p>Master sorting and searching algorithms.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">
    //             Dynamic Programming
    //           </h3>
    //           <p>Explore dynamic programming problems.</p>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="mb-8">
    //       <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
    //         How it Works
    //       </h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Choose a Topic</h3>
    //           <p>Select a DSA topic you want to practice.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Solve Problems</h3>
    //           <p>
    //             Pick from a variety of problems ranging from easy to advanced.
    //           </p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Submit Solutions</h3>
    //           <p>Test your solutions against our test cases.</p>
    //         </div>
    //         <div className="bg-white p-4 shadow-md rounded-md">
    //           <h3 className="text-xl font-semibold mb-2">Learn and Improve</h3>
    //           <p>Review solutions and learn from others.</p>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="mb-8 bg-richblack-900 text-white">
    //       <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
    //       <ul className="list-disc list-inside">
    //         <li className="mb-2">Comprehensive Coverage of DSA topics</li>
    //         <li className="mb-2">Engage with a Community of Learners</li>
    //         <li className="mb-2">Track Your Progress Easily</li>
    //         <li className="mb-2">Access Resources and Tips</li>
    //       </ul>
    //     </section>

    //     <section className="mb-8">
    //       <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
    //       <div className="flex items-center space-x-4">
    //         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300">
    //           Sign Up / Log In
    //         </button>
    //         <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md shadow-md transition duration-300">
    //           Explore Problems
    //         </button>
    //         <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-md shadow-md transition duration-300">
    //           Learn More
    //         </button>
    //       </div>
    //     </section>
    //   </main>

    //   <footer className="bg-gray-200 text-gray-600 py-4">
    //     <div className="container mx-auto px-4 text-center">
    //       <p>&copy; 2024 DSA Problem Solver. All rights reserved.</p>
    //       <div className="mt-2">
    //         <a href="#" className="text-blue-500 hover:text-blue-600 px-2">
    //           Privacy Policy
    //         </a>
    //         <span className="text-gray-400">|</span>
    //         <a href="#" className="text-blue-500 hover:text-blue-600 px-2">
    //           Terms of Service
    //         </a>
    //         <span className="text-gray-400">|</span>
    //         <a href="#" className="text-blue-500 hover:text-blue-600 px-2">
    //           Contact Us
    //         </a>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div className=" bg-richblack-800">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 ">
        {/* Explore Topics */}
        <section className="mb-12  ">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
            Explore Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-richblack-100 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Arrays and Strings</h3>
              <p>Explore problems related to arrays and strings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Linked Lists</h3>
              <p>Practice problems related to linked lists.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Stacks and Queues</h3>
              <p>Challenge yourself with stacks and queues problems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Trees and Graphs</h3>
              <p>Solve problems involving trees and graphs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">
                Sorting and Searching
              </h3>
              <p>Master sorting and searching algorithms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">
                Dynamic Programming
              </h3>
              <p>Explore dynamic programming problems.</p>
            </div>
          </div>
        </section>
        {/* <ProblemsPage />
        <CompilerPage /> */}
        {/* How it Works */}
        <section className="mb-12">
          <h2 className="text-3xl text-yellow-400 font-semibold mb-6">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Choose a Topic</h3>
              <p>Select a DSA topic you want to practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Solve Problems</h3>
              <p>
                Pick from a variety of problems ranging from easy to advanced.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Submit Solutions</h3>
              <p>Test your solutions against our test cases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Learn and Improve</h3>
              <p>Review solutions and learn from others.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl text-yellow-400 font-semibold mb-6">
            Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <li className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Coverage
              </h3>
              <p>We cover a wide range of DSA topics with curated problems.</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">
                Community-Driven Learning
              </h3>
              <p>Engage with a community of students and professionals.</p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">
                Track Your Progress
              </h3>
              <p>
                Monitor your improvement with our progress tracking feature.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-3">Resources and Tips</h3>
              <p>
                Access tutorials, articles, and tips to enhance your
                understanding.
              </p>
            </li>
          </ul>
        </section>

        {/* Get Started */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Get Started Today</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300">
              Sign Up / Log In
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg shadow-md transition duration-300">
              Explore Problems
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 py-3 px-6 rounded-lg shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 DSA Problem Solver. All rights reserved.</p>
          <div className="mt-2">
            <a className="text-blue-500 hover:text-blue-600 px-2">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-500 hover:text-blue-600 px-2">
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-500 hover:text-blue-600 px-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
