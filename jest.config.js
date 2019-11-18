module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "setupFilesAfterEnv": [
        "<rootDir>/jest.setup.js"
    ],
    
    // roots: ['<rootDir>/src'],
    // transform: {
    //     '^.+\\.tsx?$': 'ts-jest',
    // },
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
};