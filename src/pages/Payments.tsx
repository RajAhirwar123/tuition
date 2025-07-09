
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Download, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';

const Payments = () => {
  const paymentHistory = [
    {
      id: 1,
      description: 'Mathematics Tuition - January 2025',
      amount: 120,
      status: 'paid',
      date: '2024-12-25',
      tutor: 'Dr. Sarah Johnson',
      method: 'Credit Card'
    },
    {
      id: 2,
      description: 'Physics Tuition - January 2025',
      amount: 150,
      status: 'due',
      dueDate: '2024-12-30',
      tutor: 'Prof. Michael Chen',
      method: 'Pending'
    },
    {
      id: 3,
      description: 'Chemistry Lab Sessions - December 2024',
      amount: 200,
      status: 'paid',
      date: '2024-12-15',
      tutor: 'Dr. Emily Davis',
      method: 'Bank Transfer'
    },
    {
      id: 4,
      description: 'Mathematics Extra Classes - December 2024',
      amount: 80,
      status: 'overdue',
      dueDate: '2024-12-20',
      tutor: 'Dr. Sarah Johnson',
      method: 'Pending'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'due': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'overdue': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const totalPaid = paymentHistory.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);
  const totalDue = paymentHistory.filter(p => p.status === 'due' || p.status === 'overdue').reduce((sum, p) => sum + p.amount, 0);

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
          <p className="text-gray-600">Manage your tuition payments and billing</p>
        </motion.div>

        {/* Payment Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Paid</p>
                  <p className="text-2xl font-bold text-green-600">${totalPaid}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Amount Due</p>
                  <p className="text-2xl font-bold text-orange-600">${totalDue}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-600">${paymentHistory.filter(p => p.date?.includes('2024-12') || p.dueDate?.includes('2024-12')).reduce((sum, p) => sum + p.amount, 0)}</p>
                </div>
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentHistory.map((payment, index) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(payment.status)}
                    <div>
                      <h4 className="font-semibold text-gray-900">{payment.description}</h4>
                      <p className="text-sm text-gray-600">{payment.tutor}</p>
                      <p className="text-sm text-gray-500">
                        {payment.status === 'paid' ? `Paid on ${new Date(payment.date!).toLocaleDateString()}` : 
                         `Due: ${new Date(payment.dueDate!).toLocaleDateString()}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-lg">${payment.amount}</p>
                      <p className="text-sm text-gray-500">{payment.method}</p>
                    </div>
                    <Badge 
                      variant={payment.status === 'paid' ? 'default' : 
                              payment.status === 'overdue' ? 'destructive' : 'secondary'}
                      className={payment.status === 'paid' ? 'bg-green-100 text-green-800' : 
                                payment.status === 'due' ? 'bg-yellow-100 text-yellow-800' : ''}
                    >
                      {payment.status}
                    </Badge>
                    <div className="flex space-x-2">
                      {payment.status === 'paid' && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Receipt
                        </Button>
                      )}
                      {(payment.status === 'due' || payment.status === 'overdue') && (
                        <Button size="sm" variant={payment.status === 'overdue' ? 'destructive' : 'default'}>
                          Pay Now
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="w-full">Add New Payment Method</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Payments;
