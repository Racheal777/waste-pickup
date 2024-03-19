import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import FormComponent from "../components/form";
import Footer from "../components/footer";
import Services from "../components/services";

export default function Home() {
  return (
    <div>
      
      <main className="mt-8">
      <header>
        <Navbar />
      </header>
        <h1 className=" text-3xl font-bold underline">
          Hello world Homepage!
        </h1>

        <section>
          <FormComponent />
        </section>

        <section>
            <Services/>
        </section>
        <section>
          <Outlet />
        </section>


        <footer>
            <Footer/>
        </footer>
      </main>
    </div>
  );
}
