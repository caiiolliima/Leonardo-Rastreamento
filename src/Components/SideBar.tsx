const SideBar = () => {

  const links = [
    {name: "Login", href:"/"},
    {name: "Cadastro", href:"/"},
    {name: "Perfil", href:"/"},
    {name: "Logout", href:"/"},
    {name: "Meu Rastreio", href:"/"},
  ]

  return (
    <div className='shadow-lg min-w-dvh top-0 left-0'>
      <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
        <div className='flex gap-4 text-2xl items-center'>
        <img src='/src/images/logo.svg' className='w-12 h-12'/>
          <span className='font-bold'>NerdBot Rastreio</span>
        </div>
        <ul className="md:flex pl-9 md:pl-0">
          {
            links.map(link => <li className="font-semibold my-7 md:my-0 md:ml-8"><a href="/">{link.name}</a></li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;