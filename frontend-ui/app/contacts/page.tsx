"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
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

  //TODO: Allow contact delection

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">All Contact List</h1>
      <hr className="mb-4 pl-3 pr-3" />
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="relative mb-2 ml-3 mr-3 p-4 bg-sky-500/25 border rounded"
        >
          <button
            className="absolute top-5 right-2 text-red-600 hover:text-red-800"
            //onClick={() => handleDelete(contact.id)}
          >
            <Trash2 size={20} />
          </button>
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
      <br />

      <h1 className="text-xl font-bold mb-4"> Contact by group</h1>
      <hr className="mb-4 pl-3 pr-3" />
      {/* TODO: dispay the contact by group */}
    </main>
  );
}
