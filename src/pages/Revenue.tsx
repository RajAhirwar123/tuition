
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/DashboardLayout';

const Revenue = () => {
  const revenueStats = [
    { title: 'Total Revenue', value: '$45,230', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Monthly Growth', value: '$3,420', change: '+8%', icon: TrendingUp, color: 'text-blue-600' },
    { title: 'This Month', value: '$8,940', change: '+15%', icon: Calendar, color: 'text-purple-600' },
    { title: 'Avg. Per Student', value: '$120', change: '+5%', icon: BarChart3, color: 'text-orange-600' }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 3200 },
    { month: 'Feb', revenue: 3800 },
    { month: 'Mar', revenue: 4200 },
    { month: 'Apr', revenue: 3900 },
    { month: 'May', revenue: 4600 },
    { month: 'Jun', revenue: 5100 }
  ];

  return (
    <DashboardLayout userType="teacher">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white"
        >
          <h1 className="text-2xl font-bold mb-2">Revenue Dashboard</h1>
          <p className="text-green-100">Track your earnings and financial performance</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {revenueStats.map((stat, index) => (
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

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {monthlyData.map((data, index) => (
                  <div key={data.month} className="flex flex-col items-center flex-1">
                    <div
                      className="bg-blue-600 rounded-t w-full transition-all duration-500 hover:bg-blue-700"
                      style={{ height: `${(data.revenue / 5100) * 200}px` }}
                    />
                    <p className="text-sm text-gray-600 mt-2">{data.month}</p>
                    <p className="text-xs text-gray-500">${data.revenue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Revenue;
