
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar, DollarSign, FileText, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/DashboardLayout';

const TeacherDashboard = () => {
  const stats = [
    {
      title: 'Active Students',
      value: '24',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Classes This Week',
      value: '18',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Upcoming Classes',
      value: '5',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Earnings',
      value: '$2,340',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const upcomingClasses = [
    { subject: 'Mathematics', student: 'Alice Johnson', time: '10:00 AM', date: 'Today' },
    { subject: 'Physics', student: 'Bob Smith', time: '2:00 PM', date: 'Today' },
    { subject: 'Chemistry', student: 'Carol Davis', time: '4:00 PM', date: 'Tomorrow' }
  ];

  const recentAssignments = [
    { title: 'Algebra Homework', subject: 'Mathematics', submitted: 12, total: 15 },
    { title: 'Newton\'s Laws Quiz', subject: 'Physics', submitted: 8, total: 10 },
    { title: 'Chemical Bonding', subject: 'Chemistry', submitted: 6, total: 8 }
  ];

  return (
    <DashboardLayout userType="teacher">
      <div className="space-y-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
        >
          <h1 className="text-2xl font-bold mb-2">Welcome back, Professor!</h1>
          <p className="text-blue-100">Ready to inspire your students today?</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Upcoming Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((classItem, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{classItem.subject}</h4>
                        <p className="text-sm text-gray-600">{classItem.student}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{classItem.time}</p>
                        <p className="text-sm text-gray-600">{classItem.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Classes
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Assignments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Assignment Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssignments.map((assignment, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                        <span className="text-sm text-gray-600">{assignment.subject}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {assignment.submitted}/{assignment.total}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Manage Assignments
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Schedule Class
                </Button>
                <Button className="h-12 bg-green-600 hover:bg-green-700">
                  <FileText className="h-5 w-5 mr-2" />
                  Create Assignment
                </Button>
                <Button className="h-12 bg-purple-600 hover:bg-purple-700">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
