
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, CheckCircle, XCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'Calculus Problem Set 5',
      subject: 'Mathematics',
      tutor: 'Dr. Sarah Johnson',
      dueDate: 'Dec 30, 2024',
      status: 'pending',
      description: 'Solve integration problems 1-15 from chapter 8',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Lab Report: Motion Analysis',
      subject: 'Physics',
      tutor: 'Prof. Michael Chen',
      dueDate: 'Jan 2, 2025',
      status: 'completed',
      description: 'Complete analysis of projectile motion experiment',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Chemical Reactions Essay',
      subject: 'Chemistry',
      tutor: 'Dr. Emily Davis',
      dueDate: 'Jan 5, 2025',
      status: 'overdue',
      description: 'Write 1000-word essay on organic reaction mechanisms',
      priority: 'high'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'overdue': return <XCircle className="h-5 w-5 text-red-500" />;
      default: return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignments</h1>
          <p className="text-gray-600">Track and manage all your assignments</p>
        </motion.div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline">All</Button>
            <Button variant="ghost">Pending</Button>
            <Button variant="ghost">Completed</Button>
            <Button variant="ghost">Overdue</Button>
          </div>
        </div>

        <div className="grid gap-6">
          {assignments.map((assignment, index) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                        {getStatusIcon(assignment.status)}
                      </div>
                      <p className="text-gray-600 mb-2">{assignment.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {assignment.subject}
                        </span>
                        <span>{assignment.tutor}</span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge 
                        variant={assignment.priority === 'high' ? 'destructive' : 'secondary'}
                        className={assignment.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                      >
                        {assignment.priority} priority
                      </Badge>
                      <Badge 
                        variant={assignment.status === 'completed' ? 'default' : 
                                assignment.status === 'overdue' ? 'destructive' : 'secondary'}
                        className={assignment.status === 'completed' ? 'bg-green-100 text-green-800' : 
                                  assignment.status === 'pending' ? 'bg-blue-100 text-blue-800' : ''}
                      >
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    {assignment.status === 'pending' && (
                      <>
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Submit Assignment</Button>
                      </>
                    )}
                    {assignment.status === 'completed' && (
                      <Button variant="outline" size="sm">View Submission</Button>
                    )}
                    {assignment.status === 'overdue' && (
                      <Button variant="destructive" size="sm">Submit Late</Button>
                    )}
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

export default Assignments;
