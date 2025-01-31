import { CSSProperties } from "react";

let headerStyles: CSSProperties = {
  textAlign: "center",
  fontSize: "3rem",
  fontWeight: 550,
  padding: "0.5rem",
};

export const CourseHeader = ({ title }: { title: string }) => {
  return <div style={headerStyles}>{title}</div>;
};
