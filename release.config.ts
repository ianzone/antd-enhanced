import type { Options } from 'semantic-release';

// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const config: Options = {
  branches: ['release'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
};

export default config;
