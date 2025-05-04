import { useEffect } from "react";

export async function getContacts() {
  const res = await fetch("http://localhost:8080/api/contacts");
  if (!res.ok) throw new Error("Failed to fetch contacts");

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await res.json();
  } else {
    const text = await res.text();
    console.error("Unexpected response:", text);
    throw new Error("Invalid JSON response");
  }
}
