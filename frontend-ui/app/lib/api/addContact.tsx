// lib/api/addContact.tsx

// lib/types/contact.tsx
import { ContactData } from "../types/contact";

// Sends contact data to the backend API (Crow) using POST request
export async function addContact(data: ContactData) {
  // TODO: change url if deploy
  const res = await fetch("http://localhost:8080/api/contacts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json(); // Returns response from backend
}
