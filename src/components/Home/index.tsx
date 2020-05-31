import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { ramenData } from "../../ramenData";

const codes = Object.keys(ramenData);

const Home: FC<{}> = () => (
  <>
    <Helmet>
      <title>ramen home</title>
    </Helmet>
    <header>
      <h1>ramen</h1>
      <p>This is a content about ramen.</p>
    </header>
    <List as="ul">
      {codes.map((code) => (
        <List.Item as="li" key={code}>
          <Link to={`/ramens/${code}`}>{ramenData[code].region}</Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
