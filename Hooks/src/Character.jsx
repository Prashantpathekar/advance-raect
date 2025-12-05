import React, { useState } from "react";
import "./tailwind.css";
const Character = () => {
  const [text, setText] = useState("");
   const maxLength = 1000;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label className="block mb-2 font-medium text-gray-700">
        Description
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        rows="25"
        maxLength={maxLength}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something...">
 </textarea>

      <div className="flex justify-end mt-1">
        <span
          className={`text-sm ${
            text.length === maxLength ? "text-red-500" : "text-gray-500"
          }`}
        >
          {text.length} / {maxLength}
        </span>
      </div>
    </div>
  );
};

export default Character;
