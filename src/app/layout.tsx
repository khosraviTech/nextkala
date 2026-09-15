import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import StoreProvider from "@/storeProvider";

export const metadata: Metadata = {
  title: "NEXTKALA",
  description: "author: AmirMohammad Khosravi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="bg-bg-">
        
        <StoreProvider> 
              <div className="sticky top-0 z-50"> 
        <Header  />
        </div>  
        {children}
      </StoreProvider>
      
      </body>
    </html>
  );
}
