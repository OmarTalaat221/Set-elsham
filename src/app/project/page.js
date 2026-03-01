// app/[locale]/project/page.jsx
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import Breadcumb from "~/sections/About/Breadcumb";
import ProjectCategories from "~/sections/ProjectCategories";

export const metadata = {
  title: "Our Projects | Company Name",
  description: "Explore our projects across different categories",
};

export default function ProjectsPage() {
  return (
    <div>
      <HeaderTwo />
      <Breadcumb pageKey="projects" />
      <ProjectCategories />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
