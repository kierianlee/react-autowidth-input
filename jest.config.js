module.exports = {
    rootDir: "tests",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./jest.setup.ts"],
};
