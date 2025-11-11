"use client";

import { data } from "@/src/constant/data";
import { useParams } from "next/navigation";

interface Person {
  id: string;
  name: string;
  type: string;
  message: string;
}

const InvitationPage = () => {
  const params = useParams();
  const id = params?.id as string;
  console.log(id);
  const person = data.find((item: Person) => item.id === id);

  if (!person) {
    return (
      <div>
        <h1>Person not found</h1>
        <p>No person found with ID: {id}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Invitation Page</h1>
      <div>
        <p>Name: {person.name}</p>
        <p>Type: {person.type}</p>
        {person.message && <p>Message: {person.message}</p>}
      </div>
    </div>
  );
};

export default InvitationPage;
