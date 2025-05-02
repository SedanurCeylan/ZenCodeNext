import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import emailjs from "@emailjs/browser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "./firebase";

export const uploadJobs = async (job) => {
  try {
    const jobsCollection = collection(db, "job");

    if (job.id) {
      const jobRef = doc(db, "job", job.id);
      const { id, ...jobData } = job;
      await setDoc(jobRef, jobData, { merge: true });
      console.log("İlan güncellendi!");
    } else {
      await addDoc(jobsCollection, job);
      console.log("Yeni ilan eklendi!");
    }
  } catch (error) {
    console.error("İlan yüklenirken hata:", error);
  }
};

export const deleteJob = async (id) => {
  try {
    const jobDoc = doc(db, "job", id);
    await deleteDoc(jobDoc);
    console.log("İlan başarıyla silindi!");
  } catch (error) {
    console.error("Silme işlemi sırasında hata oluştu:", error);
  }
};

export const uploadUser = async (user, id) => {
  try {
    const userRef = doc(db, "users", id);

    await setDoc(userRef, user);

    console.log("Kullanıcı başarıyla eklendi!");
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const fetchPosition = async (id) => {
  try {
    const docRef = doc(db, "job", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
};

export const fetchApplications = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "jobApplications"));
    const applications = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return applications;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};

export const fetchUser = async (id) => {
  try {
    console.log("Fetching user with ID:", id);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Belirtilen ID ile kullanıcı bulunamadı.");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
};

export const uploadJobForm = async (job) => {
  try {
    const jobsCollection = collection(db, "jobApplications");

    await addDoc(jobsCollection, job);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const createQuestionDistribution = async (questionDistribution) => {
  try {
    const jobsCollection = collection(db, "questionDistributions");

    await addDoc(jobsCollection, questionDistribution);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const updateApplicationStatus = async (id, status, email, name) => {
  try {
    const applicationRef = doc(db, "jobApplications", id);
    await updateDoc(applicationRef, { status: status });

    if (status === "Test Aşamasında") {
      sendEmail(email, status, name, id);
    }
  } catch (error) {
    console.error("Durum güncelleme hatası:", error);
  }
};

export const testApplicationStatus = async (id, isSuccessful) => {
  try {
    const applicationRef = doc(db, "jobApplications", id);
    await updateDoc(applicationRef, {
      status: isSuccessful ? "Başarılı" : "Başarısız",
    });
  } catch (error) {
    console.error("Durum güncelleme hatası:", error);
  }
};
const sendEmail = (email, status, name, id) => {
  const templateParams = {
    user_id: String(id),
    user_email: email,
    user_name: name,
    status: status,
  };

  emailjs
    .send(
      "service_jj9bmas",
      "template_tezccql",
      templateParams,
      "EYT-ulWdaGXtFdUJ6"
    )
    .catch((error) => {
      console.error("Email Error:", error);
    });
};

export const fetchApplicationById = async (id) => {
  try {
    const docRef = doc(db, "jobApplications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("Başvuru bulunamadı!");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
};

export const fetchQuestionType = async (userId) => {
  try {
    const q = query(
      collection(db, "questionDistributions"),
      where("id", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    const applications = [];

    querySnapshot.forEach((doc) => {
      applications.push({ id: doc.id, ...doc.data() });
    });

    return applications;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};

export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const SignIn = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Kullanıcı giriş yaptı:", userCredential.user);
    return { uid: userCredential.user.uid, email: userCredential.user.email };
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};
