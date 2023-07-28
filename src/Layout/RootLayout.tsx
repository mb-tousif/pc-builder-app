import Navbar from "@/Components/Shared/Navbar";
import Meta from "./Meta";
import Footer from "@/Components/Shared/Footer";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

const rootStyle: React.CSSProperties = {
  minHeight: "70vh",
  background: "#6191b3",
};

export default function RootLayout({ children }: React.ComponentProps<any>) {
  return (
    <>
      <Provider store={store}>
        <Meta />
        <Navbar />
        <div style={rootStyle}>
          {children}
        </div>
        <Footer />
      </Provider>
    </>
  );
}
