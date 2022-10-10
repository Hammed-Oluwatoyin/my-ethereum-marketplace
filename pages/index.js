import { Navbar, Footer, Hero, Breadcrumbs } from "@components/common";
import { EthRates, WalletBar } from "@components/web3";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          {/*------ NAVBAR STARTS ------*/}
          <Navbar />
          {/*------ NAVBAR ENDS ------*/}
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />

            {/*------ ORDER INFO ENDS ------*/}
            <OrderCard />
            {/*------ COURSE CARD STARTS ------*/}
            <CourseList />
            {/*------ COURSE CARD ENDS ------*/}
          </div>
        </div>
        {/*------ FOOTER STARTS ------*/}
        <Footer />
        {/*------ FOOTER ENDS ------*/}
      </div>
    </div>
  );
}
