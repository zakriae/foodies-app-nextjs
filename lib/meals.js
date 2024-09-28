import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const imageName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${imageName}`);
  const imageBuffer = await meal.image.arrayBuffer();
  stream.write(Buffer.from(imageBuffer), (error) => {
    if (error) throw new Error("field to upload the image");
  });

  meal.image = `/images/${imageName}`;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug)
     `
  ).run(meal);
};
