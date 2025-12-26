import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 py-20 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        <div className="mb-10 md:mb-0">
          <h2 className="text-neutral-900 text-2xl font-thin lowercase tracking-tight mb-4">
            luxterra
          </h2>
          <p className="text-neutral-500 text-sm max-w-xs">
            Redefining luxury living in Florida. Experience the difference of clarity and elegance.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
            <div>
                <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-widest mb-4">Explore</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">Properties</a></li>
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">Agents</a></li>
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">Stories</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-neutral-900 text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">About</a></li>
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">Careers</a></li>
                    <li><a href="#" className="text-neutral-500 text-sm hover:text-violet-500 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between text-xs text-neutral-400">
        <p>&copy; 2024 Luxterra Real Estate. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-violet-500">Privacy Policy</a>
            <a href="#" className="hover:text-violet-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;