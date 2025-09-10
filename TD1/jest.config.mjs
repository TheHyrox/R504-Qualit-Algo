export default {
  testEnvironment: "node",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageReporters: ["text", "html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
