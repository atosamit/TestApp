import { gql } from 'apollo-server';

const typeDefs = `
  type PremiumAdjustment {
    id: ID!
    comment: String!
    totalBorrowerFees: Float
    cuRetailRate: Float
    protectedLoanAmount: Float
    payRate: Float
    premiumDue: Float
    totalAmount: Float
  }

  input PremiumAdjustmentInput {
    id: ID!
    comment: String!
    totalBorrowerFees: Float
    cuRetailRate: Float
    protectedLoanAmount: Float
    payRate: Float
    premiumDue: Float
    totalAmount: Float
  }

  type Query {
    getPremiumAdjustment(id: ID!): PremiumAdjustment
  }

  type Mutation {
    editPremiumAdjustment(input: PremiumAdjustmentInput!): PremiumAdjustment
  }
`;

export default typeDefs;