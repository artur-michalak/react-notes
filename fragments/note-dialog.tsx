"use client";

import { Checkbox, Form, Input, Modal } from "antd";
import { memo, useEffect } from "react";

import { useDispatch, useSelector } from "@/hooks";
import { addNote, getNotes } from "@/server-actions";
import { prepareItems, revalidate } from "@/utils";
import { useQuery } from "@tanstack/react-query";

import type { Note } from "@/server-actions";
import { dialogDefault } from "@/services/redux";
const { TextArea } = Input;

interface NoteDialogProps {
  lang: string;
}

function NoteDialog(props: NoteDialogProps) {
  const [form] = Form.useForm();
  const dialog = useSelector((state) => state.dialog);
  const dispatch = useDispatch();

  const { refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: () =>
      getNotes().then((notes: Note[]) => prepareItems(notes, props.lang)),
  });

  const handleCreate = () => {
    form.validateFields().then((values) => {
      addNote(values.note, values.isTask);
      dispatch({ type: "dialog/set", payload: dialogDefault });
      form.resetFields();
      revalidate("notes");
      refetch();
    });
  };

  useEffect(() => {
    console.log(dialog)
    form.setFieldsValue({
      id: dialog.id,
      note: dialog.note,
      isTask: dialog.isTask,
    });
  }, [dialog.note, dialog.isTask, dialog.id, form]);

  return (
    <Modal
      open={dialog.note !== undefined}
      onOk={handleCreate}
      onCancel={() => dispatch({ type: "dialog/set", payload: dialogDefault })}
    >
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
