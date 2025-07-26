import { useState } from "react";
import AuthContainer from "../features/auth/components/AuthContainer";
import { Button } from "./Button";

const Preview = () => {
  // 1. State untuk mengontrol visibilitas form
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  // Fungsi untuk membuka form
  const handleOpenAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  // 2. Fungsi untuk menutup form, ini yang akan kita teruskan ke AuthContainer
  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className="p-10">
      <div className="flex gap-4">
        <Button label="Buka Login" onClick={() => handleOpenAuth("login")} />
        <Button label="Buka Signup" onClick={() => handleOpenAuth("signup")} />
      </div>

      {/* 3. Tampilkan AuthContainer hanya jika isAuthOpen bernilai true */}
      {isAuthOpen && (
        <AuthContainer
          authType={authType}
          onClose={handleCloseAuth}
          onAuthTypeChange={setAuthType}
        />
      )}
    </div>
  );
};

export default Preview;
