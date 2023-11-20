import React, { useState } from "react";

const AddShippingAddress = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    region: "",
    postalCode: "",
    phone: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data, and then submit
    if (formData.firstName && formData.address && formData.city && formData.country) {
      onSubmit(formData);
    } else {
      // Handle validation errors
      alert("Please fill in required fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
    >
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="firstName"
            onChange={onChange}
            value={formData.firstName}
            autoComplete="given-name"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            value={formData.lastName}
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="address"
            onChange={onChange}
            value={formData.address}
            autoComplete="street-address"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="city"
            onChange={onChange}
            value={formData.city}
            autoComplete="address-level2"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <div className="mt-1">
        <input
            type="text"
            name="country"
            onChange={onChange}
            value={formData.country}
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
          State / Province
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="region"
            onChange={onChange}
            value={formData.region}
            autoComplete="address-level1"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
          Postal code
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="postalCode"
            onChange={onChange}
            value={formData.postalCode}
            autoComplete="postal-code"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={onChange}
            value={formData.phone}
            autoComplete="tel"
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Add Shipping Address
      </button>
    </form>
  );
};

export default AddShippingAddress;
