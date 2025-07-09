import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, DollarSign, TrendingUp, UserCheck, AlertTriangle, Settings, BarChart3, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/DashboardLayout';
import NotificationPopup from '@/components/NotificationPopup';

const AdminDashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleQuickAction = (actionName: string) => {
    console.log(`Quick action clicked: ${actionName}`);
    switch(actionName) {
      case 'User Management':
        alert('Redirecting to User Management panel...');
        break;
      case 'Tutor Verification':
        alert('Opening Tutor Verification system...');
        break;
      case 'Analytics':
        alert('Loading Analytics dashboard...');
        break;
      case 'Platform Settings':
        alert('Opening Platform Settings...');
        break;
      default:
        alert(`${actionName} feature coming soon!`);
    }
  };

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Tutors',
      value: '186',
      change: '+8%',
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,580',
      change: '+15%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivities = [
    { type: 'user', message: 'New tutor registration: Dr. Sarah Johnson', time: '2 hours ago' },
    { type: 'payment', message: 'Payment received: $150 from Student ID #1247', time: '4 hours ago' },
    { type: 'dispute', message: 'Dispute reported between Student #1156 and Tutor #89', time: '6 hours ago' },
    { type: 'verification', message: 'Tutor verification completed for Michael Chen', time: '8 hours ago' }
  ];

  const pendingActions = [
    { title: 'Tutor Verifications', count: 12, priority: 'high' },
    { title: 'Student Complaints', count: 5, priority: 'medium' },
    { title: 'Payment Disputes', count: 3, priority: 'high' },
    { title: 'Content Reviews', count: 8, priority: 'low' }
  ];

  return (
    <>
      <DashboardLayout userType="admin">
        <div className="space-y-6">
          {/* Welcome Section with Notification Bell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-indigo-100">Monitor and manage your platform efficiently</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 relative"
                onClick={() => setShowNotifications(true)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  4
                </span>
              </Button>
            </div>
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
                        <p className="text-sm text-green-600">{stat.change} from last month</p>
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
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                        <div className={`p-2 rounded-full ${
                          activity.type === 'user' ? 'bg-blue-100' :
                          activity.type === 'payment' ? 'bg-green-100' :
                          activity.type === 'dispute' ? 'bg-red-100' : 'bg-purple-100'
                        }`}>
                          {activity.type === 'user' && <Users className="h-4 w-4 text-blue-600" />}
                          {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-green-600" />}
                          {activity.type === 'dispute' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                          {activity.type === 'verification' && <UserCheck className="h-4 w-4 text-purple-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View All Activities
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pending Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Pending Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingActions.map((action, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{action.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              action.priority === 'high' ? 'bg-red-100 text-red-800' :
                              action.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {action.priority} priority
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-900">{action.count}</span>
                          <p className="text-sm text-gray-600">items</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Manage All
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Management Tools with Functional Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Management Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button 
                    className="h-16 bg-blue-600 hover:bg-blue-700 flex-col"
                    onClick={() => handleQuickAction('User Management')}
                  >
                    <Users className="h-6 w-6 mb-1" />
                    User Management
                  </Button>
                  <Button 
                    className="h-16 bg-green-600 hover:bg-green-700 flex-col"
                    onClick={() => handleQuickAction('Tutor Verification')}
                  >
                    <GraduationCap className="h-6 w-6 mb-1" />
                    Tutor Verification
                  </Button>
                  <Button 
                    className="h-16 bg-purple-600 hover:bg-purple-700 flex-col"
                    onClick={() => handleQuickAction('Analytics')}
                  >
                    <BarChart3 className="h-6 w-6 mb-1" />
                    Analytics
                  </Button>
                  <Button 
                    className="h-16 bg-gray-600 hover:bg-gray-700 flex-col"
                    onClick={() => handleQuickAction('Platform Settings')}
                  >
                    <Settings className="h-6 w-6 mb-1" />
                    Platform Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DashboardLayout>

      <NotificationPopup 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </>
  );
};

export default AdminDashboard;
