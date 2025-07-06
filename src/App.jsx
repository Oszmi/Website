import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-purple-100 text-gray-900 p-4">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Omar Zahi</h1>
        <p className="text-lg">Welcome to my personal site!</p>
      </header>
      <main className="max-w-2xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Hi! I'm Omar, 14 years old and currently a student at Saint Laurent High School in Canada. I was born on April 2nd (same day as my dad!), and I have two younger brothers who are 9 and 2. Fun fact: I have an uncle the same age as me! I’ve studied at Bois-Franc Aquarelle (Preschool–Grade 5), Beau-Séjour (Grade 6, English program), and now I'm at Saint-Laurent.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
          <ul className="list-disc list-inside">
            <li>Playing Team Fortress 2</li>
            <li>Flying drones</li>
            <li>Taking photos</li>
            <li>Watching shows, movies, and full-length videos</li>
            <li>Talking with friends</li>
            <li>3D modeling</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Places I've Been</h2>
          <p>Morocco, Turkey, France, Canada, United States</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Socials</h2>
          <ul className="space-y-2">
            <li><a className="text-blue-600 underline" href="https://youtube.com/@oszmichannel">YouTube</a></li>
            <li><a className="text-blue-600 underline" href="https://www.instagram.com/omar.zahi73/">Instagram</a></li>
            <li><a className="text-blue-600 underline" href="https://discord.gg/VcW3uCt8">Discord</a></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>📧 School: Omar.zahi@ped.csmb.qc.ca<br />
             📮 Other: zahiomar73@hotmail.com</p>
        </section>
      </main>
    </div>
  );
}
