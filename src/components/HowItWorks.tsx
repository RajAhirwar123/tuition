
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, BookOpen, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account as a student or tutor in just a few minutes',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Search,
      title: 'Find or Offer',
      description: 'Students find qualified tutors, tutors offer their expertise',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BookOpen,
      title: 'Start Learning',
      description: 'Begin your personalized learning journey with live sessions',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Star,
      title: 'Achieve Goals',
      description: 'Track progress and achieve your academic goals successfully',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with our platform in just four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6`}>
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
