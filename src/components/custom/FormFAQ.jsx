import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ID } from 'appwrite';
import { FAQ_COLLECTION_ID, FAQ_DATABASE_ID,databases } from '@/config/appwrite';

function FormFAQ() {
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  

  async function submitQnAForm() {
    const response = await databases.createDocument(
      FAQ_DATABASE_ID,
      FAQ_COLLECTION_ID,
      ID.unique(),
      formData
    );
    return response
  }
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let response = await submitQnAForm();
    console.log('Form submitted:', response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <div className="w-full sm:w-1/2">
            <label htmlFor="fullName" className="text-sm font-medium text-white">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border text-black border-gray-300 rounded-lg shadow-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-2 border text-black border-gray-300 rounded-lg shadow-sm"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-white">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 resize-none overflow-y-scroll w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your message"
          />
        </div>

        <div className="flex justify-center sm:justify-start">
          <Button
            type="submit"
            className="w-[150px] rounded-xl text-base font-semibold bg-white text-gray-500 hover:bg-gray-300"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormFAQ;
