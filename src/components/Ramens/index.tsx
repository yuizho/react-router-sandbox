import React, { FC } from "react";
import { withRouter } from "react-router";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import { parse } from "query-string";
import { Helmet } from "react-helmet";
import { Button, Divider, Icon } from "semantic-ui-react";

import { ramenData } from "../../ramenData";
import RamenList from "./RamenList";

const Ramens: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { code } = useParams();

  const codes = Object.keys(ramenData);
  // parse query paramte
  // when '?loading=true' is appied, isLoading is true
  const isLoading = parse(location.search).loading === "true";

  return codes.includes(code) ? (
    <>
      <Helmet>
        <title>ramen list</title>
      </Helmet>
      <header>
        <h1>ramen list</h1>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <RamenList
          area={ramenData[code].region}
          ramens={ramenData[code].ramens}
        />
      )}
      <Divider hidden />
      <Button
        basic
        clolor="grey"
        onClick={() => {
          history.push("/");
        }}
      >
        <Icon name="home" />
        home
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(Ramens);
