import { Search } from "lucide-react";
import React, { useState } from "react";

export default function SearchBar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className=" inline-flex items-center border-2 rounded-4xl p-2 bg-gray-200">
      <Search className={`mr-2 ${clicked ? "invisible" : "visible"}`} />

      <input
        type="search"
        name="searchBar"
        onFocus={() => setClicked(true)}
        onBlur={() => setClicked(false)}
        className="outline-none border-none"
        
      />
    </div>
  );
}
