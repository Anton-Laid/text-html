"use client";

interface ResultProps {
  text: string;
}

export const Result = ({ text }: ResultProps) => {
  return (
    <p className="w-full bg-indigo-300 rounded-[12px] text-center p-[5px] text-white overflow-hidden">
      {text}
    </p>
  );
};

// const items: MenuProps["items"] = [
//   {
//     key: "parent-1",
//     icon: <EditOutlined />,
//     label: "Посмотреть данные",
//     children: [
//       {
//         key: "child-1",
//         label: (
//           <div
//             style={{
//               width: "100%",
//               height: "fit-content",
//               paddingTop: 8,
//               paddingBottom: 8,
//               lineHeight: "normal",
//               whiteSpace: "normal",
//               wordBreak: "break-word",
//               boxSizing: "border-box",
//             }}
//           >
//             {text}
//           </div>
//         ),
//       },
//     ],
//   },
// ];

// <Menu
//   style={{ width: 250 }}
//   mode="inline"
//   defaultOpenKeys={["parent-1"]}
//   items={items}
//   triggerSubMenuAction="click"
// />
