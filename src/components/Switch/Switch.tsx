import React, { useState } from "react";

interface IProps {
  onChange: () => void;
  theme: string;
}

const Switch = ({ onChange, theme }: IProps) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center">
        {/* <span className="mr-2 text-sm font-medium text-gray-900">OFF</span> */}
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              onChange();
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-primary_d  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary_d"
          ></div>
          <span className="ml-2 text-sm font-medium text-slate-400">
            {theme}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
