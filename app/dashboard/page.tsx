// app/dashboard/page.tsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react';

async function DashboardPage() {
  // Fetch user data
  const session = await getKindeServerSession();
  const user = session.getUser();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl font-bold">Hello, you are in the dashboard</h1>
      </div>
      <LogoutLink className="bg-blue-800 p-3 rounded m-4" >LOG OUT </LogoutLink>
    </div>
  );
}

export default DashboardPage;
