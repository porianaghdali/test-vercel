import Services from "./homeSections/Services/Services";
import Hero from "./homeSections/Hero";
import Visions from "./homeSections/Visions";
import Instagram from "./homeSections/Instagram";
import MailForCounseling from "./homeSections/MailForCounseling";
export default function Home() {
  return (
    <>
     <div className="mx-[24px] lg:mx-[72px]">
      <Hero />
      <Visions />
      <Services />
      
      <Instagram/>
      </div>
      <MailForCounseling/>
   </>
  );
}
