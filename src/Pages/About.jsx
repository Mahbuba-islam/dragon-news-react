import Navbar from "../components/Navbar/Navbar";


const About = () => {
  return (
     <div>
   <Navbar></Navbar>
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
        {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">🐉 Dragon News</h1>
        <p className="mt-4 text-lg">Stories that spark change. Crafted for learners, built for impact.</p>
      </div>

      {/* English Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔥 About Us</h2>
        <p className="mb-4">
          Dragon News is more than a news site. It’s a digital campfire for housewives, beginners, and curious minds who want to learn, grow, and stay informed.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Clear:</strong> No jargon, just truth.</li>
          <li><strong>Empowering:</strong> Every article is a chance to learn.</li>
          
        </ul>
      
      </section>

    
      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded shadow text-center">React</div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">Tailwind CSS</div>
          <div className="bg-gray-100 p-4 rounded shadow text-center">Firebase</div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;