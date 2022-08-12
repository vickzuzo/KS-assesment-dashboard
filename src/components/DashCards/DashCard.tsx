import React from "react";

interface IProps {
  card: {
    title: string;
    amount: number;
    image: string;
  };
}

const DashCard = ({ card }: IProps) => {
  return (
    <div className="flex flex-row items-center p-7 justify-between group bg-white dark:bg-slate-800 transition  ease-int duration-300 rounded-md shadow-md hover:bg-primary_d dark:hover:bg-primary_d">
      <div className="">
        <p className="text-text_gray text-sm group-hover:text-white transition ease-in duration-300">
          {card.title}
        </p>
        <p className="text-3xl mt-5 dark:text-white group-hover:text-white transition ease-in duration-300">
          ${card.amount}
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <img src={card.image} alt="card_img" />
      </div>
    </div>
  );
};

export default DashCard;
