# Project PyNode

The idea behind this project is an attempt to create a small-scale web app that
would use a model developed in Python for data processing and its results would
be displayed in the App built using modern web-development tools like: NodeJS,
React and D3js.

# Motivation

During my two years working as a datas cientist in London, I visited various
professional Meet-Ups, where I have come across two communities: data scientists
and web-developers. It was rather striking, how these two groups keep
separately. At large, I think it was due to the fact, that the technologies each
group uses do not overlap.

The data scientists community, on the most basic level, often works and develop
their models in Python using highly popular libraries like scikit-learn, pandas,
NTLK, etc.

At the same time, web developers' most popular programming language is
Javascript and their stack includes NodeJS, Express, React, Angular, etc

# Project description with a little more details

The search bar on the screen allows you to search the Guardian articles (using
Guardian Api). The top-10 most relevant articles are displayed on the left hand
side. By pressing the "press me" button, backend receives the article id and
requests its text, process it in Python and sends back to frontend the results,
which are displayed in the form of bubbles on the screen (using D3js library).

# Screenshots

### From prototype to website

<img src="https://downloader.disk.yandex.ru/preview/fcfefb83d0e302cd4dd5cf292f22689a97fbb6ca8199b5ce03c395c9adc6388e/5ae73597/0acWjf_Znov2i6P-XTV3TGXvE7Z008TNsSS6mxtYEE7KnoxA5IHrcgG-BpC3drJZHBBDoLn4hnNEWD1YQWQbmg%3D%3D?uid=0&filename=JupyterNotebook.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048" width="300" />&rightarrow;<img src="https://downloader.disk.yandex.ru/preview/196ea980a957e8af0f5221a3bca0a7756a6aa7e717f5719857d6174ed9966d19/5ae7330e/0acWjf_Znov2i6P-XTV3TC8To2DcxatHLlaqO62dwi2XKStVeBfSuj0AkO7Sd9fFjlusxDFjUzGwg5ALC-zk9w%3D%3D?uid=0&filename=chromeDisplay.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=2048x2048" width="300"/>

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
