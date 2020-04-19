//* Test component
import { getPersonnelList } from "./data-server.mjs";

const TestComponent = (props) => {
  if (props) {
    return `<div style=${props}><h3>${getPersonnelList[0].First}</h3></div> `;
  }
};

export default TestComponent;
