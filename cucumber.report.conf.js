const report = require('multiple-cucumber-html-reporter');

const customData = {
  title: 'Run info',
  data: [
    {
      label: 'Project',
      value: 'Weswingnow'
    },
    {
      label: 'Generated on:',
      value: new Date().toUTCString()
    },
    {
      label: 'Reporter:',
      value: '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
        'target="_blank">multiple-cucumber-html-reporter</a>'
    },
  ]
};

report.generate({
  jsonDir: './report/cucumber/',
  reportPath: './report/cucumber/html',
  displayDuration: true,
  removeFolders: true,

  pageTitle: 'Westwingnow Demo',
  reportName: 'WESTWINGNOW DEMO',
  openReportInBrowser: true,
  pageFooter:
    '<div class="created-by"><p>Powered by &copy; <a href="https://github.com/HuongPham" target="_blank">HuongPham</a></p></div>',

  customData: addMetadata(customData),
});

function addMetadata(customData) {
  customData.data = customData.data
    .concat(...fromGithubActions())

  return customData;
}

function* fromGithubActions() {
  if (process.env.GITHUB_ACTIONS) {
    yield { label: 'CI', value: 'Github Actions' };
  }

  if (process.env.GITHUB_REF) {
    yield { label: 'Branch', value: process.env.GITHUB_REF.replace('refs/heads/', '') };
  }

  if (process.env.GITHUB_SHA) {
    yield { label: 'Commit', value: process.env.GITHUB_SHA }
  }

  if (process.env.GITHUB_RUN_NUMBER) {
    yield { label: 'Run', value:  process.env.GITHUB_RUN_NUMBER };
  }
}