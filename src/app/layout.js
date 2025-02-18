 
import Navbar from "@/Components/Navbar";
import "./globals.css";

 
const getData=async()=>{
  let category =(await(await fetch('http://localhost:3000/api/category')).json()).data
  return category
}  

export default async function RootLayout({ children }) {
  let data = await getData()
  return (
    <html lang="en">
      <body>
        <Navbar data={data}/> 
        {children}
      </body>
    </html>
  );
}
