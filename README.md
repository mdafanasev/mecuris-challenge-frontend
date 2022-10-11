# Mecuris challenge front-end

Front-end part for Mercuris challenge

Back-end part is [here](https://github.com/mdafanasev/mecuris-challenge-backend)

## Description of the challenge

Implement a simple configurator application that retrieves a configuration data from the server and
shows the 3D visualization of a model. The configurator should allow the user to perform some actions
on the 3D model.

### User stories

- As a user, I want the app to show me a list of all the entries stored in the backend
- As a user, When I select an id, I want to see the 3D render of the object with the attribute stored
  in the backend
- As a user, I want to change the color/geometry (any attribute you decided to add to your model)
  of the 3D object, this change should be saved in the backend.
- As a user, I want to delete an existing entry stored in the backend via frontend/client. This
  change should be reflected in the backend.

## Prerequisites

- Node.JS 18.10.0
- NPM 8.19.2

[Volta](https://volta.sh/) is recommended tool to manage Node.JS and NPM versions

## How to run

Install dependencies:

```bash
npm install
```

Then run the app in dev mode:

```bash
npm start
```

Default port is 4200, so the application will be available in [http://localhost:4200](http://localhost:4200)

## Proxy to back-end

By default the dev server will proxy `/api` requests to `http://localhost:3000`.
You can customize target URL and secure parameter through environment variables `MECURIS_API_URL`:

```bash
MECURIS_API_URL=http://api.mydevserver.com npm start
```

To persist this customization for your local environment you can create `.env` file in the root of the project 
(see `.env.example` for the example):

```
MECURIS_API_URL=http://localhost:3000
```

See `src/proxy.conf.js` for details



