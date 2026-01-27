import { useEffect, useState } from "react";
import { Link } from "react-router";

function Home() {
  const [isFullSize, setIsFullSize] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFullSize(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      Home
      <img
        src="assets/download-removebg-preview.png"
        alt=""
        className={`${isFullSize ? "scale-120" : "scale-10"} transition-transform duration-1000 ease-in-out`}
      />
      <button className="cursor-pointer rounded-sm border border-slate-400 px-2 py-1 hover:bg-slate-50">
        <Link to="/categories">Categories</Link>
      </button>
    </div>
  );
}

export default Home;
