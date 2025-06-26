import React from "react";

type UserProps = {
  name: string;
  email: string;
  id: number;
};

const Card = ({ name, email, id }: UserProps) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex flex-col items-start">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-500">User ID: {id}</p>
      </div>
    </>
  );
};

export default Card;
