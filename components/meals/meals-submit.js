"use client";

import { useFormStatus } from "react-dom";

const MealSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submiting meals..." : "Submit"}
    </button>
  );
};

export default MealSubmit;
