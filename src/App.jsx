
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Mail, Instagram, Youtube, QrCode, Camera } from "lucide-react";

const qrYouTube = "https://api.qrserver.com/v1/create-qr-code/?data=https://youtube.com/@oszmichannel&size=150x150";
const qrInstagram = "https://api.qrserver.com/v1/create-qr-code/?data=https://www.instagram.com/omar.zahi73/&size=150x150";
const qrDiscord = "https://api.qrserver.com/v1/create-qr-code/?data=https://discord.gg/VcW3uCt8&size=150x150";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-purple-50 text-gray-800 font-sans">
    <nav className="bg-purple-100 p-4 shadow-md flex justify-between">
      <h1 className="text-xl font-bold text-purple-800">Omar Zahi</h1>
      <div className="space-x-4">
        <Link to="/" className="text-purple-700 hover:underline">Home</Link>
        <Link to="/socials" className="text-purple-700 hover:underline">Socials</Link>
        <Link to="/gallery" className="text-purple-700 hover:underline">Gallery</Link>
        <Link to="/contact" className="text-purple-700 hover:underline">Contact</Link>
      </div>
    </nav>
    <main className="p-6 max-w-4xl mx-auto">{children}</main>
  </div>
);

const Home = () => (
  <Layout>
    <div className="grid gap-6">
      <img src="/public/profile.jpg" alt="Omar Zahi" className="rounded-2xl shadow w-40" />
      <div>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          Hi! My name is <strong>Omar Zahi</strong>, I'm <strong>14 years old</strong>, and I'm currently a student at <strong>Saint Laurent High School</strong> in <strong>Secondary 3</strong>.
          I'm originally from <strong>Morocco</strong> and I currently live in <strong>Canada</strong>. I've had the chance to travel to many places including Morocco, Turkey, France, and Canada.
        </p>
        <p className="mt-2">
          My biggest interests include playing video games (especially <strong>Team Fortress 2</strong>), flying my drone, taking pictures,
          hanging out with friends, watching movies, full-length videos, and shows, and <strong>3D modeling</strong>.
        </p>
        <p className="mt-2">
          We are five in total: my parents, my two younger brothers (aged 9 and 2), and me. Fun fact: I was born on the same day as my dad,
          April 2nd. I also have an uncle who's the same age as me, and we go to the same school 😄
        </p>
        <h3 className="mt-4 text-xl font-semibold">School Journey</h3>
        <ul className="list-disc list-inside">
          <li>Preschool to Grade 5: Bois Franc Aquarelle</li>
          <li>Grade 6: Beau Séjour (English Program)</li>
          <li>Now: Saint Laurent High School</li>
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Future Plans</h3>
        <p>I’d love to create my own <strong>multiplayer game</strong>, a project I’m really excited about!</p>
      </div>
    </div>
  </Layout>
);

const Socials = () => (
  <Layout>
    <h2 className="text-2xl font-semibold mb-4">My Socials</h2>
    <div className="grid gap-6 md:grid-cols-3">
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex items-center gap-2 mb-2"><Youtube className="text-red-600" /> YouTube</div>
        <a href="https://youtube.com/@oszmichannel" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">youtube.com/@oszmichannel</a>
        <img src={qrYouTube} alt="YouTube QR" className="mt-4" />
      </div>
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex items-center gap-2 mb-2"><Instagram className="text-pink-500" /> Instagram</div>
        <a href="https://www.instagram.com/omar.zahi73/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">@omar.zahi73</a>
        <img src={qrInstagram} alt="Instagram QR" className="mt-4" />
      </div>
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex items-center gap-2 mb-2"><QrCode className="text-gray-700" /> Discord</div>
        <a href="https://discord.gg/VcW3uCt8" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">discord.gg/VcW3uCt8</a>
        <img src={qrDiscord} alt="Discord QR" className="mt-4" />
      </div>
    </div>
  </Layout>
);

const Gallery = () => (
  <Layout>
    <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
    <div className="grid gap-4 sm:grid-cols-2">
      <img src="/gallery1.jpg" alt="Drone shot 1" className="rounded-xl shadow" />
      <img src="/gallery2.jpg" alt="Drone shot 2" className="rounded-xl shadow" />
    </div>
    <p className="mt-4 text-purple-700 underline">
      View more on <a href="https://imgur.com/a/jkW6Fv3" target="_blank" rel="noopener noreferrer">my full gallery</a>
    </p>
  </Layout>
);

const Contact = () => (
  <Layout>
    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
    <div className="space-y-4">
      <div className="flex items-center gap-2"><Mail className="text-purple-700" /> <strong>School:</strong> <a href="mailto:Omar.zahi@ped.csmb.qc.ca" className="text-blue-600 underline">Omar.zahi@ped.csmb.qc.ca</a></div>
      <div className="flex items-center gap-2"><Mail className="text-purple-700" /> <strong>Other:</strong> <a href="mailto:zahiomar73@hotmail.com" className="text-blue-600 underline">zahiomar73@hotmail.com</a></div>
    </div>
  </Layout>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
