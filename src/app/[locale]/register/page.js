'use client';
import React, { useState } from "react";
import { uploadUser,registerUser, SignIn } from "@/firebase/firebaseUpload";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
function Register() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    mail: "",
    password: "",
    status: "user",
  });
  const router = useRouter();
  const handleRegister = async () => {
    try {
      const ruser = await registerUser(user.mail, user.password);

      if (!ruser || !ruser.uid) {
        throw new Error("Kullanıcı verisi geçersiz, localId bulunamadı.");
      }

      await uploadUser(user, ruser.uid);
      router.push(`/login`);
    } catch (error) {
      console.error("Hata oluştu:", error.message);
    }
  };



  return (
    <div className="container d-flex flex-column align-items-center justify-content-center form-container py-5">
      <Navbar />
      <div className="h-auto login-form-width shadow p-4 my-5 bg-white rounded">
        <div className="w-100 py-3 d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-user-tie fs-1 mb-3"></i>
          <h4 className="fs-4">Zencode'a hoşgeldin</h4>
          <h6 className="fs-6 text-secondary fw-normal">Yeni hesap oluştur</h6>
        </div>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label fs-6">
            Ad
          </label>
          <input
            type="text"
            className="custom-input"
            id="InputName"
            placeholder="Ad giriniz..."
            aria-describedby="nameHelp"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label fs-6">
            Soyad
          </label>
          <input
            type="text"
            className="custom-input"
            id="InputSurname"
            placeholder="Soyad giriniz..."
            aria-describedby="surnameHelp"
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
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

        <button onClick={handleRegister} className="primary-button">
          Kayıt Ol
        </button>
        <div className="form-helper-text mt-4 w-100 d-flex justify-content-center gap-2">
          <span>Zaten bir hesabınız var mı?</span>
          <a href="/login"> Giriş yap</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
