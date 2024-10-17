import React from "react";

const SearchBox = () => {
  const handleSubmit = () => {
    alert("hi");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search location"
        className="input input-accent mr-2 ml-7 pr-20"
      />
      <button type="submit" className="btn btn-accent">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
