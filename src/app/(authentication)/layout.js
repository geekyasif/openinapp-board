import AuthLeftSidebarPage from "../components/authentication/AuthLeftSidebarPage";

export default function AuthenticationLayout({ children }) {
  return (
    <div className="flex bg-[#F8FAFF] h-screen">
      <AuthLeftSidebarPage />
      {children}
    </div>
  );
}
