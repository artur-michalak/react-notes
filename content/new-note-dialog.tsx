"use client";

import { Checkbox, Form, Input, Modal } from "antd";
import { memo, useCallback, useState } from "react";

import useEventObserver from "@/hooks/useEventObserver";
import { getNotes } from "@/server-actions";
import addNote from "@/server-actions/add-note";
import { Note } from "@/server-actions/get-notes";
import prepareItems from "@/utils/prepareItems";
import revalidate from "@/utils/revalidate";
import { useQuery } from "@tanstack/react-query";

const { TextArea } = Input;

interface AddNoteProps {
  lang: string;
}

function AddNote(props: AddNoteProps) {
  const [open, setOpen] = useState(false);
  const openNoteDialog = useCallback(() => setOpen((o) => !o), []);
  useEventObserver("add-note-open-dialog", openNoteDialog);

  const [form] = Form.useForm();

  const { refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  const handleCreate = () => {
    form.validateFields().then((values) => {
      addNote(values.note).then(() => {
        form.resetFields();
        setOpen(false);
        revalidate("notes");
        refetch();
      });
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

export default memo(AddNote);
