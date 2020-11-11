const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Recipe {
        _id: ID!
        title: String!
        content: [String!]!
        imageUrl : String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        recipes: [Recipe!]!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type RecipeData {
        recipes: [Recipe!]!
        totalRecipes: Int!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input RecipeInputData {
        title: String!
        content: [String!]!
        imageUrl: String!
    }

    type TestData {
        text: String!
        views: Int!
    }

    type TestQuery {
        hello: TestData!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        recipes(page: Int): RecipeData!
        recipe(id: ID!): Recipe!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createRecipe(recipeInput: RecipeInputData): Recipe!
        updateRecipe(id: ID!, recipeInput: RecipeInputData): Recipe!
        deleteRecipe(id: ID!): Boolean
        updateStatus(status: String!): User!
    }

    schema {
        query: TestQuery
        mutation: RootMutation
    }
`);