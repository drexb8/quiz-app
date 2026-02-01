import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

function Categories() {
  const items = useMemo(() => ["Item 1", "Item 2", "Item 3", "Item 4"], []);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Store timeout IDs for cleanup
    const timeoutIds = [];

    items.forEach((_, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, items[index]]);
        console.log("rendering");
      }, index * 200);
      timeoutIds.push(id);
    });

    return () => {
      console.log("cleanup");
      timeoutIds.forEach(clearTimeout);
    };
  }, [items]); // Still only runs once
  return (
    <div className="mx-96">
      <h1>Choose the category</h1>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className={`transform transition-all duration-400 ease-out ${
              visibleItems.includes(item)
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            } cursor-pointer rounded-lg border-4 border-[#cf7e0c] bg-[#547792] p-4 text-[#E8E2DB] shadow-lime-50 hover:scale-102`}
          >
            {item}
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="cursor-pointer rounded-sm border border-slate-400 px-2 py-1 hover:bg-slate-50"
      >
        Home
      </Link>
    </div>
  );
}

export default Categories;
