import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function Toggle() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || "bumblebee"
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <label className="swap swap-rotate text-2xl mx-2">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="business"
        checked={isDark === "business"}
        onChange={() =>
          setIsDark(isDark === "business" ? "bumblebee" : "business")
        }
      />

      {/* sun icon */}
      <GoSun className="swap-off fill-current" />

      {/* moon icon */}
      <GoMoon className="swap-on fill-current" />
    </label>
  );
}
