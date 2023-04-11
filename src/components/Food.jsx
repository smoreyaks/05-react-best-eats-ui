import React, { useState } from "react";
import { data } from "../components/Data/Data";

const Food = () => {
    console.log(data);

    const [foods, setFoods] = useState(data);

    // Filter Type Burger/Pizza/Salad/Chicken
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    // Filter By Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-4xl text-center">
                Top Rated Menu Items
            </h1>

            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Filter Type */}
                <div className="">
                    <p className="font-bold text-gray-700 pt-2">Filter Type</p>
                    <div className="flex justify-start flex-wrap w-full pt-1">
                        <button
                            onClick={() => setFoods(data)}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            All
                        </button>
                        <button
                            onClick={() => filterType("burger")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            Burgers
                        </button>
                        <button
                            onClick={() => filterType("pizza")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType("salad")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            Salads
                        </button>
                        <button
                            onClick={() => filterType("chicken")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            Chicken
                        </button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className="font-bold text-gray-700 pt-2">Filter Price</p>
                    <div className="flex justify-start max-w-[390px] w-full pt-1">
                        <button
                            onClick={() => setFoods(data)}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            Any
                        </button>
                        <button
                            onClick={() => filterPrice("$")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            $
                        </button>
                        <button
                            onClick={() => filterPrice("$$")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$$")}
                            className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* Display Foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((item, index) => (
                    <div
                        key={index}
                        className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p className="px-1">
                                <span className="bg-orange-500 text-white p-1 px-4 rounded-full w-10 font-bold">
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;
