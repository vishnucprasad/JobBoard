const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config.resolve.alias["pdfjs-dist"] = path.join(
      __dirname,
      "./node_modules/pdfjs-dist/build/pdf"
    );
    return config;
  },
};
