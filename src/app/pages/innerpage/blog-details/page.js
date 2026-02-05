import BlogFive from "~/sections/BlogDetails/BlogFour/BlogFive";
import BreadcumbThree from "~/sections/BlogDetails/BreadcumbThree";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Breadcumb from "~/sections/About/Breadcumb";
export default function BlogDetailsPage() {
  return (
    <>
      <HeaderTwo />
      <Breadcumb title="Blog Details" />
      <BlogFive />
      <FooterTwo />
      <Scroll />
    </>
  );
}
