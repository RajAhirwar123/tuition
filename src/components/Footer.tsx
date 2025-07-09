
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div 
              className="flex items-center space-x-2 mb-6 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TutorHub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting students with the best tutors for personalized home education. 
              Transform your learning journey with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Instagram} href="#" />
              <SocialIcon icon={Linkedin} href="#" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink onClick={() => navigate('/find-tutors')} text="Find Tutors" />
              <FooterLink onClick={() => navigate('/signup')} text="Become a Tutor" />
              <FooterLink onClick={() => navigate('/#how-it-works')} text="How it Works" />
              <FooterLink onClick={() => navigate('/#pricing')} text="Pricing" />
              <FooterLink onClick={() => navigate('/about')} text="About Us" />
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <FooterLink onClick={() => navigate('/contact-support')} text="Help Center" />
              <FooterLink onClick={() => navigate('/contact-support')} text="Contact Support" />
              <FooterLink onClick={() => navigate('/privacy-policy')} text="Privacy Policy" />
              <FooterLink onClick={() => navigate('/terms-of-service')} text="Terms of Service" />
              <FooterLink onClick={() => navigate('/faq')} text="FAQ" />
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">support@tutorhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">123 Education St, Learning City</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 TutorHub. All rights reserved. Built with ❤️ for education.</p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ onClick, text }: { onClick: () => void; text: string }) => (
  <li>
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-white transition-colors text-left"
    >
      {text}
    </button>
  </li>
);

export default Footer;
