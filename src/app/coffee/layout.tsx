
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
        <>
        <h2>Inner Layout items</h2>
      {children}
     
      </>
     
  );
}
