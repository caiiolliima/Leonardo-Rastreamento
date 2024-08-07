import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const SideBar = () => {

  const links = [
    {name: "Cadastro", href:"/"},
    {name: "Perfil", href:"/"},
    {name: "Logout", href:"/"},
    {name: "Meu Rastreio", href:"/"},
  ]

  const [isOpen, setisOpen] = useState(false)

  return (
    <div className='shadow-lg w-screen top-0 left-0'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
        <div className='flex gap-4 text-2xl items-center'>
        <img src='/src/images/logo.svg' className='w-12 h-12'/>
          <span className='font-bold'>NerdBot Rastreio</span>
        </div>

        <div  onClick={() => setisOpen(!isOpen)} className={`w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden`}>
          {
            isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>

        <ul className="md:flex pl-9 md:pl-0">
          {
            links.map(link => <li className="font-semibold my-7 md:my-0 md:ml-8"><a href="/">{link.name}</a></li>)
          }

          <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static">Login</button>

        </ul>
      </div>
    </div>
  );
};

export default SideBar;