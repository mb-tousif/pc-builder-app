import Navbar from "@/Components/Shared/Navbar"
import Meta from "./Meta"
import Footer from "@/Components/Shared/Footer"

const rootStyle:React.CSSProperties = {
    minHeight: '70vh',
    background: "#6191b3"
  }
  
  export default function RootLayout({ children }: React.ComponentProps<any>) {
    return (
      <>
      <Meta />
      <Navbar />
      <div style={rootStyle} className="bg-[#6191b3]">
      { children }
      </div>
      <Footer />
      </>
    )
  }
