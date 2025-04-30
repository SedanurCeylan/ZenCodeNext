'use client';

import React, { useEffect } from "react";
import {
  fetchApplications,
  updateApplicationStatus,
  fetchApplicationById,
} from "@/firebase/firebaseUpload";
import Navbar from "@/components/Navbar";
import { useApplicationsStore } from "@/store/applicationsStore";
import { useAppDetailStore } from '@/store/appDetailStore';



function Applications() {
  const {
    applications,
    setApplications,
    selectedApplication,
    setSelectedApplication
  } = useAppDetailStore();


  useEffect(() => {
    const getApplications = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };
    getApplications();
  }, [setApplications]);

  const handleViewDetails = async (id) => {
    const data = await fetchApplicationById(id);
    setSelectedApplication(data);

    const modal = new bootstrap.Modal(document.getElementById('applicationModal'));
    modal.show();
  };


  return (
    <div className="container form-container">
      <Navbar />
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>E-Mail</th>
            <th>Pozisyon</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={application.id}>
              <th>{index + 1}</th>
              <td>{application.name}</td>
              <td>{application.surname}</td>
              <td>{application.email}</td>
              <td>{application.position}</td>
              <td>
                <span className="custom-badge">{application.status}</span>
              </td>
              <td className="d-flex align-items-center gap-2">
                <a
                  className="btn btn-success btn-sm"
                  href={`/question-type-select/${application.id}`}
                >
                  <i className="fa-solid fa-circle-check"></i>
                </a>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={async () => {
                    await updateApplicationStatus(
                      application.id,
                      "Reddedildi",
                      application.email,
                      application.name
                    );
                    const updated = await fetchApplications();
                    setApplications(updated);
                  }}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleViewDetails(application.id)}
                >
                  <i className="fa-solid fa-eye"></i>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
  className="modal fade"
  id="applicationModal"
  tabIndex="-1"
  aria-labelledby="applicationModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="applicationModalLabel">Başvuru Detayı</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
      </div>
      <div className="modal-body">
        {selectedApplication ? (
          <>
            <p><strong>Ad:</strong> {selectedApplication.name}</p>
            <p><strong>Soyad:</strong> {selectedApplication.surname}</p>
            <p><strong>Email:</strong> {selectedApplication.email}</p>
            <p><strong>Telefon:</strong> {selectedApplication.phonenumber}</p>
            <p><strong>Pozisyon:</strong> {selectedApplication.position}</p>
            <p><strong>Durum:</strong> {selectedApplication.status}</p>
            <p><strong>Doğum Tarihi:</strong> {selectedApplication.birthyear}</p>
            <p><strong>Adress:</strong> {selectedApplication.address}</p>
            <p><strong>Sertifikalar:</strong> {selectedApplication.certificates}</p>
            <p><strong>Departman:</strong> {selectedApplication.department}</p>
            <p><strong>Deneyim:</strong> {selectedApplication.experience}</p>
            <p><strong>Diller:</strong> {selectedApplication.foreignlanguage}</p>
            <p><strong>Cinsiyet:</strong> {selectedApplication.gender}</p>
            <p><strong>Sınıf:</strong> {selectedApplication.grade}</p>
            <p><strong>Başvuru Motivasyonu:</strong> {selectedApplication.motivation}</p>
            <p><strong>Projeler:</strong> {selectedApplication.projects}</p>
            <p><strong>Referanslar:</strong> {selectedApplication.references}</p>
            <p><strong>Okul:</strong> {selectedApplication.school}</p>
            <p><strong>Sosyal Medya:</strong> {selectedApplication.socialmedia}</p>
            <p><strong>Bilinen Teknolojiler:</strong> {selectedApplication.technologies}</p>
            <p><strong>Gönüllü Çalışmalar:</strong> {selectedApplication.volunteerwork}</p>

          </>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Applications;
