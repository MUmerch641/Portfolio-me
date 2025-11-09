"use client"

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:muhammad.umer.official3@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">GET IN TOUCH</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let's Work Together</h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border-gray-800 text-white focus:border-purple-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border-gray-800 text-white focus:border-purple-500"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-900 border-gray-800 text-white focus:border-purple-500"
              placeholder="Project inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-gray-900 border-gray-800 text-white focus:border-purple-500 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p className="text-green-400 text-sm">Your email client will open. Please send the email to complete your message.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly at muhammad.umer.official3@gmail.com</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium w-full sm:w-auto"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            <p className="text-xs sm:text-sm text-gray-500">
              Or email me directly at{' '}
              <a href="mailto:muhammad.umer.official3@gmail.com" className="text-purple-400 hover:text-purple-300 transition break-all">
                muhammad.umer.official3@gmail.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
