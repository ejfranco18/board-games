# TODO LIST

Todo List app created for Acid Labs.

This app was built with React and Typescript, using Redux Toolkit to managing state, Styled Components, Firebase DB and Vite for the running the server, building the app and hot reloading.

## Installation

Install all the dependencies.

```bash
yarn install
```

## Running app in localhost

Run the app in localhost:3000

```bash
yarn dev
```

## Build the app

Run the app in localhost:3000

```bash
yarn build
```

## Preview the build in localhost

Run the app in localhost:3000

```bash
yarn preview
```

## Structure Details

There are 3 main folders within src, which contain the files for the app structure:

### Components

In the components folder, all the components are stored in an specific folder for each one, within each folder there are 3 files, the .tsx in which the main logic of the component is defined, styled.ts in which the styled component is created, and the types.ts file in which the props types for the components are defined.

The file Styles/theme.tsx, has the variables for the colours used in the styled components.

### db

In this folder the file firebase.ts has all the configuration to connect to the firebase data base, where the tasks are stored.

### state

This folder contains the configuration for redux, using Redux Toolkit, the taskSlice.ts has the definitions of the action and the thunks that make the request to the DB.
