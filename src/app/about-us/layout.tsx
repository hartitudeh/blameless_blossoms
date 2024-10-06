// import Footer from "@/component/organisms/footer";
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
    </>
  );
}
