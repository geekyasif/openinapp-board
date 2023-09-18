import { Suspense } from "react";
import AuthLeftSidebarPage from "../components/authentication/AuthLeftSidebarPage";
import Loading from "./loading";

export default function AuthenticationLayout({ children }) {
  return (
    <div className="flex bg-[#F8FAFF] h-screen">
      <AuthLeftSidebarPage />
      {/* <Suspense fallback={<Loading/>}> */}
      {children}
      {/* </Suspense> */}
    </div>
  );
}
