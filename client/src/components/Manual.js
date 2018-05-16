import React, { Component } from "react";
import search_bar from "../assets/search_bar.png";

export default class Manual extends Component {
  render() {
    return (
      <div className="manual">
        <h2>Language is power ...</h2>
        <p>
          This website is an attempt to look at what words the Guardian
          columnists use when they write about this or that topic. Its
          visualization tool selects most influencial words (word's influence is
          based on its frequency and negative or positive sentiment. More about
          it<a
            href="https://github.com/prodionov/project_PyNode/wiki/The-influence-score-calculation"
            target="_blank"
          >
            <span> here.</span>
          </a>) and respresents them in the shape of bubble. The size of the
          bubble shows how influencial the word, its colour shows whether it has
          positive or negative conotation. You can find more details about the
          motivation for this application and code on
          <a href="https://github.com/prodionov/project_PyNode" target="_blank">
            <span> GitHub</span>
          </a>.
        </p>
        <p>
          This website consists of three main parts:
          <span> Search Bar</span>, <span> List of articles</span> and
          <span> Display area</span>
        </p>
        <h3>Search bar</h3>
        <p>
          Allows you to search articles on various topics of interest available
          through the Guardian API. At this stage, search is only looks at the
          articles published today and in the opinion section. In the next
          stage, we will introduce the advanced search, which will allow you to
          select the newspaper sections and the from and to date for a more
          precise search
        </p>
        <h3>List of articles</h3>
        <p>
          On the left hand side, is the list of articles. By default, it
          displays the titles of the articles published today in the opinion
          section. Each item in the list is a clickable link, and you can be
          redirected to the actual article on the Guardian website. Next to it,
          you can press the button <span> Analyse</span>
        </p>
        <h3>Display area</h3>
      </div>
    );
  }
}
