import BlogFour from "~/sections/Blog/BlogFour";
import HeaderOne from "~/sections/Common/Header/HeaderOne";
import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
export default function BlogPage() {
  return (
    <>
      <HeaderTwo />
      <Breadcumb pageKey="blog" />
      <BlogFour />
      <FooterTwo />
      <Scroll />
    </>
  );
}
