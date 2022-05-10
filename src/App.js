import { useState } from "react";

import { reverse } from "./helpers";
import "./styles.css";

import Title from "./title";
import NameLength from "./namelength";
import NameReverse from "./namereverse";

export default function App() {
  const [name, setName] = useState("Anica");

  return (
    <div className="app">
      <Title title={name} />
      <NameLength name={name} namelength={name.length} />
      <NameReverse name={name} namereverse={reverse(name)} />
    </div>
  );
}
