import Navbar from "@/Components/Navbar";
 
 
const getData=async()=>{
  let category =(await(await fetch('http://localhost:3000/api/category')).json()).data
  return category
}   
export default async function Page() {
  const data = await getData()
  return (
 
          <div className="">
            <Navbar data={data}/>
            all is wll
          </div>
           
 
  );
}
