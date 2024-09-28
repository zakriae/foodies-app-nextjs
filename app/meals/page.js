import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import LoadingMeals from "./loading-not";
import { Suspense } from "react";

const MealsEle = () => {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
};

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your measls to cook</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingMeals />}>
          <MealsEle />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
