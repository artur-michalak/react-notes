"use client";

import { Form, Input, Modal, Checkbox } from "antd";
import { memo, useCallback, useState } from "react";

import useEventObserver from "@/hooks/useEventObserver";

const { TextArea } = Input;

function AddNote() {
  const [open, setOpen] = useState(false);
  const addNote = useCallback(() => setOpen((o) => !o), []);
  useEventObserver("add-note-open-dialog", addNote);

  const [form] = Form.useForm();

  const handleCreate = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      console.log(values);
      setOpen(false);
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
