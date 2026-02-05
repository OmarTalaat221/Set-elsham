import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import Breadcumb from "~/sections/About/Breadcumb";
import BlogDetail from "~/sections/BlogDetails/BlogFour/BlogFive";
export default function BlogDetailsPage() {
  return (
    <>
      <HeaderTwo />
      <Breadcumb pageKey="blogDetails" />
      <BlogDetail />
      <FooterTwo />
      <Scroll />
    </>
  );
}
