'use client'

import { useDispatch } from "@/hooks";
import { FaPencil, FaTrash } from "react-icons/fa6";

function NoteActions() {
    const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => dispatch({
            type: "dialog/set",
            payload: {
              note: "edit",
              isTask: false
            },
          })}>
        <FaPencil />
      </button>
      <button>
        <FaTrash />
      </button>
    </div>
  );
}

export default NoteActions;
