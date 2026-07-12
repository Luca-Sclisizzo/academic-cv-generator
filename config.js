const path = require("path");

module.exports = {
  outputDirectory:
    "./CV_academic",

  fileName: "CV_Sclisizzo.docx",

  get outputPath() {
    return path.join(this.outputDirectory, this.fileName);
  }
};
