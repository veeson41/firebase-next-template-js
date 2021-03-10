const { https } = require("firebase-functions");
const { default: next } = require("next");
const nextjsDistDir = require("../next.config.js").distDir;

const isDev = process.env.NODE_ENV !== "production";
const app = next({ dev: isDev, conf: { distDir: nextjsDistDir } });
const handle = app.getRequestHandler();

exports.nextApp = https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
