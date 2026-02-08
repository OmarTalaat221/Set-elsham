import BreadcumbSix from "~/sections/Contact/BreadcumbSix";
import ContactArea from "~/sections/Contact/ContactArea";
import ContactAreaTwo from "~/sections/Contact/ContactAreaTwo";
import ContactMap from "~/sections/Contact/ContactMap";
import Scroll from "~/sections/Common/Scroll";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Breadcumb from "~/sections/About/Breadcumb";
import ContactSix from "~/sections/Project-Details/ContactSix";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
export default function ContactPage() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderTwo />
      <Breadcumb pageKey="contact" />
      <ContactArea />
      <ContactSix />
      <ContactMap />
      <FooterTwo />
      <Scroll />
    </div>
  );
}
