const SideBar = () => {

  const links = [
    {name: "Login", href:"/"},
    {name: "Cadastro", href:"/"},
    {name: "Perfil", href:"/"},
    {name: "Logout", href:"/"},
    {name: "Meu Rastreio", href:"/"},
  ]

  return (
    <div className='shadow-lg min-w-dvh'>
      <div className='md:px-10 py-4 px-7'>
        <div className='flex gap-4 text-2xl items-center'>
        <img src='/src/images/logo.svg' className='w-12 h-12'/>
          <span className='font-bold'>NerdBot Rastreio</span>
        </div>
        <ul>
          {
            links.map(link => <li><a href="/">{link.name}</a></li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;