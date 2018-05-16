import React, { Component } from "react";
import search_bar from "../assets/search_bar.png";
import listOfArticles from "../assets/listOfArticles.png";
import display_area from "../assets/display_area.png";

export default class Manual extends Component {
  render() {
    return (
      <div className="manual">
        <h2>Language is power ...</h2>
        <p>
          <span> Manual</span> <br />
          This website is an attempt to look at what words the Guardian
          columnists use when they write about this or that topic. Its
          visualisation tool selects most influential words (word's influence is
          based on its frequency and negative or positive sentiment. More about
          it<a
            href="https://github.com/prodionov/project_PyNode/wiki/The-influence-score-calculation"
            target="_blank"
          >
            <span> here.</span>
          </a>) and represents them in the shape of bubble. The size of the
          bubble shows how influential the word, its colour shows whether it has
          positive or negative connotation. You can find more details about the
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
        <img
          src={search_bar}
          alt="search bar picture"
          width="300px"
          align="left"
          padding="1rem"
        />
        <p>
          Allows you to search articles on various topics of interest available
          through the Guardian API. At this stage, search is only looks at the
          articles published today and in the opinion section. In the next
          stage, we will introduce the advanced search, which will allow you to
          select the newspaper sections and from and to dates for a more precise
          search
        </p>
        <h3>List of articles (look to the right)</h3>
        <p>
          On the left hand side, is the list of articles. By default, it
          displays the titles of the articles published today in the opinion
          section. Each item in the list is a clickable link, and you can be
          redirected to the actual article on the Guardian website. Next to it,
          you can press the button <span> Analyse</span>, which allows will
          display the visualisation for the that article.
        </p>
        <h3>Display area</h3>
        <img src={display_area} alt="display_area picture" width="400px" />
        <p>
          The article's title is displayed at the top. The bubbles
          [subjectively] represent the 15 most influential words from the
          article. The influence is based on words sentiment and frequency. More
          on that is
          <a
            href="https://github.com/prodionov/project_PyNode/wiki/The-influence-score-calculation"
            target="_blank"
          >
            <span> here. </span>
          </a>
          The colour represent the sentiment and the scale is shown on the right
          hand side. Some words are neither positive or negative. We call them
          neutral. In that case they are painted
          <span className="blue"> light blue</span>
        </p>
      </div>
    );
  }
}
