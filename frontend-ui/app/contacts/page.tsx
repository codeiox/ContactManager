"use client";

import { useEffect, useState } from "react";
import { getContacts } from "../lib/api/displayContact";

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  tag: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getContacts()
      .then((data) => setContacts(data))
      .catch((err) => console.error("Failed to fetch contacts:", err));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Contact List</h1>
      {contacts.map((contact) => (
        <div key={contact.id} className="mb-2 p-2 border rounded">
          <p>
            <strong>Name:</strong> {contact.name}
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {contact.email}
          </p>
          <p>
            <strong>Tag:</strong> {contact.tag}
          </p>
        </div>
      ))}
    </main>
  );
}
