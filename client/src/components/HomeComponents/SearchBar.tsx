import "../../styles/SearchBar.css";

import { useRef } from "react";

interface SearchBarProp {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ setUserInput }: SearchBarProp) => {
  const searchBarInputref = useRef<HTMLInputElement>(null);

  const HandleInputChange = () => {
    if (searchBarInputref.current) {
      const value = searchBarInputref.current.value.trim();
      setUserInput(value);
    }
  };

  return (
    <div className="container">
      <div className="input-group">
        <div className="form-outline" data-mdb-input-init>
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            ref={searchBarInputref}
            onChange={HandleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
