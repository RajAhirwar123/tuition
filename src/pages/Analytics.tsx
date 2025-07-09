
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Clock, BookOpen, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/DashboardLayout';

const Analytics = () => {
  const stats = [
    { title: 'Total Students', value: '24', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Classes This Month', value: '68', change: '+8%', icon: BookOpen, color: 'text-green-600' },
    { title: 'Hours Taught', value: '156', change: '+15%', icon: Clock, color: 'text-purple-600' },
    { title: 'Average Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-yellow-600' }
  ];

  const monthlyData = [
    { month: 'Jan', students: 18, hours: 120, earnings: 2400 },
    { month: 'Feb', students: 20, hours: 135, earnings: 2700 },
    { month: 'Mar', students: 22, hours: 142, earnings: 2840 },
    { month: 'Apr', students: 19, hours: 128, earnings: 2560 },
    { month: 'May', students: 24, hours: 156, earnings: 3120 },
    { month: 'Jun', students: 24, hours: 148, earnings: 2960 }
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', students: 12, avgRating: 4.9, completionRate: 95 },
    { subject: 'Physics', students: 8, avgRating: 4.7, completionRate: 90 },
    { subject: 'Chemistry', students: 4, avgRating: 4.8, completionRate: 88 }
  ];

  return (
    <DashboardLayout userType="teacher">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your teaching performance and student progress</p>
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
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-64 flex items-end justify-between space-x-2">
                  {monthlyData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center flex-1">
                      <div
                        className="bg-blue-600 rounded-t w-full transition-all duration-500 hover:bg-blue-700"
                        style={{ height: `${(data.students / 24) * 200}px`, minHeight: '10px' }}
                      />
                      <p className="text-sm text-gray-600 mt-2">{data.month}</p>
                      <p className="text-xs text-gray-500">{data.students} students</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Subject Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject, index) => (
                  <motion.div
                    key={subject.subject}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{subject.avgRating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <p>Students: {subject.students}</p>
                      </div>
                      <div>
                        <p>Completion: {subject.completionRate}%</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${subject.completionRate}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hours Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Teaching Hours Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-purple-600 rounded-t w-full transition-all duration-500 hover:bg-purple-700"
                    style={{ height: `${(data.hours / 156) * 200}px` }}
                  />
                  <p className="text-sm text-gray-600 mt-2">{data.month}</p>
                  <p className="text-xs text-gray-500">{data.hours}h</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
