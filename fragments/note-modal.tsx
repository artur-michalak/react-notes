"use client";

import { Modal } from 'antd';
import { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { deleteNote, getNotes } from '@/server-actions';
import { modalDefault } from '@/services/redux';
import { prepareItems, revalidate } from '@/utils';
import { useQuery } from '@tanstack/react-query';

import type { Note } from "@/server-actions";
interface NoteModalProps {
  lang: string;
}

function NoteModal(props: NoteModalProps) {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [note, setNote] = useState<typeof modal>();

  const { refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  useEffect(() => {
    setNote(modal);
  }, [modal.note, modal.id, modal]);

  const handleDelete = () => {
    if (!note?.id) return;
    deleteNote(note.id);
    dispatch({ type: "modal/set", payload: modalDefault });
    revalidate("notes");
    refetch();
  };

  return (
    <Modal
      open={!!modal.id}
      onOk={handleDelete}
      onCancel={() => dispatch({ type: "modal/set", payload: modalDefault })}
    >
      Czy napewno usunąć notatkę?
    </Modal>
  );
}

export default memo(NoteModal);
