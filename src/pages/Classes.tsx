
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Video, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';

const Classes = () => {
  const classes = [
    {
      id: 1,
      subject: 'Mathematics',
      tutor: 'Dr. Sarah Johnson',
      date: 'Today',
      time: '10:00 AM - 11:00 AM',
      type: 'Online',
      status: 'upcoming',
      topic: 'Calculus Integration'
    },
    {
      id: 2,
      subject: 'Physics',
      tutor: 'Prof. Michael Chen',
      date: 'Tomorrow',
      time: '2:00 PM - 3:00 PM',
      type: 'In-person',
      status: 'confirmed',
      topic: 'Quantum Mechanics'
    },
    {
      id: 3,
      subject: 'Chemistry',
      tutor: 'Dr. Emily Davis',
      date: 'Dec 28',
      time: '4:00 PM - 5:00 PM',
      type: 'Online',
      status: 'completed',
      topic: 'Organic Reactions'
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Classes</h1>
          <p className="text-gray-600">Manage and view all your scheduled classes</p>
        </motion.div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline">All Classes</Button>
            <Button variant="ghost">Upcoming</Button>
            <Button variant="ghost">Completed</Button>
          </div>
          <Button>Schedule New Class</Button>
        </div>

        <div className="grid gap-6">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{classItem.subject}</h3>
                      <p className="text-gray-600">{classItem.topic}</p>
                    </div>
                    <Badge 
                      variant={classItem.status === 'completed' ? 'secondary' : 'default'}
                      className={classItem.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 
                                classItem.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {classItem.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {classItem.tutor}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {classItem.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {classItem.time}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-sm text-gray-600">
                      {classItem.type === 'Online' ? 
                        <Video className="h-4 w-4 mr-1" /> : 
                        <MapPin className="h-4 w-4 mr-1" />
                      }
                      {classItem.type}
                    </div>
                    <div className="flex space-x-2">
                      {classItem.status === 'upcoming' && (
                        <>
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button size="sm">Join Class</Button>
                        </>
                      )}
                      {classItem.status === 'completed' && (
                        <Button variant="outline" size="sm">View Recording</Button>
                      )}
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

export default Classes;
