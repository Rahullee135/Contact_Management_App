import React from "react"
import Logo from "./Logo"

const Navbar = ({ setShowSideBar }) => {
  return (
    <div className="mx-auto flex flex-wrap items-center justify-between shadow-xs mr-7 ml-1 md:mr-13 md:ml-7">
      <button
        className={`w-10 block sm:hidden`}
        onClick={() => {
          setShowSideBar(prevState => {
            return !prevState
          })
        }}
      >
        <svg
          data-name="Layer 3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
        >
          <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
        </svg>
      </button>
      <Logo colour="black" />
      <ul className="flex flex-wrap items-center text-base justify-center">
      </ul>
    </div>
  )
}

export default Navbar
