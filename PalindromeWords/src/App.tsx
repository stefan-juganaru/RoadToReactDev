import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isPalindrome = (str: string) => {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPalindrome(text)) {
      alert("Palindrome");
    } else {
      alert("Not Palindrome");
    }
    setText("");
    inputRef.current!.value = "";
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => handleInput(e)}
        ></input>
        <button type="submit">Submit</button>
        <h1>{text}</h1>
      </form>
    </div>
  );
}

export default App;
