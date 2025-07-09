
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, X, LogIn, UserPlus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TutorHub
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleSmoothScroll('features')}>Features</NavLink>
            <NavLink onClick={() => handleSmoothScroll('how-it-works')}>How it Works</NavLink>
            <NavLink onClick={() => handleSmoothScroll('testimonials')}>Testimonials</NavLink>
            <NavLink onClick={() => handleSmoothScroll('pricing')}>Pricing</NavLink>
            <NavLink onClick={() => navigate('/find-tutors')}>Find Tutors</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="hover:bg-blue-50"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <MobileNavLink onClick={() => handleSmoothScroll('features')}>Features</MobileNavLink>
            <MobileNavLink onClick={() => handleSmoothScroll('how-it-works')}>How it Works</MobileNavLink>
            <MobileNavLink onClick={() => handleSmoothScroll('testimonials')}>Testimonials</MobileNavLink>
            <MobileNavLink onClick={() => handleSmoothScroll('pricing')}>Pricing</MobileNavLink>
            <MobileNavLink onClick={() => navigate('/find-tutors')}>Find Tutors</MobileNavLink>
            <div className="flex flex-col space-y-2 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/login')}
                className="justify-start"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 justify-start"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
  </button>
);

const MobileNavLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 w-full text-left"
  >
    {children}
  </button>
);

export default Navigation;
