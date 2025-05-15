import React from "react";

export default function TalhaPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://i.ibb.co/fF4VH5p/your-photo.jpg"
            alt="Talha Siddiki"
            className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
          />
          <h1 className="text-3xl font-bold text-center text-blue-700">Talha Siddiki</h1>
          <p className="text-center text-gray-600">Content Writer | Translator | Data Entry Specialist</p>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Profile Summary</h2>
          <p className="text-gray-700">
            I am a passionate and hardworking content writer with over 2 years of experience in writing,
            translating, and data entry. I have a strong habit of writing regularly and believe in consistency,
            clarity, and continuous self-improvement. My goal is to become a skilled and professional content
            writer who can create meaningful and impactful content for a wide range of audiences.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Experience & Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Content Writing – Articles, simple blog posts, and creative writing</li>
            <li>Translation – English to Bengali and vice versa</li>
            <li>Copy-Paste Work – Fast and accurate</li>
            <li>Data Entry – Organized and detail-oriented work with Excel/Word/online tools</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Core Skills</h2>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <span>Copywriting</span>
            <span>Translation</span>
            <span>Data Entry</span>
            <span>Research</span>
            <span>Basic Editing</span>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Career Goal</h2>
          <p className="text-gray-700">
            To become a professional and impactful content writer by working with reputed organizations,
            improving writing quality, and helping clients communicate better through words.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Contact Info</h2>
          <p className="text-gray-700">Email: <a href="mailto:tk6193446@gmail.com" className="text-blue-500">tk6193446@gmail.com</a></p>
          <p className="text-gray-700">Facebook: <a href="https://www.facebook.com/profile.php?id=100076759759723" target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Profile</a></p>
        </section>
      </div>
    </div>
  );
}
