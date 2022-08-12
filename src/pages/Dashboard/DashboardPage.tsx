import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";
import { greenChart, orangeBar, pinkBar, whiteChart } from "../../assets";
import { DashCard, LineChart } from "../../components";

type ICards = {
  title: string;
  amount: number;
  image: string;
}[];

const DashboardPage = () => {
  const cards: ICards = [
    {
      title: "Daily Income",
      amount: 345,
      image: whiteChart,
    },
    {
      title: "Daily Expense",
      amount: 380,
      image: pinkBar,
    },
    {
      title: "Weekly Income",
      amount: 5340,
      image: greenChart,
    },
    {
      title: "Weekly Expense",
      amount: 4320,
      image: orangeBar,
    },
  ];

  const products = [
    {
      id: 1,
      title: "PSG Stagium 20/21",
      variants: 3,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      sku: "8600844",
      category: "Jerseys",
      created_at: "12.11.2020",
      status: "published",
    },
    {
      id: 2,
      title: "Los Angeles lakers City",
      variants: 5,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      sku: "8608647",
      category: "Jerseys",
      created_at: "12.11.2020",
      status: "pending",
    },
    {
      id: 3,
      title: "Miami Heat Courtside",
      variants: 4,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      sku: "8609824",
      category: "Outwear",
      created_at: "10.11.2020",
      status: "published",
    },
    {
      id: 4,
      title: "Liverpool FC 20/21 Stadium",
      variants: 3,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      sku: "8609474",
      category: "Jerseys",
      created_at: "07.11.2020",
      status: "published",
    },
  ];

  return (
    <div className="text-xl font-bold">
      <div className="rounded-md bg-white dark:bg-slate-800 shadow-md">
        <div className="flex flex-row items-center justify-between px-5 py-3 border-b border-b-slate-100">
          <p className="text-lg dark:text-white">Sales Overview</p>
          <button className="flex flex-row items-center bg-gradient-to-r from-primary_blue_l to-primary_d py-2 px-5 rounded-lg border-none">
            <AiOutlinePlus className="text-white" />
            <p className="ml-4 text-sm text-white font-serif">Add Offer</p>
          </button>
        </div>
        <div className="p-5">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <p className="text-3xl dark:text-white">$80,630</p>
              <div className="w-6 h-6 rounded-full bg-green_l dark:bg-green_d ml-5 mr-2 flex flex-row items-center justify-center">
                <AiOutlineArrowUp className="text-green_d text-xs dark:text-white" />
              </div>
              <p className="text-sm text-green_d">+6.7%</p>
            </div>
            <div className="flex items-start flex-col md:flex-row md:items-center">
              <div className="flex flex-row items-center mx-2">
                <div className="w-2 h-2 mr-2 bg-primary_d rounded-full" />
                <p className="text-sm text-text_gray">Incomes</p>
              </div>
              <div className="flex flex-row items-center mx-2 md:mr-10">
                <div className="w-2 h-2 mr-2 bg-purple_d rounded-full" />
                <p className="text-sm text-text_gray">Expenses</p>
              </div>
              <select className="text-base bg-transparent border border-text_gray text-black dark:text-white px-2 py-1 rounded-md">
                <option className="text-sm text-black">Year</option>
                <option className="text-sm text-black">Monthly</option>
                <option className="text-sm text-black">Weekly</option>
                <option className="text-sm text-black">Daily</option>
              </select>
            </div>
          </div>
          <LineChart />
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-4">
        {cards.map((card, _idx) => (
          <DashCard key={card.title} card={card} />
        ))}
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="rounded-md shadow-md w-full md:w-1/3 md:mr-5 bg-white dark:text-white dark:bg-slate-800 p-7">
          <p className="text-sm">Top Selling Categories</p>
          {/* <img src={mainChart} alt="" className='w-full h-full dark:hidden' /> */}
        </div>
        <div className="w-full md:w-2/3 rounded-md shadow-md bg-white dark:text-white dark:bg-slate-800 p-7">
          <p className="text-sm ">Latest Added Products</p>
          <div className="my-10">
            <table className="w-full text-sm font-normal table-auto">
              <tbody>
                {products.map((product, _idx) => (
                  <tr className="my-3" key={product.id}>
                    <td className="text-left py-2">
                      <div className="flex flex-row">
                        <img
                          src={product.image}
                          alt="product_image"
                          className="w-10 h-10 rounded-sm"
                        />
                        <div className="ml-4">
                          <p className="text-sm font-semibold">
                            {product.title}
                          </p>
                          <p className="text-xs text-text_gray">
                            {product.variants} variants
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <span className="text-text_gray uppercase mr-1">
                        SKU:
                      </span>
                      <span className="font-normal">{product.sku}</span>
                    </td>
                    <td className="text-left capitalize">{product.category}</td>
                    <td className="text-left">{product.created_at}</td>
                    <td className="text-left">
                      <div
                        className={`capitalize w-fit font-semibold ${
                          product.status === "published"
                            ? "bg-green_l text-green_d"
                            : product.status === "pending"
                            ? "bg-orange_l text-orange_d"
                            : "bg-text_gray text-slate-800"
                        } rounded-full px-3 py-1`}
                      >
                        {product.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
