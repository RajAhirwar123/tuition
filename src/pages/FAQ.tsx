
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I find a tutor?",
      answer: "You can find tutors by using our search feature. Filter by subject, location, price range, and availability to find the perfect match for your learning needs."
    },
    {
      question: "What subjects are available?",
      answer: "We offer tutoring in a wide range of subjects including Mathematics, Science, Languages, Computer Science, Arts, and many more. Our tutors are qualified professionals in their respective fields."
    },
    {
      question: "How much does tutoring cost?",
      answer: "Tutoring rates vary depending on the subject, tutor experience, and session duration. Most sessions range from $25-100 per hour. You can view each tutor's rates on their profile."
    },
    {
      question: "Can I schedule trial sessions?",
      answer: "Yes! Many tutors offer trial sessions at discounted rates so you can see if they're a good fit before committing to regular sessions."
    },
    {
      question: "How do I make payments?",
      answer: "Payments are processed securely through our platform. You can pay by credit card, debit card, or PayPal. Payments are only released to tutors after successful completion of sessions."
    },
    {
      question: "What if I'm not satisfied with a session?",
      answer: "We have a satisfaction guarantee. If you're not happy with a session, contact our support team within 24 hours and we'll help resolve the issue or provide a refund."
    },
    {
      question: "Can tutors come to my home?",
      answer: "Yes, many tutors offer in-person sessions at your home or preferred location. You can also choose online sessions via video call for convenience."
    },
    {
      question: "How do I become a tutor?",
      answer: "To become a tutor, sign up with a teacher account, complete your profile with qualifications and experience, and go through our verification process. Once approved, you can start accepting students."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about TutorHub
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            onClick={() => navigate('/contact')}
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
