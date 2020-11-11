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
        status: String!
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

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        recipes(page: Int): RecipeData!
        recipes(id: ID!): Recipe!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createPost(recipeInput: RecipeInputData): Recipe!
        updateRecipe(id: ID!, recipeInput: PostInputData): Recipe!
        deleteRecipe(id: ID!): Boolean
        updateStatus(status: String!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);