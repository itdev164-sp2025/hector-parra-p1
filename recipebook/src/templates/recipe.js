import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Recipe = ({ data }) => {
    if (!data?.contentfulRecipe) {
        return <Layout><p>Recipe not found</p></Layout>;
    }

    const { name, author, prepTime, cookTime, ingredients, steps } = data.contentfulRecipe;

    // Convert `steps.steps` string into an array by splitting at newlines
    const stepList = steps?.steps ? steps.steps.split("\n").filter(step => step.trim() !== "") : [];

    return (
        <Layout>
            <h1>{name}</h1>
            <p>By {author}</p>
            <p>Prep Time: {prepTime}</p>
            <p>Cook Time: {cookTime}</p>
            <h2>Ingredients</h2>
            <ul>
                {(ingredients ?? []).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Steps</h2>
            <ol>
                {stepList.map((step, index) => (
                    <li key={index}>{step}</li> // Render each step properly
                ))}
            </ol>
        </Layout>
    );
};

export default Recipe;

export const query = graphql`
query recipeQuery($name:String!) {
  contentfulRecipe(name: {eq: $name}) {
    name
    author
    prepTime
    cookTime
    ingredients
    steps {
      steps
    }
  }
}
`;
