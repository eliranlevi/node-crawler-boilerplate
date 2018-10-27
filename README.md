# Node crawler boilerplate

Minimal Node crawler boilerplate with modern ES6 features built-in (i.e. `Promise`s in requests and fs methods, `import` syntax, etc.), cheerio and express

## Goals

- Start building your own crawler within seconds
- Give you a minimalist skeleton and modern ES6 features that are not currently supported out of the box in Node

## How?

Just clone the repo, write your crawler and run `yarn run serve`

## Scripts

- `yarn run serve` - serves the app on `localhost:3000`
- `yarn run build` - builds the project, the out directory is `/dist`

## Basic example

Just a straightforward example to help you understand the usage of some of the tools in this project

```JavaScript
import requestPromise from "request-promise-native";
import cheerio from "cheerio";
import app from "express";

const app = express();

app.get("/", async (req, res) => {
  const $ = await requestPromise("https://path-to-website.com/", {
    transform: body => cheerio.load(body),
  });
  
  const header = $("h1").text();
  // ...do rest of your crawl...
  
  // send whatever you'd like to the browser
  res.send(header);
});

app.listen(3000);

```

## Packages 

- [TypeScript](https://github.com/Microsoft/TypeScript) is here just to get modern ES6 features in Node, like `import`
- [cheerio](https://github.com/cheeriojs/cheerio) - jQuery-like selectors for Node
- [request-promise-native](https://github.com/request/request-promise-native) - use `Promise`s in Node requests
- [express](https://github.com/expressjs/express) - watch (and interact) whatever you expect in the browesr rather than CLI
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - be able to use `Promise`s in filesystem methods rather than callbacks

## Future

- it would be nice to add a script to run tests
