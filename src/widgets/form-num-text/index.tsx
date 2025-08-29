"use client";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, Tag } from "antd";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { ButtonCopy } from "@/shared/ui";
import { Result } from "../result";

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
  placeholderOne: string;
  placeholderTwo: string;
  labelStrInp: string;
  text: string;
  getData: (str: string, num: number) => void;
  tooltip?: string;
}

export const FormNumStr = ({
  img,
  description,
  labelNumInp,
  labelStrInp,
  placeholderOne,
  placeholderTwo,
  text,
  getData,
  tooltip,
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
    <div className="w-full flex flex-col gap-10 items-center mt-[2rem]">
      <Image alt="img" src={img} priority />
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
        <Form.Item label={labelNumInp} required tooltip={tooltip}>
          <Input
            placeholder={placeholderOne}
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
            placeholder={placeholderTwo}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </Form.Item>
      </Form>
      <Result text={text} />
      <ButtonCopy copy={text} label="" />
    </div>
  );
};
