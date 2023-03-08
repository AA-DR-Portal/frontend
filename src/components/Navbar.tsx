const Navbar = () => {
  return (
    <div className="fixed flex w-[100vw] min-w-screen h-[8vh] bg-cpac-black items-center space-x-8 z-10 px-10 py-4 [&>a]:text-cpac-white">
      <a href="">
        <img src="./logo.png" alt="" width={"35px"} />
      </a>

      <a href="">My Applications</a>
      <a href="">Why Us</a>
      <a href="">Expo Map</a>
      <a href="">Rules</a>

      <a
        href=""
        className="!ml-auto !mr-0 px-4 py-2 border rounded-md bg-clip-border transition-all hover:bg-cpac-white hover:text-cpac-black"
      >
        Login
      </a>
    </div>
  );
};

export { Navbar };
