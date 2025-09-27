import { useState } from "react";
import suggestedEx from "../db/data.json";
import ExtensionCard from "./ExtensionCard";

export default function ExtenstionsList() {
  const [list, setList] = useState(suggestedEx);
  const [activeMenu, setActiveMenu] = useState("All");

  const onToggle = (name: string) => {
    const updateToggle = list.map((item) =>
      item.name === name ? { ...item, isActive: !item.isActive } : item
    );
    setList(updateToggle);
  };

  const AllList = () => {
    setList(suggestedEx);
    setActiveMenu("All");
  };
  const FilterActive = () => {
    setList(suggestedEx.filter((item) => item.isActive));
    setActiveMenu("Active");
  };
  const FilterInactive = () => {
    setList(suggestedEx.filter((item) => !item.isActive));
    setActiveMenu("Inactive");
  };

  const menu = [
    { id: 1, title: "All", action: AllList },
    { id: 2, title: "Active", action: FilterActive },
    { id: 3, title: "Inactive", action: FilterInactive },
  ];

  return (
    <div className="my-8 py-6">
      <div className="mb-8 flex justify-between">
        <h1 className="text-3xl font-bold">Suggested Extensions</h1>
        <ul className="flex gap-2">
          {menu.map((item) => (
            <button
              className={`py-1.5 px-4 btn hover-btn focus-btn ${
                activeMenu === item.title && "active-btn"
              }`}
              onClick={item.action}
            >
              {item.title}
            </button>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list &&
          list.map((item, idx) => (
            <ExtensionCard key={idx} item={item} onToggle={onToggle} />
          ))}
      </div>
    </div>
  );
}
