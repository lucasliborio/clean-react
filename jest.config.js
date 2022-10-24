module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': ['@swc/jest']
  },
  moduleNameMapper:{
  '@/(.*)': '<rootDir>/src/$1',
  "\\.scss$": 'identity-obj-proxy'
  }, 
}
