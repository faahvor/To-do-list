import React from "react"
import { FaRegMoon } from "react-icons/fa";
import TodoList from "./TodoList";



const Header=()=>{
    return(
        <div className="flex  justify-between px-5 py-4 items-center w-full bg-red-500">
          <h1 className="font-semibold text-2xl">TODO</h1>
          <FaRegMoon />
      

        </div>
    )
}
export default Header