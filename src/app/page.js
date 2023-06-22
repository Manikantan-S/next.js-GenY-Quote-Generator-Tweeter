"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState();
  const [error, setError] = useState("");
  const [quote, setQuote] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const fetchData = async () => {
    setIsHidden(true);
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5z1A769H7gBh1MFxUeZTiQ==OlO11jhB3yg1d0rY",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Wrong email or password.");
      }
      const data = await response.json();

      setQuote( await data[0]);
      setIsHidden( false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setColor(Math.random().toString(16).substr(-6));

    fetchData();
  }, []);

  const handleClick = () => {
    setIsHidden(true);
    fetchData();
    setTimeout(() => {
      setIsHidden(false);
    }, 1500);

    setColor(Math.random().toString(16).substr(-6));
  };
  return (
    <div className="background bg-gray-700 w-full fixed top-0 right-0 left-0 bottom-0 grid place-items-center ">
      <style jsx>{`
        .background {
          background: #${color};
          transition: background-color 1.5s ease-in-out;
        }
        .color {
          color: #${color};
          transition: opacity 1s ease-in-out, color 1.5s ease-in-out;
        }
      `}</style>

      <div
        id="quote-box"
        className="border py-8 px-12 w-[550px] h-fit bg-white rounded-[3px] "
      >
        <div id="text">
          <p
            className={`color font-mono text-3xl text-center tracking-tighter text-gray-700 
          ${isHidden ? "opacity-0" : ""}
          `}
          >
            <span className="text-6xl align-text-bottom ">❝</span>
            {quote.quote}
          </p>
        </div>
        <div
          id="author"
          className={`color float-right mt-2 text-gray-700
        ${isHidden ? "opacity-0" : ""}
        `}
        >
          -<span className="ml-2">{quote.author}</span>
        </div>
        <div id="buttons" className="mt-14">
          <button
            id="new-quote"
            className="float-right text-white py-3 px-2 text-sm rounded background bg-gray-700 "
            onClick={handleClick}
          >
            New quote
          </button>
          <br /><br />
          <button
          id="new-page"
          className="float-right text-white py-3 px-3 text-sm rounded background bg-gray-700"
          >
          <Link href="/newPage" legacyBehavior>
          <a>About</a>
          </Link>
          </button>

          <a
            id="tweet-quote"
            title="Tweet this quote!"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.quote}" ${quote.author} #quotes`
            )}`}
            className="background text-white p-[14px] rounded w-fit float-left bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              version="1.0"
              viewBox="0 0 512 512"
              className="text-white h-4 w-4"
              fill="white"
            >
              <path d="M473 35.4c-3 1.3-15.8 7.5-28.5 13.8-12.6 6.3-25.8 12.8-29.2 14.3l-6.3 2.8-6.9-3.1c-39-17.4-87.2-8.6-118.4 21.7-24.5 23.7-37.7 54.2-39.4 90.9l-.6 13.3-4.6-.6C167.4 179 107.7 138.3 71.3 74c-4.8-8.3-8.2-11.2-14.2-11.8-6.4-.6-10.3 1-14.1 5.8-4.3 5.4-10.7 17.7-13.5 26-2.8 8.2-5.5 24.9-5.5 33.6.1 12.6 4.2 31.7 9.4 43.1 1.5 3.1 2.4 5.8 2.2 6-.2.3-4.3-.7-8.9-2.1-10.1-3.1-14-3.2-18.7-.7-3.7 1.9-8 8.8-8 12.7 0 1.3.9 6.3 2 11.1 8.7 37.1 30.2 65.7 63.7 84.8l7.5 4.3-5.3 1.5c-3 .9-7.4 2.1-9.8 2.7-6 1.6-8.3 3.3-10.9 7.9-5.3 9.5-1.6 16.5 16.7 31 20.3 16.1 44.8 28.4 72.9 36.5 6.2 1.8 11.3 3.6 11.3 4 0 1.3-11 8.5-20 13.1-11 5.6-24.2 9.9-38.5 12.6-9 1.7-16.2 2.2-38.1 2.6-30.8.5-33.9 1-38 7.1-3 4.4-3.3 10.7-.9 15.8 1.8 3.8 10.5 11 20.1 16.8 26.2 15.7 80.3 31.5 126.8 37 67 8 130.4.7 179.5-20.7 27.9-12.2 48.8-26.6 70.7-48.8 43.3-44.2 68.5-93.9 78-153.9 2.5-16.1 2.5-56-.1-74.8l-1.8-13.2 12.3-19.6c6.7-10.8 12.6-21.1 13.2-22.9 2.2-7.2-1.8-14.9-9.4-17.9-3.5-1.4-5.5-1.5-14.1-.6-5.5.5-11.8 1-13.9 1H470l12.5-25c6.8-13.7 12.7-26.6 13-28.7.9-5.7-2.7-12.2-8.5-15.1-5.5-2.7-7.1-2.7-14 .2z" />
            </svg>
          </a>
         
        </div>
      </div>
    </div>
  );
}
