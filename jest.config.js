const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'@/root/(.*)$': '<rootDir>/$1',

		'@/docs/(.*)$': '<rootDir>/public/docs/$1',
		'@/icons/(.*)$': '<rootDir>/public/static/icons/$1',
		'@/images/(.*)$': '<rootDir>/public/static/images/$1',
		'@/sounds/(.*)$': '<rootDir>/public/static/sounds/$1',
		'@/videos/(.*)$': '<rootDir>/public/static/videos/$1',

		'@/animations': '<rootDir>/src/animations',
		'@/components/(.*)$': '<rootDir>/src/components/$1',
		'@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
		'@/pages/(.*)$': '<rootDir>/src/pages/$1',
		'@/scripts/(.*)$': '<rootDir>/src/scripts/$1',
		'@/services/(.*)$': '<rootDir>/src/services/$1',
		'@/stores/(.*)$': '<rootDir>/src/stores/$1',
		'@/styles/(.*)$': '<rootDir>/src/styles/$1',
		'@/utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
