import Category from "@/Components/UI/Category";
import RootLayout from "@/Layout/RootLayout";

export default function Home() {
  return (
    <RootLayout>
        <h1 className="text-2xl text-center">PC Builder Ltd</h1>
        <Category />
    </RootLayout>
  );
}
