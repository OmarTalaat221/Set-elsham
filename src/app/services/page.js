import BlogFour from "~/sections/Blog/BlogFour";

import FooterTwo from "~/sections/Common/Footer/FooterTwo";
import Scroll from "~/sections/Common/Scroll";
import Breadcumb from "~/sections/About/Breadcumb";
import HeaderTwo from "~/sections/Common/Header/HeaderTwo";
import ArabicServicesPage from "~/sections/services/OurServices";
import HowServicesMade from "~/sections/services/HowServicesMade";
import MomentsFromWeddings from "~/sections/services/MomentsFromWeddings";
export default function ServicesPage() {
    return (
        <>
            {/* <HeaderTwo /> */}
            <ArabicServicesPage />
            <HowServicesMade />
            <MomentsFromWeddings />
            <FooterTwo />
        </>
    );
}
