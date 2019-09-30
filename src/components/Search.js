import React from "react";
import { Input } from "react-native-elements";

const Search = ({ onChange }) => {
  return (
    <Input
      placeholder="Enter pokemon name..."
      leftIcon={{ type: "font-awesome", name: "search" }}
      inputStyle={{ paddingLeft: 10 }}
      onChange={onChange}
    />
  );
};

export default Search;
