import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import Modal from "../Modal/Modal";
import PageDefaultLayout from "../PageDefaultLayout";
import { Plus, Settings } from "lucide-react";
import SideBarConfig from "./SideBarConfig";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="sticky top-0 left-0 w-full bg-slate-900 text-slate-50 p-2 shadow-lg shadow-slate-500">
        <PageDefaultLayout styles="flex justify-between items-center ">
          <h1 className="text-2xl font-mono underline decoration-cyan-500 cursor-pointer select-none hover:text-gray-400 hover:decoration-cyan-800">
            <Link to="/">NotesApp</Link>
          </h1>
          <ButtonPrimary onClick={handleClick}>
            <Plus />
          </ButtonPrimary>
          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <Settings />
          </div>
        </PageDefaultLayout>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />

      <SideBarConfig
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    </>
  );
};
export default Navbar;
