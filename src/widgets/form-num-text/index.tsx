"use client";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, Tag } from "antd";
import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";
import { ResultText } from "../result-text";

type RequiredMark = boolean | "optional" | "customize";

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean }
) => (
  <>
    {required ? (
      <Tag color="error">Required</Tag>
    ) : (
      <Tag color="warning">optional</Tag>
    )}
    {label}
  </>
);

interface FormNumStrProps {
  img: StaticImageData;
  description: string;
  labelNumInp: string;
  labelStrInp: string;
  text: string;
  getData: (str: string, num: number) => void;
}

export const FormNumStr = ({
  img,
  description,
  labelNumInp,
  labelStrInp,
  text,
  getData,
}: FormNumStrProps) => {
  const [textarea, setTextarea] = useState<string>("");
  const [numberScr, setNumberScr] = useState<number>(0);

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  useEffect(() => {
    getData(textarea, numberScr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textarea, numberScr]);

  return (
    <form>
      <div className="w-full flex flex-col gap-10 items-center mt-[2rem]">
        <Image alt="img" src={img} />
        <p>{description}</p>

        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={
            requiredMark === "customize" ? customizeRequiredMark : requiredMark
          }
        >
          <Form.Item label={labelNumInp} required tooltip="Цифра шага">
            <Input
              placeholder="номер шага"
              onChange={(e) => setNumberScr(+e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label={labelStrInp}
            required
            tooltip={{
              title: "Впишите текст шага",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input
              placeholder="текст"
              onChange={(e) => setTextarea(e.target.value)}
            />
          </Form.Item>
        </Form>
        <ResultText text={text} />
      </div>
    </form>
  );
};
