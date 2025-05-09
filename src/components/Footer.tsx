import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-white py-8 border-t mt-4 border-indigo-800">
        <div className="grid grid-cols-3 gap-8 ml-30">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sunori</h3>
            <p>
              Discover the best games, movies, apps, and books all in one place.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/games" className="transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="/movies" className="transition-colors">
                  Movies
                </a>
              </li>
              <li>
                <a href="/apps" className="transition-colors">
                  Apps
              </a>
            </li>
            <li>
              <a href="/books" className="transition-colors">
                Books
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/Sunori-Official/Sunori" className="transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:sunori_@outlook.com" className="transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
        <div className="mt-8 pt-6 border-t border-indigo-800 text-center text-black dark:text-white">
          <p>&copy; {new Date().getFullYear()} Sunori. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;