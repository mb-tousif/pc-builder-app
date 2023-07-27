import Image from "next/image";
import logo from "@/assets/logo.png";

const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
  color: "#fff",
};
export default function Footer() {
  return (
    <div style={footerStyle} className="bg-neutral-700">
      <div className="flex justify-center">
        <Image src={logo} alt="PC Builder" width={100} height={100} />
      </div>
      <p>All right reserved & Copyright &#169; {new Date().getFullYear()}.</p>
    </div>
  );
}
