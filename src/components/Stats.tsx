
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Active Students',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      number: '10,000+',
      label: 'Verified Tutors',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Success Rate',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Average Rating',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600">
            Join our growing community of learners and educators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
