import Header from "@/components/shared/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <body className="flex w-screen h-screen">{children}</body>
    </>


  );
}
