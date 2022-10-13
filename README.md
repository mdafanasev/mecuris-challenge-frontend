# Mecuris challenge front-end

Front-end part for Mercuris challenge

Back-end part is [here](https://github.com/mdafanasev/mecuris-challenge-backend)

## Preview

[http://mecuris-challenge.afsv.me/](http://mecuris-challenge.afsv.me/)

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

By default the dev server will proxy `/api` and `/static` requests to `http://localhost:3000` and  `http://localhost:3000/static`.
You can customize target URLs through environment variables `MECURIS_API_URL` and `MECURIS_STATIC_URL` and persist in the `.env` file
(see `.env.example` for the example):

```
MECURIS_API_URL=http://localhost:3000
MECURIS_STATIC_URL=http://localhost:3000/static
```

See `src/proxy.conf.js` for details

## Modules

### Catalog

Routed module for the list of entries. Key possibilities:

- Load all entries and show the list
- Select entry (by redirecting to the `entry` module)
- Restore all removed entries (for testing purposes)

### Entry

Routed module for the entry. Key possibilities:

- Load entry data and 3D model
- Show 3D model (using `Viewer` module)
- Load attributes data
- Customize the entry by changing attributes value
- Remove the entry

### Viewer

Reusable module for rendering the 3D model with customizations.

- Accepts the 3D model URL and list of customizations to apply.
- Loads glTF data from server and apply attributes to it using names of mesh

## Customization flow

- The entry page loads the entry data
- Entry has `attributes` - enitites which contain `name`, `type` and `value`
- The `CustomizationService` is a store to keep reactive state of all attributes of entry
- `EntryCustomizerComponent` renders all attributes using `EntryAttributeComponent`
- `EntryAttributeComponent` shows controls according the `type` of attribute
- On any attribute chage new state is pushing to the `CustomizationService` and sending to the server
- `EntryViewerComponent` gets updates of attributes and pass it to the `ViewerComponent`
- `ViewerComponent` applies attributes to the model. It uses `target` field to find target mesh in the model and apply modification according to the `type` of attribute

## Can be improved

- Previews in the catalog are static PNG. If something changes in the entry, preview should be updated.
The are to options: render preview in the server (may be using browser) or capture canvas bitmap from the client and send it to the server
- Make possible to upload glTF models and bind attributes to meshes from the UI. Now the binding should be done manually in the DB
- Improve mobile UI
