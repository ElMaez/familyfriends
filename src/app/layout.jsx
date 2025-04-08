import "./globals.css";
import Header from "@/components/(global)/Header";
import Menu from "@/components/(global)/Menu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className=" bg-amber-50 pl-4">
        <Header></Header>
        {children}
        <Menu></Menu>
      </body>
    </html>
  );
}
