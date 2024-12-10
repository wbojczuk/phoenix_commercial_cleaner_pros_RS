import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs";
import Discount from "@/app/(mainsite)/components/homepage/Discount/Discount";
import Discount2 from "@/app/(mainsite)/components/homepage/Discount2/Discount2";
import Handle from "@/app/(mainsite)/components/homepage/Handle/Handle";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import HorizontalFreeQuoteForm from "@/app/(mainsite)/components/homepage/HorizontalFreeQuoteForm/HorizontalFreeQuoteForm";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";


export default function Home() {
  return (
    <>
      <Header />
      <HorizontalFreeQuoteForm />
      <AboutUs />
      <Discount />
      <StatsRibbon />
      <Services />
      <Discount2 />
      <ServiceArea />
      <Handle />
    </>
  )
}
