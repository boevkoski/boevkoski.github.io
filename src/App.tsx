import { useState } from 'react';
import { Home } from './components/Home';
import { CV } from './components/CV';
import { Publications } from './components/Publications';
import { Presentations } from './components/Presentations';

type Tab = 'home' | 'cv' | 'publications' | 'presentations';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-[#e8ded0]">
      {/* Header/Navigation */}
      <header className="bg-[#faf8f4] shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <a href="/">
              <div className="text-2xl font-semibold text-[#e85d2a] tracking-wide cursor-pointer">
                BOEVKOSKI
              </div>
            </a>  
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`text tracking-wider transition-colors ${
                  activeTab === 'home'
                    ? 'text-[#e85d2a]'
                    : 'text-[#5a5a5a] hover:text-[#e85d2a]'
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => setActiveTab('cv')}
                className={`text tracking-wider transition-colors ${
                  activeTab === 'cv'
                    ? 'text-[#e85d2a]'
                    : 'text-[#5a5a5a] hover:text-[#e85d2a]'
                }`}
              >
                CV
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`text tracking-wider transition-colors ${
                  activeTab === 'publications'
                    ? 'text-[#e85d2a]'
                    : 'text-[#5a5a5a] hover:text-[#e85d2a]'
                }`}
              >
                PUBLICATIONS
              </button>
              {/* <button
                onClick={() => setActiveTab('presentations')}
                className={`text tracking-wider transition-colors ${
                  activeTab === 'presentations'
                    ? 'text-[#e85d2a]'
                    : 'text-[#5a5a5a] hover:text-[#e85d2a]'
                }`}
              >
                PRESENTATIONS
              </button> */}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#faf8f4] rounded-lg shadow-lg p-12 border border-[#555555]">
          {activeTab === 'home' && <Home />}
          {activeTab === 'cv' && <CV />}
          {activeTab === 'publications' && <Publications />}
          {activeTab === 'presentations' && <Presentations />}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-[#5a5a5a] text-sm">
          <p>© 2026 · Last updated: January 2026</p>
        </div>
      </footer>
    </div>
  );
}