"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInValidInput = (input) => {
  return !input || input.trim(" ") === "";
};

export const formAction = async (prevState, formData) => {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInValidInput(meal.title) ||
    isInValidInput(meal.creator) ||
    isInValidInput(meal.summary) ||
    isInValidInput(meal.instructions) ||
    isInValidInput(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalid input" };
  }

  saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
