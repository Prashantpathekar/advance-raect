import { useState } from "react";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}className="bg-green-500 text-white px-4 py-2 rounded">
        Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
