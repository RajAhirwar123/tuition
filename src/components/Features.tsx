
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Shield, 
  BookOpen, 
  BarChart, 
  Video, 
  MessageSquare,
  Clock,
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Role-Based Dashboards',
      description: 'Customized interfaces for students, teachers, and administrators with specific tools and analytics.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Video,
      title: 'Live Class Integration',
      description: 'Seamless integration with video conferencing platforms for interactive online sessions.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent scheduling system with automatic reminders and conflict resolution.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Integrated payment gateway with invoice generation and automatic fee tracking.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Assignment Management',
      description: 'Complete assignment lifecycle from creation to submission and grading.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics for tracking progress, attendance, and performance.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Verified Tutors',
      description: 'Rigorous verification process ensuring qualified and experienced educators.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Communication',
      description: 'Instant messaging and notifications for seamless communication.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Successful Learning
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools needed for effective home tuition management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
