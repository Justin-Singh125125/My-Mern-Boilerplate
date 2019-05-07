# MERN Boilerplate

Start your full stack web app with Mongo, Express, React, and Node.

## Setup

These instructions should work from both Unix (MacOS, Linux) systems and 
git bash on Windows. It is assumed you have Node installed.

When you first download this repo, you have to install dependencies for two
node directories.

From the root directory, run:

```bash
yarn install
```

Then, from the `client/` directory, do the same:

```bash
yarn install
```

You then must build the client. From the `client/` directory:

```bash
yarn build
```

Now that the React client is built, all you have to do is run the Express
server to see everything in action.

Run `yarn start` to begin the full stack app. Navigate to
[http://localhost:8080](http://localhost:8080) to see the app running.