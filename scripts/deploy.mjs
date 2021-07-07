import { exec } from 'child_process';
import * as ghPages from 'gh-pages';

/**
 * @typedef  {Object} Github
 * @prop {string} actor
 * @prop {string} email
 * @prop {string} token
 * @prop {string} repo
 */

/**
 * Publish Github Pages
 * 
 * @param github {Github}
 * @param src {string}
 * @param dest {string}
 * @param message {string}
 */
function publishGhPages(github, src, dest, message) {
  ghPages.clean();
  ghPages.publish(
    src,
    {
      user: {
        name: github.actor,
        email: github.email,
      },
      repo: `https://x-access-token:${github.token}@github.com/${github.repo}.git`,
      branch: 'gh-pages',
      dest,
      message,
    },
    (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    }
  );
}

function deploy() {
  const commit = process.env.GITHUB_COMMIT;
  const prNumber = process.env.GITHUB_PR_NUMBER;
  const prTitle = process.env.GITHUB_PR_TITLE;
  const [organization, repo] = process.env.GITHUB_REPOSITORY.split('/');

  const preview = process.env.PREVIEW;

  const baseUrl = `https://${organization}.github.io/${repo}`;
  const path = preview ? `preview/${prNumber}` : '';
  const url = `${baseUrl}/${path}`;

  const github = {
    actor: process.env.GITHUB_ACTOR,
    email: process.env.GITHUB_ACTOR_EMAIL,
    token: process.env.GITHUB_TOKEN,
    repo: process.env.GITHUB_REPOSITORY,
  }

  const message = preview
    ? `Build from #${prNumber}: ${prTitle} (${commit}) to url: ${url}`
    : `Build to url: ${url}`;

  exec('docusaurus build', (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(error);
      process.exit(1);
    }

    console.log(stdout);

    publishGhPages(github, 'build',  path, message);
  });
}

deploy();
