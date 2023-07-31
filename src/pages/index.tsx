import Card from "@/Components/UI/Card";
import Category from "@/Components/UI/Category";
import RootLayout from "@/Layout/RootLayout";
import { TProducts }  from "@/Types/index";

export default function Home({products}: {products: TProducts[]}) {
  return (
    <RootLayout>
      <h1 className="text-2xl sm:text-4xl text-center p-3 sm:font-bold text-gray-50">
        Featured Products
      </h1>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        products.map((product) => (
          <Card key={product._id} product={product} />
        ))
      }
      </div>
      <Category />
    </RootLayout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    const data:TProducts[] = await res.json();
    // console.log(products)
    return {
      props: {
        products: data.slice(0, 6)
        
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
