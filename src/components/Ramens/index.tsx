import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { parse } from "query-string";
import { Helmet } from "react-helmet";
import { Button, Divider, Icon } from "semantic-ui-react";

import { ramenData } from "../../ramenData";
import RamenList from "./RamenList";

// the left blank object is props. this time props is blank.
// RouteComponentProps is to receive the key value handled by withRouter
type RamensProps = {} & RouteComponentProps<{ code: string }>;

const Ramens: FC<RamensProps> = ({ history, location, match }) => {
  const codes = Object.keys(ramenData);
  const targetCode = match.params.code;
  // parse query paramte
  // when '?loading=true' is appied, isLoading is true
  const isLoading = parse(location.search).loading === "true";

  return codes.includes(targetCode) ? (
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
          area={ramenData[targetCode].region}
          ramens={ramenData[targetCode].ramens}
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
