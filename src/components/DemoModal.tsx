
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">TutorHub Demo</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Video Placeholder */}
             <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src="/demovideo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


             
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Find Tutors</h4>
                  <p className="text-sm text-blue-700">Browse qualified tutors by subject and availability</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Schedule Classes</h4>
                  <p className="text-sm text-green-700">Book sessions that fit your schedule</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Track Progress</h4>
                  <p className="text-sm text-purple-700">Monitor your learning journey and achievements</p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
