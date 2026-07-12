/*
 * Configuration file for the Academic CV Generator.
 *
 * Defines the output directory and filename used to save
 * the generated Microsoft Word document.
 */

const path = require("path");

module.exports = {
  outputDirectory:
    "./CV_academic",

  fileName: "CV_Sclisizzo.docx",

  get outputPath() {
    return path.join(this.outputDirectory, this.fileName);
  }
};
