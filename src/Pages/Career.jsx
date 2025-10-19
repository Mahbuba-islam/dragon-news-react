import Navbar from "../components/Navbar/Navbar";




const Career = () => {
  return (
    <div className="mt-5">
        <Navbar></Navbar>
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">🚀 Careers at Dragon News</h1>
        <p className="mt-4 text-lg">Build with purpose. Learn with joy. Empower through stories.</p>
      </div>

      {/* Opportunities Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔥 Current Opportunities</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold">🧑‍💻 Frontend Intern (Remote)</h3>
            <p className="mt-2">Learn React and Tailwind while contributing to real features. No experience required—just curiosity and commitment.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold">🧑‍🏫 Bilingual Content Mentor</h3>
            <p className="mt-2">Help us create Bengali-English tutorials, captions, and teaching cards for beginners.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="text-xl font-bold">📢 Community Ambassador</h3>
            <p className="mt-2">Share Dragon News in your local circles, help onboard new learners, and spark conversations.</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🌟 Why Join Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Remote-first and flexible</li>
          <li>Beginner-friendly onboarding</li>
          <li>Build your portfolio while making an impact</li>
          <li>Learn from Mahbuba and other mentors</li>
        </ul>
      </section>

      {/* Application CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📬 How to Apply</h2>
        <p>
          Send a short intro (in English or Bengali) to <strong>[your-email@example.com]</strong>. Tell us who you are, what excites you, and how you’d like to contribute.
        </p>
      </section>
    </div>
    </div>
  );
};

export default Career;