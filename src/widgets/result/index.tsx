"use client";

import { EditOutlined } from "@ant-design/icons";
import { Menu } from "antd";

interface ResultProps {
  text: string;
}

export const Result = (text: ResultProps) => {
  console.log(text.text);

  return (
    <Menu
      style={{ width: "100%" }}
      mode="inline"
      defaultOpenKeys={["parent-1"]}
      triggerSubMenuAction="click"
    >
      <Menu.SubMenu
        key="parent-1"
        title="Посомтреть данные"
        icon={<EditOutlined />}
      >
        <Menu.Item
          key="child-1"
          style={{
            width: "100%",
            height: "fit-content",
            display: "block",
            paddingTop: 8,
            paddingBottom: 8,
            lineHeight: "normal",
          }}
        >
          {text.text}
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};
