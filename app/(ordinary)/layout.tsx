import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}
