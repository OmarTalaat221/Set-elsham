import BreadcumbSeven from "~/sections/Project/BreadcumbSeven";
import Project from "~/sections/Project/Project";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
// import HeaderTwo from "../../../../sections/Common/Header/HeaderTwo";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
export default function ProjectPage() {
  return (
    <div>
      <HeaderTwo />
      <Breadcumb pageKey="project" />
      <Project />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
