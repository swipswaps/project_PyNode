# Project PyNode

This project aimed to create a small-scale web app that
uses a model developed in Python for data processing and displays its results in an app built using modern web-development tools like: NodeJS,
React and D3js.

# Motivation

During my two years working as a data scientist in London, I visited various
professional Meet-Ups, where I came aross two communities: data scientists
and web developers. It was rather striking how these two groups keep separate.  Overall, I think this is due to the fact that the technologies used by each
group do not overlap.

The data science community, on the most basic level, often develops
its models in Python using highly popular libraries like scikit-learn, pandas,
NTLK, etc.

At the same time, web developers' most popular programming language is
Javascript and their stack includes NodeJS, Express, React, Angular, etc.

I therefore wanted to develop a project that bridges the divide between data science and web development.  
Web technology is therefore used to make data analysis available to the general public.  

# Project description with a little more details

The search bar on the screen allows you to search the Guardian articles (using
Guardian Api). The top-10 most relevant articles are displayed on the left hand
side. By pressing the "press me" button, the backend receives the article id and
requests its text, processes it in Python and sends the results back to the frontend,
which are displayed in the form of bubbles on the screen (using D3js library).

# Screenshots

### From an idea in Jupyter Notebook to a Web application

<img src="https://user-images.githubusercontent.com/19667238/39990458-864ecd1c-5764-11e8-8b09-1bc07ac17de1.png" width="400" />&rightarrow;<img src="https://user-images.githubusercontent.com/19667238/39990852-95b13b90-5765-11e8-8493-f910288c71a5.png" width="400"/>

# Tech/framework used

#### Built with:

* Express
* React
* D3js
* NodeJS
* JupyterNotebook

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

# Stages

* Stage 1 The Python code will be invoked as a child process on the backend
