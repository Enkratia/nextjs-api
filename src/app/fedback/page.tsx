"use client";

import React from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  email: "",
  message: "",
};

const Feedback: React.FC = () => {
  const [data, setData] = React.useState(initState);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = data;

    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();
    console.log(result);
  };

  return <div>page</div>;
};

export default Feedback;
