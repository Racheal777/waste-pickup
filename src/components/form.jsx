import React from "react";
import { Link } from "react-router-dom";

export default function FormComponent() {
  return (
    <div>
      <section className="bg-teal-800 p-6 text-center">
        <h1>Order service onliine</h1>
        <form action="" className="w-full pt-4  mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="py-3">
              <input
                type="text"
                name="firstname"
                id=""
                placeholder="Enter your location"
                className="rounded-md border border-slate-400 p-2 w-full"
              />
            </div>

            <div className="py-3">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="py-3">
            <Link to={"/signup"}>
              {" "}
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>{" "}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
