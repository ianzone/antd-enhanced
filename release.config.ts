import type { GlobalConfig } from 'semantic-release';

// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const config: GlobalConfig = {
  repositoryUrl: 'https://github.com/ianzone/antd-enhanced',
  tagFormat: 'v${version}',
  branches: ['release'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/exec',
      {
        analyzeCommitsCmd:
          // Check if any commit has type 'docs'
          'if git log -1 --pretty=format:"%s" | grep -q "^docs"; then ' +
          'echo "has_docs_changes=true" >> $GITHUB_OUTPUT; ' +
          'fi',
        successCmd: 'echo "new_release_published=true" >> $GITHUB_OUTPUT',
      },
    ],
  ],
};

export default config;
