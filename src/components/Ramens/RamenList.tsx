import React, { FC } from "react";
import { Header, Icon, Item } from "semantic-ui-react";
import { Ramen } from "../../ramenData";

interface RamenListProps {
  area: string;
  ramens: Ramen[];
}

const RamenList: FC<RamenListProps> = ({ area = "unknown area", ramens }) => (
  <>
    <Header as="h2">{area}</Header>
    <Item.Group>
      {ramens.map((r) => (
        <Item key={r.id}>
          <Item.Content>
            <Item.Header>{r.name}</Item.Header>
            <Item.Meta>noodle: {r.noodle}</Item.Meta>
            <Item.Meta>soupe: {r.soupe}</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default RamenList;
