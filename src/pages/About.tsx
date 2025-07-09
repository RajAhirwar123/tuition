
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality education accessible to everyone by connecting students with passionate, qualified tutors who can help them achieve their academic goals."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "We've built a vibrant community of over 10,000 tutors and 50,000 students, fostering meaningful connections that go beyond traditional learning."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "All our tutors go through a rigorous verification process to ensure they meet our high standards for knowledge, teaching ability, and professionalism."
    },
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe that learning should be enjoyable and engaging. Our platform helps create positive learning experiences that inspire students to reach their potential."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About TutorHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing education by creating meaningful connections between students and tutors. 
            Our platform makes learning accessible, effective, and enjoyable for everyone.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  TutorHub was founded in 2020 with a simple yet powerful vision: to bridge the gap between 
                  students seeking knowledge and educators passionate about teaching. We recognized that 
                  traditional education doesn't always meet individual learning needs, and that's where we step in.
                </p>
                <p className="mb-4">
                  Our founders, having experienced the challenges of finding quality tutoring services, 
                  decided to create a platform that would make this process seamless, transparent, and effective. 
                  What started as a small startup has now grown into a thriving community of learners and educators.
                </p>
                <p>
                  Today, we're proud to have facilitated thousands of successful learning connections, 
                  helping students achieve their academic goals while providing tutors with opportunities 
                  to share their expertise and make a meaningful impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Happy Students</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-blue-100">Expert Tutors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-blue-100">Sessions Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-blue-100">Satisfaction Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're looking to learn or teach, we'd love to have you as part of our family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Get Started Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
