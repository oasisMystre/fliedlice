"use client";

import { MdMenu } from "react-icons/md";
import LayoutNavigation from "./LayoutNavigation";
import { useState } from "react";

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <>
      <LayoutNavigation
        show={show}
        setShow={setShow}
      />
      <div className="md:hidden">
        <button onClick={() => setShow(!show)}>
          <MdMenu />
        </button>
      </div>
    </>
  );
}
