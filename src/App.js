import React from "react";
import { useState} from "react";
import "./App.css"


export default 

function Bubblesort() {
  const [state, setState] = useState({
    inputNumber: [],
    resultNum: [],
  });

  

  const updatedinputNumber = (e) => {
    
    let newInputArray = e.target.value.split("");
    setState({ ...state, inputNumber: newInputArray });
  };
  const bubbleSort = (arr) => {
    let newArr = [...arr];
    let flag = true;
    while (flag) {
      flag=false
      for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i] > newArr[i + 1]) {
          [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
          flag = true;

        }
        console.log(state.resultNum)
      }
    }

    setState({ ...state, resultNum: newArr });
  };
{
    return (
      <div className="container">
        <header>
          <h1>Bubble Sort</h1>
        </header>
        <div className="app">
          <div className="inputs">
            
              <div>
                <input
                  type="number"
                  id="input_number"
                  onChange={updatedinputNumber}
                  placeholder="Input number 0-9"
                />
              </div>
              <button
                type="submit"
                id="submit_check"
                onClick={() => {
                  bubbleSort(state.inputNumber);
                }}
              >
                Check
              </button>

              
            
            <div className="result_area">
              <h3>
                Your Text: <span>{state.inputNumber}</span>{" "}
              </h3>
              <h2>Result:</h2>
              <h3 className="result_text"><span>{state.resultNum}</span></h3>

              
            </div>
          </div>
          <div className="footer">
            <p>
              Made by Dibya Dahal @ Business College{" "}
              <a href="https://github.com/Killerbee7/Palindrome_checker-react">
                GitHub Link
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


