import React from 'react';
import { Button } from '../ui/button';
import { ID } from 'appwrite';
import { FAQ_COLLECTION_ID, FAQ_DATABASE_ID,databases } from '@/config/appwrite';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

function FormFAQ() {
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await databases.createDocument(
        FAQ_DATABASE_ID,
        FAQ_COLLECTION_ID,
        ID.unique(),
        data
      );
      console.log('Form Submitted:', response);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting the form: ", error);
      toast.error("Failed to send message. Please try again.");
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <div className="w-full sm:w-1/2">
            <label htmlFor="fullName" className="text-sm font-medium text-white">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              className={`mt-1 w-full p-2 border text-black border-gray-300 rounded-lg shadow-sm ${
              errors.fullName ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full Name is required", 
                minLength: {
                  value: 3,
                  message: 'Full Name must be at least 3 characters long'
                },
                maxLength: {
                  value: 25,
                  message: 'Full Name can not exceed 30 characters'
                },
              })}
            />
            {errors.fullName && <p className="text-red-700 text-xs md:text-sm mt-1">{errors.fullName.message}</p>}
          </div>

          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 w-full p-2 border text-black border-gray-300 rounded-lg shadow-sm ${
                errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email address"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-700 text-xs md:text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-white">
            Message *
          </label>
          <textarea
            id="message"
            rows="4"
            className={`mt-1 resize-none overflow-y-scroll w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm
               focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : ''} `}
            placeholder="Enter your message"
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters long',
              },
              maxLength: {
                value: 300,
                message: 'Message can not exceed 300 characters',
              },
            })}
          />
          {errors.message && <p className="text-red-700 text-xs md:text-sm mt-1">{errors.message.message}</p>}
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
