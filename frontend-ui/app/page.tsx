"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/*  Welcome Section */}
      <section className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Welcome to Contact Manager 👋
        </h1>
        <p className="text-black text-base sm:text-lg">
          Manage your contacts and reminders efficiently from one place.
        </p>
      </section>

      {/*  Quick Actions */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Link
          href="/add"
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl text-white font-semibold mb-2">
            ➕ Add New Contact
          </h2>
          <p className="text-white">Create a new contact profile.</p>
        </Link>

        <Link
          href="/contacts"
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl text-white font-semibold mb-2">
            📇 View Contacts
          </h2>
          <p className="text-white">Browse and manage your contacts.</p>
        </Link>

        <Link
          href="/reminders"
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl text-white font-semibold mb-2">
            ⏰ View Reminders
          </h2>
          <p className="text-white">Check your tasks and follow-ups.</p>
        </Link>
      </section>

      {/*  Stats Overview */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-6 rounded-lg">
          {/* TODO: Update the number dynamically */}
          <p className="text-2xl text-white font-bold">28</p>
          <p className="text-sm text-white">Total Contacts</p>
        </div>
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-6 rounded-lg">
          {/* TODO: Update the number dynamically */}
          <p className="text-2xl text-white font-bold">5</p>
          <p className="text-sm text-white">Upcoming Reminders</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 p-6 rounded-lg">
          {/* TODO: Update the number dynamically */}
          <p className="text-2xl text-white font-bold">3</p>
          <p className="text-sm text-white">Tagged Groups</p>
        </div>
      </section>
    </main>
  );
}
