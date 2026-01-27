import { useEffect, useState } from "react";
import { Link } from "react-router";

function Categories() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Store timeout IDs for cleanup
    const timeoutIds = [];

    items.forEach((_, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, items[index]]);
      }, index * 200);
      timeoutIds.push(id);
    });

    // CLEANUP FUNCTION - Required!
    return () => {
      console.log("🧹 Cleaning up timeouts");
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [items]); // Still only runs once

  return (
    <>
      <div className="mx-96">
        <h1>Choose the category</h1>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className={`transform transition-all duration-500 ease-out ${
                visibleItems.includes(item)
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              } rounded-lg bg-blue-400 p-4 shadow`}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="cursor-pointer rounded-sm border border-slate-400 px-2 py-1 hover:bg-slate-50">
          <Link to="/">Categories</Link>
        </button>
      </div>
    </>
  );
}

export default Categories;
