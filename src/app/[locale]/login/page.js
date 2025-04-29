'use client';
import React, { useState } from "react";
import { fetchUser, SignIn } from "@/firebase/firebaseUpload";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
function Login() {
  const [user, setUser] = useState({ mail: "", password: "" });
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const alreadyUser = await SignIn(user.mail, user.password);

      if (alreadyUser && alreadyUser.uid) {

        const userData = await fetchUser(alreadyUser.uid);
        if (userData) {
          localStorage.setItem("status", userData.status);
          localStorage.setItem("name", userData.name);
          router.push(`/position`);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };



  return (

    <div className="container d-flex flex-column align-items-center justify-content-center form-container my-4">
      <Navbar />
      <div className="h-auto login-form-width shadow p-4 my-5 bg-white rounded">
        <div className="w-100 py-3 d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-user-tie fs-1 mb-3"></i>
          <h4 className="fs-4">Zencode'a hoşgeldin</h4>
          <h6 className="fs-6 text-secondary fw-normal">Hesabına giriş yap</h6>
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label fs-6">
            Email
          </label>
          <input
            type="email"
            className="custom-input"
            id="InputEmail"
            placeholder="E-mail giriniz..."
            aria-describedby="emailHelp"
            onChange={(e) => setUser({ ...user, mail: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Parola
          </label>
          <input
            type="password"
            className="custom-input"
            id="InputPassword1"
            placeholder="Şifre giriniz..."
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <button type="button" className="primary-button" onClick={handleLogin}>
          Giriş Yap
        </button>
        <div className="form-helper-text mt-4 w-100 d-flex justify-content-center gap-2">
          <span>Hesabınız yok mu?</span>
          <a href="/register"> Hesap Oluşturun</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
