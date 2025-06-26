import React from "react";
import ItemModel from "./ItemModel";

interface TaskItemProps {
  title: string;
  status: "todo" | "progressing" | "done";
  itemId: string;
}

const statusColors: Record<string, string> = {
  todo: "bg-red-500",
  progressing: "bg-yellow-400",
  done: "bg-green-500",
};

export const TaskItem: React.FC<TaskItemProps> = ({
  title,
  status,
  itemId,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div
        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className={`w-3 h-3 rounded-full ${statusColors[status]}`}></span>
        <p className="text-gray-800 font-medium">{title}</p>
      </div>

      <ItemModel
        isOpen={isOpen}
        onClose={handleClose}
        title={title}
        status={status}
        itemId={itemId}
      />
    </>
  );
};
