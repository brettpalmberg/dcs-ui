import React, { useState, useEffect } from "react";

import Wrapper from "./wrapper";
import GHContentsTable from "./gh-contents-table";

export default ({ url, title }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((j) => {
        setItems(j);
      });
  }, []);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <GHContentsTable items={items} itemsTitle={title} />
    </Wrapper>
  );
};
