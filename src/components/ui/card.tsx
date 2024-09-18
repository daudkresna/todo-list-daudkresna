import React from "react";
import Icon, { IconProps } from "./icon";
import { icons } from "@/app/lib/icons";

const Card = ({
  title,
  description,
  date,
  icon,
  completed,
}: {
  title: string;
  description: string | null;
  date: Date;
  icon: IconProps["name"];
  completed: boolean;
}) => {
  const iconColor = icons.filter((i) => i.value === (icon as string));
  console.log(iconColor[0]?.color);
  return (
    <div
      className={`p-2 border-2 border-black flex flex-col ${iconColor[0]?.color} rounded-lg -rotate-6 justify-between size-[200px] shadow-2xl`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <h1
            className={`flex-1 font-semibold text-xl truncate ${
              completed ? "line-through" : ""
            }`}
          >
            {title}
          </h1>
          {completed && <Icon name="check" color="green" />}
        </div>
        <h3 className="font-light text-gray-400">
          {new Date(date).toLocaleDateString()}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-light text-gray-400 max-h-[100px] line-clamp-3">
          {description}
        </p>
        {icon && (
          <div className="w-4 h-4 mb-2">
            <Icon name={icon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
