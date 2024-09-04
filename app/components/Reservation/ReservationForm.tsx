import React from "react";

const ReservationForm = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
          <input
            id="guests"
            type="text"
            placeholder="Number of Guests"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          id="date"
          type="date"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="requests" className="block text-sm font-medium text-gray-700">
          Special Requests
        </label>
        <textarea
          id="requests"
          placeholder="Special Requests"
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={3}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
      >
        Reserve Now
      </button>
    </form>
  );
};

export default ReservationForm;
