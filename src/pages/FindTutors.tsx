
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Clock, DollarSign, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';

const FindTutors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const tutors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      rating: 4.9,
      reviews: 124,
      hourlyRate: 45,
      experience: '8 years',
      location: 'New York',
      availability: 'Available',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      subject: 'Physics',
      rating: 4.8,
      reviews: 98,
      hourlyRate: 50,
      experience: '10 years',
      location: 'California',
      availability: 'Busy',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      subject: 'Chemistry',
      rating: 4.7,
      reviews: 87,
      hourlyRate: 40,
      experience: '6 years',
      location: 'Texas',
      availability: 'Available',
      image: '/placeholder.svg'
    }
  ];

  const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

  const filteredTutors = tutors.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || tutor.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
        >
          <h1 className="text-2xl font-bold mb-2">Find Tutors</h1>
          <p className="text-purple-100">Discover qualified tutors for your learning needs</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search tutors by name or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject}
              </option>
            ))}
          </select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </motion.div>

        {/* Tutors List */}
        <div className="grid gap-6">
          {filteredTutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{tutor.name}</h3>
                          <p className="text-blue-600 font-medium">{tutor.subject}</p>
                        </div>
                        <Badge 
                          variant={tutor.availability === 'Available' ? 'default' : 'secondary'}
                          className={tutor.availability === 'Available' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {tutor.availability}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {tutor.rating} ({tutor.reviews} reviews)
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {tutor.experience}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {tutor.location}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${tutor.hourlyRate}/hour
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Book Session
                        </Button>
                        <Button variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindTutors;
