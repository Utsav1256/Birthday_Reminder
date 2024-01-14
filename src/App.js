import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/List";
import data from "./utils/data";
import { useState } from "react";
import List from "./components/List";
import Reload from "./components/Reload";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-80 h-[520px] bg-gray-50 flex justify-center items-center flex-col gap-3 p-2 rounded-lg">
        <h3 className="text-xl text-slate-600">
          {people.length} Bithdays Today
        </h3>
        <div className="w-62 h-[440px]  flex flex-col gap-2">
          {people.map((person) => {
            // console.log(person)
            return <List key={person.id} person={person} />;
          })}
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            className="w-[170px] bg-red-600 text-xl text-gray-50 rounded-lg active:scale-[0.98]"
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
          <Reload />
        </div>
      </div>
    </main>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
