let workflow = require('./lib');
function DelHelper(client, options) {
  this.client = client;
  this.options = options;
}
DelHelper.prototype.removeObject = async function (objPath, cb) {
  try {
    await this.client.delete(objPath)
    console.log(`${objPath} delete ok`)
  } catch (e) {
    console.log(`${objPath} delete fail`, e.message)
  } finally {
    cb();
  }
}
DelHelper.prototype.removeDir = async function (objPath, cb) {
  try {
    let res = await this.client.list({
      prefix: objPath,
      delimiter: '/'
    })

    if (res.objects) {
      await workflow(res.objects.map(each => each.name), this.removeObject.bind(this));
    }

    if (res.prefixes) {
      await workflow(res.prefixes, this.removeDir.bind(this))
    }
    console.log(`${objPath} delete dir ok`)
  } catch (e) {
    console.log(`${objPath} delete dir fail`, e.message)

  } finally {
    cb();
  }

}
module.exports = DelHelper;
