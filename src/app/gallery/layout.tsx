// import Footer from "@/component/organisms/footer";
// import Footer from "@/components/organisms/footer";
import FooterSection from "@/components/organisms/footer/index2";
import Navbar from "@/components/organisms/navbar";


interface layoutProps {
  children: React.ReactNode;
}



export default function ChatLayout({ children }: layoutProps) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
      <FooterSection />
    </>
  );
}
