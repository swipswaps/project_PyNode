# Project PyNode

The idea behind this project is an attempt to create a small-scale web app that
would use a model developed in Python for data processing and its results would
be displayed in the App built using modern web-development tools like: NodeJS,
React and D3js.

# Motivation

During my two years working as a datascientist in London, I visited various
professional Meet-Ups, where I have come across two communities: datascientists
and web-developers. It was rather striking, how these two groups keep
separately. At large, I think it was due to the fact, that the technologies each
group uses do not overlap.

The DataScientists community, on the most basic level, often works and develop
their models in Python using highly popular libraries like scikit-learn, pandas,
NTLK, etc.

At the same time, Web Developpers' most popular programming language is
Javascript and their stack includes NodeJS, Express, React, Angular, etc

# Stages

* Stage 1 The Python code will be invoked as a child process on the backend

# Getting Started

Currently, the project is not deployed online. However, it could be run locally.

To start the project you will need to register with the Guardian to receive the
[dev key](https://bonobo.capi.gutools.co.uk/register/developer)

You will have to add this key in two places:

1. Add config.env file to

```
server
|   client
|   ...
|   config.env
```

inside that file: `GUARDIAN_KEY=insert_dev_key_here`

2. Add token.js file inside server -> client -> src folder:

```
server
|   client
|   ...
└───── src
|      | components
|      | ...
|      | token.js
```

with the following

`export const GUARDIAN_KEY = "insert_dev_key here"`

Finally, in the terminal run the following command:

```shell
pavel@pavel~/server$npm run dev
```
