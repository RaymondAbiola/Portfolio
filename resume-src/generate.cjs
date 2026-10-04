const puppeteer = require("/home/raymondintell/Desktop/Portfolio/node_modules/puppeteer-core");
const path = require("path");
(async () => {
  const b = await puppeteer.launch({ executablePath: "/usr/bin/google-chrome-stable", headless: "new", args: ["--no-sandbox","--disable-gpu"] });
  const p = await b.newPage();
  const htmlPath = "file://" + path.resolve(__dirname, "resume.html");
  await p.goto(htmlPath, { waitUntil: "networkidle0" });
  // PDF
  await p.pdf({
    path: path.resolve(__dirname, "../public/Raymond-Abiola-Resume.pdf"),
    format: "A4", printBackground: true, preferCSSPageSize: true,
  });
  // PNG preview (A4 @ ~96dpi)
  await p.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
  await p.screenshot({ path: "/tmp/resume-preview.png", fullPage: true });
  console.log("generated PDF + preview");
  await b.close();
})();
