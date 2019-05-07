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

Node will tell you that the `build` folder is ready to be deployed and to do:

```bash
yarn global add serve
serve -s build
```

Go ahead and do that.

Run `yarn start` to begin the full stack app. Navigate to
[http://localhost:5000](http://localhost:5000) to see the app running.