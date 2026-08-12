import { useState } from "react";

function SearchFilter() {
  const [search, setSearch] = useState("");

  const items = [
    "React",
    "NodeJs",
    "MongoDB",
    "Express",
    "Angular",
    "VueJs",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
      }}
    >
      <div>
        <label
          style={{
            fontSize: "30px",
            marginRight: "10px",
          }}
        >
          Search:
        </label>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "330px",
            height: "35px",
            fontSize: "25px",
          }}
        />
      </div>

      <div>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: "30px",
              margin: "5px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchFilter;