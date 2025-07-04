import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  let passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(passwordRef.current.value)
  }, [password]);

  //Password Generator Method using useCallback Hook

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) string += "0123456789";
    if (characters) string += '~!@#$%^&*()_+{}:"<>?/.,][';

    for (let i = 1; i <= length; i++) {
      let generatedPassword = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(generatedPassword);
    }

    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  //useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  return (
    <>
      return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
        {/* Input with Copy Button */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={password}
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Generated Password..."
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        {/* Checkboxes */}
        <div className="flex space-x-4">
          <label className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="form-checkbox"
            />
            <span>Numbers</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={characters}
              onChange={() => setCharacters((prev) => !prev)}
              className="form-checkbox"
            />
            <span>Characters</span>
          </label>
        </div>

        {/* Length Slider */}
        <div>
          <label className="block mb-1 font-medium">Length: {length}</label>
          <input
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      );
    </>
  );
}

export default App;
