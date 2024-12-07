import React from "react";
import { FaTrash, FaArchive } from "react-icons/fa";
import { showFormattedDate } from "../utils/datas";

function ActiveNoteItem({ id, title, body, createdAt, onDelete, onArsip }) {
  return (
    <>
      <div className="relative max-lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] hover:shadow-lg transition-transform duration-300">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-xs font-extralight tracking-tight text-gray-950 max-lg:text-center">
              {showFormattedDate(createdAt)}
            </p>
            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
              {title}
            </p>
            <p className="mt-2 mb-4 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              {body}
            </p>
            {/* Tombol Ikon */}
            <div className="flex justify-center gap-4 mt-4 mb-4">
              {/* Tombol Delete */}
              <button
                onClick={() => onDelete(id)}
                className="text-gray-950"
                aria-label="Delete"
              >
                <FaTrash size={24} />
              </button>
              {/* Tombol Arsipkan */}
              <button
                onClick={() => onArsip(id)}
                className="text-gray-950 "
                aria-label="Arsipkan"
              >
                <FaArchive size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
    </>
  );
}

export default ActiveNoteItem;
