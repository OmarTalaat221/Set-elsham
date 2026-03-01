// app/[locale]/project/[category]/page.jsx
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import Breadcumb from "~/sections/About/Breadcumb";
import CategoryProjects from "~/sections/CategoryProjects";

// Generate static params for all categories
export async function generateStaticParams() {
  return [
    { category: "furniture-antique" },
    { category: "fitout" },
    { category: "upgrade" },
    { category: "new-build" },
  ];
}

export default async function CategoryPage({ params }) {
  // ✅ In Next.js 15, params is a Promise
  const { category } = await params;

  return (
    <div>
      <HeaderTwo />
      <Breadcumb pageKey={`projects`} />
      <CategoryProjects category={category} />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
