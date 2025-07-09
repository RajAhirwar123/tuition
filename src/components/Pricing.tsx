
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from './ContactForm';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    alert(`You have selected the ${planName} plan! Redirecting to payment...`);
    console.log(`Selected plan: ${planName}`);
  };

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      description: 'Perfect to get started',
      features: [
        'Up to 2 hours of tutoring',
        'Basic subject support',
        'Email support',
        'Basic progress tracking',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      description: 'Perfect for individual students',
      features: [
        'Up to 8 hours of tutoring',
        'Basic subject support',
        'Email support',
        'Progress tracking',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '₹1,999',
      period: '/month',
      description: 'Best for serious learners',
      features: [
        'Up to 20 hours of tutoring',
        'All subjects available',
        'Priority support',
        'Advanced analytics',
        'Mobile + Web access',
        'Recorded sessions',
        'Homework assistance'
      ],
      popular: true
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to fit your learning goals and budget. 
              Start with any plan and upgrade anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-blue-600 shadow-2xl scale-105' : 'hover:shadow-xl'} ${selectedPlan === plan.name ? 'ring-2 ring-green-500' : ''} transition-all duration-300`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                      } ${selectedPlan === plan.name ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      onClick={() => handlePlanSelect(plan.name)}
                    >
                      {selectedPlan === plan.name ? 'Selected' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Need a custom plan? We offer enterprise solutions for schools and institutions.
            </p>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setShowContactForm(true)}
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </>
  );
};

export default Pricing;
