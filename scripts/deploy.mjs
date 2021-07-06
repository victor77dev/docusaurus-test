import { exec } from 'child_process';
import * as ghPages from 'gh-pages';

const commit = process.env.GITHUB_COMMIT;
const prNumber = process.env.GITHUB_PR_NUMBER;
const prTitle = process.env.GITHUB_PR_TITLE;
const previewPath = process.env.PREVIEW_PATH;

// const branch = process.env.GITHUB_REF.replace('refs/heads/', '');
// const deployEnv = branch.match(
//   /^master|^release|^production|^hotfix|^lab-\d+/
// )?.[0];
// const [_, repo] = process.env.GITHUB_REPOSITORY.split('/');

// process.env.PATH_PREFIX = `${repo}/${deployEnv}`;
console.log(`Commit: ${commit}`)
console.log(`PR number: ${prNumber}`)
console.log(`PR title: ${prTitle}`)
console.log(`PR title: ${previewPath}`)

exec('docusaurus build', (error, stdout, stderr) => {
  if (error || stderr) {
    console.error(error);
    process.exit(1);
  }

  console.log(stdout);

  ghPages.clean();
  ghPages.publish(
    'build',
    {
      user: {
        name: process.env.GITHUB_ACTOR,
        email: process.env.GITHUB_ACTOR_EMAIL,
      },
      repo: `https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`,
      branch: 'gh-pages',
      dest: `preview/${prNumber}`,
      message: `Build from #${prNumber}: ${prTitle} (${commit})`,
    },
    (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    }
  );
});
