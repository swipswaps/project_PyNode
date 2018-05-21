import React, { Component } from "react";
import search_bar from "../assets/search_bar.png";
import listOfArticles from "../assets/listOfArticles.png";
import display_area from "../assets/display_area.png";

export default class Manual extends Component {
  render() {
    return (
      <div className="manual">
        <h2>Language is power</h2>
        <p>
          <span> Manual</span> <br />
          This website is an attempt to look at the words used by Guardian
          columnists when they write about a particular topic. Its visualisation
          tool identifies the most influential words in the article and
          represents them in the shape of bubbles. A word's influence is based
          on its frequency and whether it is has negative or positive sentiment.
          More information about word influence is available at{" "}
          <a
            href="https://github.com/prodionov/project_PyNode/wiki/The-influence-score-calculation"
            target="_blank"
          >
            <span>on Wiki.</span>
          </a>
          The size of a bubble indicates a word's influence whilst its colour
          shows whether it has positive or negative connotations. You can find
          more details about the motivation for this application and code on
          <a href="https://github.com/prodionov/project_PyNode" target="_blank">
            <span> GitHub</span>
          </a>.
        </p>
        <p>
          This website has three main parts:
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
          The search bar allows you to find articles on various topics of
          interest available through the Guardian API. At this stage, the search
          only looks at the articles published today in the Opinion section of
          the Guardian. In the next stage, we will introduce an advanced search,
          which will allow you to select newspaper sections and from/to dates
          for a more precise search.
        </p>
        <h3>List of articles (left hand side)</h3>
        <p>
          The list of articles on the left hand side by default displays the
          titles of the articles published today in the Opinion section of the
          Guardian. Each item in the list is a clickable link that will redirect
          you to the actual article on the Guardian website. Next to it, you can
          press the button <span> Analyse</span>, which will display the
          visualisation for that article.
        </p>
        <h3>Display area</h3>
        <img src={display_area} alt="display_area picture" width="400px" />
        <p>
          The article's title is displayed at the top. The bubbles represent the
          15 most influential words in the article based on their sentiment and
          frequency. More on that can be found at
          <a
            href="https://github.com/prodionov/project_PyNode/wiki/The-influence-score-calculation"
            target="_blank"
          >
            <span> here. </span>
          </a>
          The colours represent the sentiment and the scale is shown on the
          right hand side. Some words are neither positive or negative. We call
          them neutral. In that case they are coloured
          <span className="blue"> light blue</span>
        </p>
      </div>
    );
  }
}
