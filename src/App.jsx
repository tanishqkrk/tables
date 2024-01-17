import { useState } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState(false);

  const [numbers, setNumbers] = useState([]);
  const [amount, setAmount] = useState(10);

  function generateTable() {
    setView(true);
  }

  console.log(new Array(amount));

  return (
    <div className="h-[100svh] flex items-end flex-col justify-between">
      <div className="text-3xl text-black font-bold text-center w-full h-[5%]">
        TABLES
      </div>
      {!view ? (
        <div className="text-center flex items-center w-full flex-col justify-center gap-6 h-[95%] bg-lgreen rounded-t-[3em] border-4 border-dgreen pb-4">
          <span className="text-2xl font-bold my-3">Enter the numbers</span>
          <ul className="flex flex-col gap-5 h-[70vh] overflow-y-scroll p-3">
            {numbers?.map((n) => {
              return (
                <li key={n.id} className="">
                  <input
                    onChange={(e) => {
                      setNumbers((prev) => {
                        return prev.map((x) => {
                          if (x.id !== n.id) {
                            return x;
                          } else {
                            return {
                              ...n,
                              number: e.target.value,
                            };
                          }
                        });
                      });
                    }}
                    className="rounded-2xl text-center min-h-[3em] bg-dgreen text-black font-bold border-2 border-black"
                    value={n.number}
                    type="number"
                  />
                </li>
              );
            })}
          </ul>
          <button
            onClick={() =>
              setNumbers((prev) => [
                ...prev,
                {
                  number: Math.floor(Math.random() * 10 + 2),
                  id: crypto.randomUUID(),
                },
              ])
            }
            className="bg-green-300 rounded-full py-2 flex items-center justify-center w-2/5 font-semibold border-2 border-black"
          >
            <span className="flex items-center text-lg">Add</span>
          </button>
          <div className="flex">
            <div
              onClick={() => amount > 1 && setAmount((prev) => prev - 1)}
              className="text-center w-12 bg-dgreen text-black font-bold p-2"
              type="text"
            >
              -
            </div>
            <div
              className="text-center w-12 bg-dgreen text-black font-bold p-2"
              type="text"
            >
              {amount}
            </div>
            <div
              onClick={() => setAmount((prev) => prev + 1)}
              className="text-center w-12 bg-dgreen text-black font-bold p-2"
              type="text"
            >
              +
            </div>
          </div>
          <button
            onClick={() => generateTable()}
            className="bg-dgreen   rounded-full py-2 flex items-center justify-center w-2/5 font-semibold border-2 border-black"
          >
            Generate
          </button>
        </div>
      ) : (
        <div className="text-center flex items-center w-full flex-col justify-center gap-6 h-[95%] bg-lgreen rounded-t-[3em] border-4 border-dgreen pb-4">
          <div className="flex flex-col gap-5 h-[70vh] overflow-y-scroll p-3 w-full">
            {numbers.map((n) => {
              return new Array(amount).fill("").map((m) => {
                const random = Math.floor(Math.random() * 11 + 1);
                return (
                  <div className="flex gap-2 bg-dgreen rounded-xl items-center justify-between">
                    <div className="bg-dgreen text-xl p-4 font-bold rounded-md  w-fit">
                      {n.number}
                    </div>
                    <div className="bg-dgreen text-lgreen p-4 font-bold rounded-md text-sm  w-fit">
                      X
                    </div>
                    <div className="bg-dgreen text-xl p-4 font-bold rounded-md  w-fit">
                      {random}
                    </div>
                    <div className="bg-dgreen text-lgreen text-xl p-4 font-bold rounded-md  w-fit">
                      =
                    </div>
                    <div className="bg-dgreen text-xl p-4 font-bold rounded-md  w-fit text-center">
                      {n.number * random}
                    </div>
                  </div>
                );
              });
            })}
          </div>
          <button
            onClick={() => setView(false)}
            className="bg-dgreen   rounded-full py-2 flex items-center justify-center w-4/5 font-semibold border-2 border-black"
          >
            Generate new table
          </button>
          <button
            onClick={() => {
              window.print();
            }}
            className="bg-blue-500  text-white rounded-full py-2 flex items-center justify-center w-4/5 font-semibold border-2 border-black"
          >
            Print
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
