"use client";

import { Checkbox, Form, Input, Modal } from "antd";
import { memo, useCallback, useState } from "react";

import useEventObserver from "@/hooks/useEventObserver";
import { addNote, getNotes } from "@/server-actions";
import { prepareItems, revalidate } from "@/utils";
import { useQuery } from "@tanstack/react-query";

import type { Note } from "@/server-actions";
const { TextArea } = Input;

interface NoteDialogProps {
  lang: string;
}

function NoteDialog(props: NoteDialogProps) {
  const [open, setOpen] = useState(false);
  const openNoteDialog = useCallback(() => setOpen(true), []);
  useEventObserver("add-note-open-dialog", openNoteDialog);

  const [form] = Form.useForm();

  const { refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  const handleCreate = () => {
    form.validateFields().then((values) => {
      addNote(values.note);
      form.resetFields();
      setOpen(false);
      revalidate("notes");
      refetch();
    });
  };

  return (
    <Modal open={open} onOk={handleCreate} onCancel={() => setOpen(false)}>
      <Form form={form}>
        <h2 className="text-2xl">New note</h2>
        <Form.Item
          label="Note"
          name="note"
          hasFeedback
          rules={[{ required: true, message: "enter your message" }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item label="Is a task" name="isTask" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(NoteDialog);
