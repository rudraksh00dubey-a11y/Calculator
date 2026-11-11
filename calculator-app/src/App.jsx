import {useState } from 'react'
function App() {
  window.addEventListener("keydown",function(e){
    e.key
    
  })
  const arr = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  const symbols=["AC",'%',"/","DEL","X","-","+","="]
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setpreviousNumber] = useState(null);
  const [operation, setoperation] = useState(null);
  const [overwrite, setoverwrite] = useState(false);
  function appendNum(e){
    if(!overwrite){
      if(currentNumber.includes(".") && e=="."){
        return;
      }
      else{
        if(currentNumber=="0" && e!="."){
          setCurrentNumber(e);
        }
        else{
        setCurrentNumber((prev) => prev + e);
        }
      }
    }
    else{
      setCurrentNumber(e)
      setoverwrite(false)
    }
  }
  function operate(e){
    setoperation(e)
    
  if (previousNumber == null) {
    setpreviousNumber(currentNumber);
    }
  if(previousNumber!=null){
    value()
  }
    setCurrentNumber("")
  }
  function del(){
    if(currentNumber!="0"){
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  }
  function ac() {
   setCurrentNumber("0")
   setoperation(null)
   setpreviousNumber(null)
  }
  function value(){
    switch (operation) {
      case "+":
        setpreviousNumber((prev) => (Number)(prev) + (Number)(currentNumber));
        break;
      case "-":
        setpreviousNumber((prev) => (Number)(prev) - (Number)(currentNumber));
        break;
      case "/":
        if(currentNumber=="0"){
          setpreviousNumber("Error")
          setCurrentNumber("0")
        }
        else{
          setpreviousNumber((prev) => (Number)(prev) / (Number)(currentNumber));
        }
        break;
      case "X":
        setpreviousNumber((prev) => (Number)(prev) * (Number)(currentNumber));
        break;
      case "%":
        setpreviousNumber((prev) => (Number)(prev)*(Number)(currentNumber)/100);
        break;
    }
  }
  function equal(){
    switch (operation) {
      case "+":
        setCurrentNumber((prev) => Number(previousNumber)+Number(prev));
        break;
      case "-":
        setCurrentNumber((prev) => Number(previousNumber)-Number(prev));
        break;
      case "/":
        if (currentNumber == "0") { 
          setCurrentNumber("Error");
          setpreviousNumber(null)
        }
        else {
          setCurrentNumber((prev) => Number(previousNumber)/Number(prev));
        }
        break;
      case "X":
        setCurrentNumber((prev) => Number(prev) * Number(previousNumber));
        break;
      case "%":
        setCurrentNumber(
          (prev) => (Number(prev) * Number(previousNumber)) / 100,
        );
        break;
    }
    setpreviousNumber(null)
    setoperation(null)
    setoverwrite(true)
  }

  return (
    <>
      <main className="h-dvh w-dvw flex justify-center p-5">
        <section className="bg-white h-full w-100 min-w-85 rounded-2xl ">
          <div className="h-1/3 rounded-t-2xl bg-[#CCD6DF] w-full relative p-10 flex flex-col justify-end items-end shadow-[inset_0_10px_80px_rgba(255,255,255,1)] ">
            <div id="theme" className="flex absolute top-5 left-5">
              <div className="h-7 w-9 rounded-l-lg bg-[#111] text-2xl text-white flex justify-center items-center">
                <span>
                  <svg
                    className="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Polestar</title>
                    <path d="m12.549 0-.457.555v11.191h11.19l.554-.457-9.4-1.89zM.719 12.26l-.555.457L9.563 14.6l1.886 9.4.457-.555V12.26Z" />
                  </svg>
                </span>
              </div>
              <div className="h-7 w-9 rounded-r-lg text-2xl text-black flex justify-center items-center">
                <span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none">
                      <path
                        fill="none"
                        d="M12.44 21.6a9.96 9.96 0 0 1-9.96-9.95c0-5.5 3.57-8.3 6.12-8.93c0 0-1.56 5.29 2.43 10.2c4.79 4.8 10.48.75 10.7 1.68c.22.94-3.8 7-9.3 7"
                        opacity=".2"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M2.48 11.65a9.96 9.96 0 0 0 18.96 4.24c.4-.83.6-1.25.38-1.5c-.22-.24-.72-.08-1.72.25c-2.33.77-6.18 1.35-9.15-1.63a8.2 8.2 0 0 1-2.13-8.59c.36-1.17.53-1.76.27-1.97c-.27-.21-.72.05-1.63.57a10 10 0 0 0-4.98 8.63"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div id="Current" className="h-4/6 flex flex-col justify-end pb-2">
              <h1 className="text-6xl font-bold">{(currentNumber)}</h1>
            </div>
            <div id="answer" className="h-1/4 flex flex-col justify-end">
              <p className="text-xl font-[650]">{previousNumber!=null?(Number)(previousNumber):""} {operation}</p>
            </div>
          </div>
          <div className="h-2/3 w-full bg-[#DCE2E4] px-10 flex items-center justify-center rounded-b-2xl">
            <div id="left" className=" flex flex-col gap-6">
              <div id="upper" className=" flex gap-6">
                {symbols.map((elem, idx) => {
                  while (idx < 3) {
                    return (
                      <div className="h-15 w-15 rounded-lg bg-[#EAEDF0] flex justify-center items-center"
                        key={elem}
                        onClick={()=>{elem=="AC"?ac():operate(elem)}}
                      >
                        <h1 className="text-2xl">{elem}</h1>
                      </div>
                    );
                  }
                })}
              </div>
              <div id="middle" className="grid grid-cols-3 grid-rows-3 gap-6">
                {arr.map((elem) => {
                  return (
                    <div
                      className="bg-[#FCFFFF] h-15 w-15 rounded-full flex justify-center items-center"
                      key={elem}
                      onClick={() => {
                        appendNum(elem);
                      }}
                    >
                      <h1 className="text-2xl">{elem}</h1>
                    </div>
                  );
                })}
              </div>
              <div id="lower" className="flex gap-6 w-full">
                <div
                  className="h-15 rounded-full bg-[#EAEDF0] flex items-center px-5 w-2/3"
                  onClick={() => {
                    appendNum("0");
                  }}
                >
                  <h1 className="text-2xl">0</h1>
                </div>
                <div
                  className="h-15 rounded-full bg-[#EAEDF0] flex items-center px-5 w-1/3"
                  onClick={() => {
                    appendNum(".");
                  }}
                >
                  <h1 className="text-2xl">.</h1>
                </div>
              </div>
            </div>
            <div id="right" className=" flex flex-col gap-6 pl-6">
              {symbols.map((elem, idx) => {
                while (idx > 2) {
                  return (
                    <div
                      className={`h-15 w-15 rounded-lg shrink-0 ${idx == 7 ? "text-4xl" : "bg-[#EAEDF0] text-2xl"} ${idx < 7 && idx > 4 ? "text-4xl" : "text-2xl"} flex justify-center items-center`}
                      key={elem}
                      onClick={() => {
                        elem=="DEL"?del():elem=="="?equal():operate(elem);
                      }}

                    >
                      <h1>{elem}</h1>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
