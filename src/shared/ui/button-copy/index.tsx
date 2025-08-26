import { CopyOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

interface ButtonCopyProps {
  copy: string;
  label: string;
}

export const ButtonCopy = (props: ButtonCopyProps) => {
  const [copiedColor, setCopiedColor] = useState(false);

  const handleCopyColor = async () => {
    try {
      await navigator.clipboard.writeText(props.copy);
      setCopiedColor(true);
      setTimeout(() => setCopiedColor(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать:", err);
    }
  };

  return (
    <Button
      icon={<CopyOutlined />}
      type="primary"
      size="large"
      onClick={handleCopyColor}
      className="border-2 p-[0.5rem] rounded-sm"
    >
      {copiedColor ? "Cкопировано" : `Скопировать ${props.label}`}
    </Button>
  );
};
