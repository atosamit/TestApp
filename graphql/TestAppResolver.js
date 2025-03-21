const resolvers = {
  Query: {
    getPremiumAdjustment: (parent, args, context, info) => {
      // Placeholder data
      const premiumAdjustments = [
        {
          id: "1",
          comment: "First Adjustment",
          totalBorrowerFees: 150.0,
          cuRetailRate: 2.5,
          protectedLoanAmount: 5000.0,
          payRate: 1.5,
          premiumDue: 300.0,
          totalAmount: 5450.0,
        },
      ];
      return premiumAdjustments.find((adj) => adj.id === args.id);
    },
  },
  Mutation: {
    editPremiumAdjustment: (parent, { input }, context, info) => {
      // This is where you'd typically handle input data to update the record
      // For simplicity, we are just returning the provided input with the same ID
      return {
        id: input.id,
        comment: input.comment,
        totalBorrowerFees: input.totalBorrowerFees,
        cuRetailRate: input.cuRetailRate,
        protectedLoanAmount: input.protectedLoanAmount,
        payRate: input.payRate,
        premiumDue: input.premiumDue,
        totalAmount: input.totalAmount,
      };
    },
  },
};

export default resolvers;