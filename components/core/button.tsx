import { useEffect, useState } from "react";
interface props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "success" | "secondary" | "warning" | "danger" | "";
  loading?: boolean;
}
const Button = (props: props) => {
  const [color, setColor] = useState("");
  const [h, setH] = useState("");
  useEffect(() => {
    switch (props.size) {
      case "sm":
        setH("h-6");
        break;
      case "md":
        setH("h-8");
        break;
      case "lg":
        setH("h-10");
        break;
      case "xl":
        setH("h-12");
        break;
      default:
        setH("h-8");
    }
    switch (props.color) {
      case "success":
        setColor("bg-lime text-black/60 transition-colors");
        break;
      case "secondary":
        setColor("bg-purple hover:bg-purple/80 transition-colors");
        break;
      case "warning":
        setColor("bg-yellow-500 hover:bg-yellow-500/80 transition-colors");
        break;
      case "danger":
        setColor("bg-danger hover:bg-danger/80 transition-colors");
        break;
      default:
        setColor("bg-blue hover:bg-blue/80");
    }
  }, [color, props]);
  return (
    <button
      onClick={props.onClick}
      disabled={props.loading}
      className={`${h} flex justify-center items-center gap-2 p-2 px-4 font-semibold rounded-lg focus:outline-none duration-300 ${color} ${props.className} disabled:bg-gray-500 disabled:hover:bg-gray-500/80`}
    >
      {props.children}
    </button>
  );
};
export default Button;
