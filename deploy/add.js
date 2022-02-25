
const path = require('path');
const fs = require('fs');
// let workflow = require('./lib');
function AddHelper(client, options) {
  this.client = client;
  this.options = options;
}

AddHelper.prototype.uploadFile = async function (filename, parent) {
  if (!fs.existsSync(filename)) {
    return;
  }

  let ossPath = `${this.options.env}/web/${this.options.project}/${
    parent ? parent + '/' : ''
  }${path.basename(filename)}`;

  try {
    await this.client.put(ossPath, filename);
    console.log(`${filename} ok`);
  } catch (e) {
    console.log(`${filename} put fail`, e.message);
  }
};

AddHelper.prototype.uploadDir = async function (dir, parent = '') {
  if (!fs.existsSync(dir)) {
    return;
  }

  let files = fs.readdirSync(dir);

  files.forEach((file) => {
    let filename = path.join(dir, file);
    let stat = fs.statSync(filename);

    if (stat.isFile()) {
      this.uploadFile(filename, parent);
    } else {
      let xParent = parent
        ? `${parent}/${path.basename(filename)}`
        : path.basename(filename);
      this.uploadDir(filename, xParent);
    }
  });
};

module.exports = AddHelper;
