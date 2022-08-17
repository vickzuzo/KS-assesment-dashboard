import React from "react";

interface IProps {
  title: string;
}

const PageHeader = ({ title }: IProps) => {
  return (
    <div className="w-full p-10 text-lg uppercase text-text_gray bg-white dark:bg-slate-800 rounded-md">
      {title}
    </div>
  );
};

export default PageHeader;
