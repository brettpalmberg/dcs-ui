import React from "react";

export default ({ items, itemTitle }) => (
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">{itemTitle}</th>
        <th scope="col">File</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr>
          <th scope="row">
            <h5>{item.name.slice(0, -4)}</h5>
          </th>
          <td>
            <a href={item.download_url}>{item.download_url}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
