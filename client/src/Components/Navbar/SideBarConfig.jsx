const SideBarConfig = ({ openSidebar, setOpenSidebar }) => {
  const handleClose = (e) => {
    if (e.target.classList[0]) setOpenSidebar(false);
  };
  return (
    <div
      className={`sidebar--back fixed h-full right-0 top-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm ${
        openSidebar ? "w-full" : "w-0"
      } transition-all duration-200 select-none`}
      onClick={(e) => handleClose(e)}
    >
      <div
        className={`fixed ${
          openSidebar ? "right-0" : "right-[-500px]"
        } w-48 h-full bg-slate-800 transition-all duration-300 text-white p-2 shadow-md`}
      >
        SideBarConfi
      </div>
    </div>
  );
};
export default SideBarConfig;
