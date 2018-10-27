import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  const body = `
  <div style="text-align: center; font-family: sans-serif; display: flex; flex-direction: column; height: 100%; justify-content: center;">
    <h2 style="color: #01baef;">
      😃 Your Crawler is up and running!
    </h2>
    <h5>
      Edit "src/index.ts" to get started (or take a look at a <a target='_blank' href='https://github.com/eliranlevi/node-crawler-boilerplate#basic-example'>basic example</a> first!)
    </h5>
    <p>
      Thanks for using this boilerplate! 🙏
    </p>
    <p>
      @github <a href="https://github.com/eliranlevi" target="_blank">Eliran Levi</a>
    </p>
  </div>
  `;

  res.send(body);
});

app.listen(PORT, () => {
  console.log(`Access your crawler now on http://localhost:${PORT}`);
});
