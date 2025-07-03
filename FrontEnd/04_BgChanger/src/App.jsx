import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState('Black');

  return (
    <>
      <div
        className="fixed inset-0 w-screen h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex items-center h-screen bg-gray-100">
        <div className="relative inline-flex bg-white p-1 rounded-xl">
          <div className="absolute inset-0 bg-white rounded-md shadow-md -z-10"></div>
          <button onClick={() => setColor("red")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={() => setColor("blue")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button onClick={() => setColor("green")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={() => setColor("pink")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button onClick={() => setColor("olive")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button onClick={() => setColor("purple")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button onClick={() => setColor("yellow")}
            className="px-4 py-2 m-1 text-black rounded-md border-8 border-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
