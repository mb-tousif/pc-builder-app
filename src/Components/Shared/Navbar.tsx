import Link from "next/link";

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
  };

const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "PC Builder",
      route: "/pc-builder",
    },
    {
      page: "Login",
      route: "/login",
    },
  ];
export default function Navbar() {
  return (
    <div style={headerStyle} className="bg-neutral-700">
      {paths.map((path, index) => (
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0px 10px",
          }}
          key={index + 1}
          href={path.route}
        >
          {path.page}
        </Link>
      ))}
    </div>
  )
}
