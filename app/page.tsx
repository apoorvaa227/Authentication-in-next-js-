import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";



export default function Home() {
  return (
    <main className="flex  justify-center min-h-screen flex-col items-center text-center  p-24">
      <h1 className="test-3xl font-bold"> this is my auth in next</h1>
      <div className= "m-5">
        <LoginLink className="bg-blue-800 p-3 rounded m-4" >Sign in</LoginLink> 
        <RegisterLink className="bg-blue-800 p-3 rounded m-4" >Sign up</RegisterLink>

      </div>
    </main>
  );
}
