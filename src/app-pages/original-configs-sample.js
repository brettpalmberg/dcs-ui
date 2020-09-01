import React, { useState, useEffect } from "react";

import Wrapper from "../app-components/wrapper";
import GHContentsTable from "../app-components/gh-contents-table";

export default () => {
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    const url =
      "https://api.github.com/repos/brettpalmberg/edit-db/contents/config";
    fetch(url)
      .then((resp) => resp.json())
      .then((j) => {
        console.log(j);
        setConfigs(j);
      });
  }, []);

  return (
    <Wrapper>
      <h3>Configs</h3>
      <GHContentsTable items={configs} />
    </Wrapper>
  );
};
