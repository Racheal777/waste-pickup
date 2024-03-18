import React from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world Homepage!</h1>

        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
