const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	transformIgnorePatterns: ['/node_modules/'],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
