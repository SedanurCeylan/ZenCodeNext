'use client';

import React, { useEffect, useState } from "react";
import {
  fetchApplications,
  updateApplicationStatus,
  fetchApplicationById,
} from "@/firebase/firebaseUpload";
import Navbar from "@/components/Navbar";
import { useApplicationsStore } from "@/store/applicationsStore";
import { useAppDetailStore } from '@/store/appDetailStore';
import Table from "@/components/Table";



function Applications() {
  const {
    applications,
    setApplications,
    selectedApplication,
    setSelectedApplication
  } = useAppDetailStore();

  const [searchTerm, setSearchTerm] = useState('');


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

  const filteredApplications = applications.filter((app) => {
    const fullText = `${app.name} ${app.surname} ${app.email}`.toLowerCase();
    return fullText.includes(searchTerm.toLowerCase());
  });



  return (
    <div className="container form-container">
      <Navbar />

      <div className="d-flex justify-content-between align-items-end">
        <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="bekliyor-tab" data-bs-toggle="tab" data-bs-target="#bekliyor" type="button" role="tab">Bekliyor</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="test-tab" data-bs-toggle="tab" data-bs-target="#test" type="button" role="tab">Test Aşamasında</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="reddedildi-tab" data-bs-toggle="tab" data-bs-target="#reddedildi" type="button" role="tab">Reddedildi</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="basarisiz-tab" data-bs-toggle="tab" data-bs-target="#basarisiz" type="button" role="tab">Başarısız</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="basarili-tab" data-bs-toggle="tab" data-bs-target="#basarili" type="button" role="tab">Başarılı</button>
          </li>
        </ul>
        <div className="input-group w-25 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="İsim, soyisim veya e-posta ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchTerm('')}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>



      </div>




      <div className="tab-content mt-3" id="myTabContent">
        <div className="tab-pane fade show active" id="bekliyor" role="tabpanel">
          <Table
            applications={filteredApplications.filter((application) => application.status === "Bekliyor")}
            updateApplicationStatus={updateApplicationStatus}
            handleViewDetails={handleViewDetails}
            fetchApplications={fetchApplications}
            setApplications={setApplications}
          />
        </div>
        <div className="tab-pane fade" id="test" role="tabpanel">
          <Table
            applications={filteredApplications.filter((application) => application.status === "Test Aşamasında")}
            updateApplicationStatus={updateApplicationStatus}
            handleViewDetails={handleViewDetails}
            fetchApplications={fetchApplications}
            setApplications={setApplications}
          />
        </div>
        <div className="tab-pane fade" id="reddedildi" role="tabpanel">
          <Table
            applications={filteredApplications.filter((application) => application.status === "Reddedildi")}
            updateApplicationStatus={updateApplicationStatus}
            handleViewDetails={handleViewDetails}
            fetchApplications={fetchApplications}
            setApplications={setApplications}
          />
        </div>
        <div className="tab-pane fade" id="basarisiz" role="tabpanel">
          <Table
            applications={filteredApplications.filter((application) => application.status === "Başarısız")}
            updateApplicationStatus={updateApplicationStatus}
            handleViewDetails={handleViewDetails}
            fetchApplications={fetchApplications}
            setApplications={setApplications}
          />
        </div>
        <div className="tab-pane fade" id="basarili" role="tabpanel">
          <Table
            applications={filteredApplications.filter((application) => application.status === "Başarılı")}
            updateApplicationStatus={updateApplicationStatus}
            handleViewDetails={handleViewDetails}
            fetchApplications={fetchApplications}
            setApplications={setApplications}
          />
        </div>
      </div>



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
