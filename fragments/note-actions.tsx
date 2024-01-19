'use client'

import { useDispatch } from "@/hooks";
import { FaPencil, FaTrash } from "react-icons/fa6";

interface NoteActionsProps {
    note: string,
    isTask: boolean,
    id?: string
}


function NoteActions({note, isTask, id}: NoteActionsProps) {
    const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => dispatch({
            type: "dialog/set",
            payload: {
              note,
              isTask,
              id
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
