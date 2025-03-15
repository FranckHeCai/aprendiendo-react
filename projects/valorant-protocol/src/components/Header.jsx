const Header = () => {
  return (
    <div className="py-2 px-5 bg-neutral-800 text-red-400 font-[VALORANT] border-b-2  w-full fixed top-0 left-0 flex justify-between items-center">
      <img src="/valorant-icon.svg" alt="valorant logo" />
      <a href="/">
        <h2 className=" text-3xl" >Valorant Protocol</h2>
      </a>
      <p>more</p>
    </div>
  );
};

export default Header;