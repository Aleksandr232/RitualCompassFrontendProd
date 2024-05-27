import Header from "@/Layout/Header/Header";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <Header/>
      {children}
    </div>
  );
}
