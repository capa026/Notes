import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import PageDefaultLayout from "./PageDefaultLayout";
import { useNotes } from "../context/Tasks";
import { useNavigate } from "react-router-dom";

const Field = ({ children, title }) => {
  return (
    <div className="flex flex-col w-1/3">
      <h1 className="text-bold p-2 bg-slate-900 text-white text-center text-xl font-bold">
        {title}
      </h1>
      {children}
    </div>
  );
};
const Fill = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { createNote } = useNotes();

  const handleSetData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, link, category } = data;
    const titleArray = title.split("\n");
    const linkArray = link.split("\n");

    titleArray.forEach((title, i) => {
      createNote({
        title,
        link: linkArray[i].startsWith("https://")
          ? linkArray[i]
          : "https://" + linkArray[i],
        category,
      });
    });

    setData(null);
    navigate("/");
  };

  return (
    <PageDefaultLayout>
      <div className="flex flex-row flex-wrap justify-center items-center [&_textarea]:resize-none [&_textarea]:h-[500px] [&_textarea]:p-2 gap-10">
        <Field title="Title">
          <textarea
            name="title"
            placeholder="Title"
            onChange={(e) => handleSetData(e)}
          ></textarea>
        </Field>
        <Field title={"Link"}>
          <textarea
            name="link"
            placeholder="Link"
            onChange={(e) => handleSetData(e)}
          ></textarea>
        </Field>

        <input
          className="block w-1/2 p-2"
          type="text"
          name="category"
          placeholder="Category"
          onChange={(e) => handleSetData(e)}
        />
        <ButtonPrimary
          style="font-normal border-teal-900"
          onClick={handleSubmit}
        >
          Procesar
        </ButtonPrimary>
      </div>
    </PageDefaultLayout>
  );
};
export default Fill;
