"use client";
import React from "react";
import { useState } from "react";

import { addContact } from "../lib/api/addContact";
import { ContactData } from "../lib/types/contact";

const Add = () => {
  // Stores and updates the user's contact form input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tag: "",
  });

  // Handles form submission by sending data to backend using addContact function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting contact: ", formData);
    // TODO: send data to backend via fetch
    try {
      await addContact(formData as ContactData);
      console.log("Contact added successfully");
      setFormData({ name: "", phone: "", email: "", tag: "" });
      alert("Contact was sucessfully added.");
      setTimeout(function () {
        location.reload();
      }, 3000);
    } catch (error) {
      console.error("Add contact error:", error);
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">➕ Add New Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tag: ( Friends, Family, Work, ... )
          </label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save Contact
        </button>
      </form>
    </main>
  );
};

export default Add;
