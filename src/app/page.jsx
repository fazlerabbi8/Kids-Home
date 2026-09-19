import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";

export default function Home() {
  return (
   <div className="space-y-5">
     <section>
      <Banner />
    </section>
    <section>
      <Products></Products>
    </section>
   </div>
  );
}