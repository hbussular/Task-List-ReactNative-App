module.exports = {
  preset: 'react-native',

  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ]
};

// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock')
// );
