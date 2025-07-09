import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, CreditCard, Search, Bell, Settings, LogOut, User, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const upcomingClasses = [
    {
      id: 1,
      subject: 'Mathematics',
      tutor: 'Dr. Sarah Johnson',
      time: '10:00 AM - 11:00 AM',
      date: 'Today',
      status: 'confirmed'
    },
    {
      id: 2,
      subject: 'Physics',
      tutor: 'Prof. Michael Chen',
      time: '2:00 PM - 3:00 PM',
      date: 'Tomorrow',
      status: 'confirmed'
    },
    {
      id: 3,
      subject: 'Chemistry',
      tutor: 'Dr. Emily Davis',
      time: '4:00 PM - 5:00 PM',
      date: 'Dec 28',
      status: 'pending'
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'Calculus Problem Set 5',
      subject: 'Mathematics',
      dueDate: 'Dec 30, 2024',
      status: 'pending',
      tutor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      title: 'Lab Report: Motion Analysis',
      subject: 'Physics',
      dueDate: 'Jan 2, 2025',
      status: 'completed',
      tutor: 'Prof. Michael Chen'
    },
    {
      id: 3,
      title: 'Chemical Reactions Essay',
      subject: 'Chemistry',
      dueDate: 'Jan 5, 2025',
      status: 'overdue',
      tutor: 'Dr. Emily Davis'
    }
  ];

  const payments = [
    {
      id: 1,
      description: 'Mathematics Tuition - January',
      amount: '$120',
      status: 'paid',
      date: 'Dec 25, 2024'
    },
    {
      id: 2,
      description: 'Physics Tuition - January',
      amount: '$150',
      status: 'due',
      dueDate: 'Dec 30, 2024'
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl"
        >
          <h1 className="text-2xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="opacity-90">Ready to continue your learning journey? You have 2 classes today.</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Classes This Week', value: '8', icon: Calendar, color: 'from-blue-500 to-blue-600' },
            { label: 'Assignments Due', value: '3', icon: BookOpen, color: 'from-green-500 to-green-600' },
            { label: 'Pending Payments', value: '1', icon: CreditCard, color: 'from-orange-500 to-orange-600' },
            { label: 'Active Tutors', value: '4', icon: User, color: 'from-purple-500 to-purple-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((class_) => (
                  <div key={class_.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{class_.subject}</h4>
                      <p className="text-sm text-gray-600">{class_.tutor}</p>
                      <p className="text-sm text-gray-500">{class_.date} • {class_.time}</p>
                    </div>
                    <Badge 
                      variant={class_.status === 'confirmed' ? 'default' : 'secondary'}
                      className={class_.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {class_.status}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  View All Classes
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Assignments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Assignments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">{assignment.subject} • {assignment.tutor}</p>
                      <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                    </div>
                    <div className="flex items-center">
                      {assignment.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {assignment.status === 'pending' && <Clock className="h-5 w-5 text-yellow-500" />}
                      {assignment.status === 'overdue' && <XCircle className="h-5 w-5 text-red-500" />}
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  View All Assignments
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Payment Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{payment.description}</h4>
                      <p className="text-sm text-gray-600">
                        {payment.status === 'paid' ? `Paid on ${payment.date}` : `Due: ${payment.dueDate}`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold">{payment.amount}</span>
                      <Badge 
                        variant={payment.status === 'paid' ? 'default' : 'destructive'}
                        className={payment.status === 'paid' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {payment.status}
                      </Badge>
                      {payment.status === 'due' && (
                        <Button size="sm">Pay Now</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/find-tutors')}
          >
            <CardContent className="p-6 text-center">
              <Search className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Find New Tutors</h3>
              <p className="text-sm text-gray-600">Browse and connect with qualified tutors</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule Class</h3>
              <p className="text-sm text-gray-600">Book a new session with your tutors</p>
            </CardContent>
          </Card>
          
          <Card 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/profile')}
          >
            <CardContent className="p-6 text-center">
              <User className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">My Profile</h3>
              <p className="text-sm text-gray-600">Update your profile and preferences</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
