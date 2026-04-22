import Image from "next/image";
import Hello from "./components/Hello";

export default async function Home() {
  console.log("Server component it isss")

  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <div className="text-3xl">
      <code>{JSON.stringify(books, null, 2)}</code>
     
    </div>
  );
}
