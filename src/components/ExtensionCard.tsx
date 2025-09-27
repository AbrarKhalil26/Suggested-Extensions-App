import { Card, ToggleSwitch } from "flowbite-react";
import type { IExtension } from "../interface/extension.interface";

export default function ExtensionCard({
  item,
  onToggle,
}: {
  item: IExtension;
  onToggle: (name: string) => void;
}) {
  const { logo, name, description, isActive } = item;

  return (
    <Card>
      <div className="flex gap-3 mb-5 items-start">
        <img src={logo} alt={name} />
        <div>
          <h3 className="text-xl font-semibold mb-3">{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="py-1.5 px-4 btn hover-btn focus-btn text-sm">
          Remove
        </button>
        <ToggleSwitch
          checked={isActive}
          onChange={() => onToggle(name)}
          color="red"
        />
      </div>
    </Card>
  );
}
