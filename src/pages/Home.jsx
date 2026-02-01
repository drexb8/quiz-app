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
    <>
      <div>
        Home
        <img
          src="assets/download-removebg-preview.png"
          alt=""
          className={`${isFullSize ? "mb-10 scale-120" : "mb-10 scale-10"} block transition-transform duration-1000 ease-in-out`}
        />
      </div>
      <Link
        to="/Categories"
        className="cursor-pointer rounded-sm border border-slate-400 px-2 py-1 hover:bg-slate-50"
      >
        Categories
      </Link>
    </>
  );
}

export default Home;
