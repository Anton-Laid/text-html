"use client";
import { Form, Input } from "antd";
import React, { useEffect } from "react";

import { ButtonCopy } from "@/shared/ui";
import { remakeTableConst } from "@/shared/utils/utils";
import { Result } from "../result";

interface TableConstructorProps {
  numTable: string;
  strTable: string;
  text: string;
  getData: (num: string, str: string) => void;
}

export const TableConstructor: React.FC<TableConstructorProps> = ({
  numTable,
  strTable,
  getData,
  text,
}) => {
  const [form] = Form.useForm();

  const numVal = Form.useWatch(numTable, form) || "";
  const strVal = Form.useWatch(strTable, form) || "";

  useEffect(() => {
    getData(numVal, strVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numVal, strVal]);

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        style={{ margin: "30px auto", width: "30%" }}
      >
        <Form.Item
          name={numTable}
          label={numTable}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={strTable}
          label={strTable}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>

      <Result text={text} />
      <ButtonCopy copy={text} label="" />
    </>
  );
};
