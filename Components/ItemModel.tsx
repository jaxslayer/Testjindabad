// src/components/ItemModel.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { itemSchema } from "@/schemas";

const ItemModel: React.FC<itemSchema> = ({
  isOpen,
  onClose,
  itemId,
  status,
  title,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", keyDownHandler);
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={divRef}
        className="bg-white rounded-lg w-full max-w-md min-h-[200px] max-h-[80vh] overflow-y-auto shadow-xl p-6"
      >
        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-gray-500 hover:text-gray-800 text-2xl font-medium focus:outline-none"
          >
            ×
          </button>
        </div>
        <div className="py-4 text-gray-700">
          <p>
            <strong>Item ID:</strong> {itemId}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-end">
          <button
            onClick={() => {
              onClose();
            }}
            className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition-colors focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModel;
