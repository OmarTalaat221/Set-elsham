import BreadcumbEight from "~/sections/Project-Details/BreadcumbEight";
import ContactSix from "~/sections/Project-Details/ContactSix";
import ProjectDetails from "~/sections/Project-Details/ProjectDetails";

import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Breadcumb from "~/sections/About/Breadcumb";
export default function ProjectDetailsPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderTwo />
      <Breadcumb pageKey="projectDetails" />
      <ProjectDetails />
      <ContactSix />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
