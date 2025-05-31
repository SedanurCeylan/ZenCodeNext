'use client';

import React, { useEffect, useState } from "react";
import {
  fetchApplications,
  updateApplicationStatus,
  fetchApplicationById,
} from "@/firebase/firebaseUpload";
import Navbar from "@/components/Navbar";
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
  const [selectedPosition, setSelectedPosition] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

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

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedApplications = [...applications].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey]?.toLowerCase?.() || '';
    const bVal = b[sortKey]?.toLowerCase?.() || '';
    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredApplications = sortedApplications.filter((app) => {
    const fullText = `${app.name} ${app.surname} ${app.email}`.toLowerCase();
    const matchesSearch = fullText.includes(searchTerm.toLowerCase());
    const matchesPosition = selectedPosition ? app.position === selectedPosition : true;
    return matchesSearch && matchesPosition;
  });

  const uniquePositions = [...new Set(applications.map(app => app.position))];

  return (
    <div className="container form-container">
      <Navbar />

      <div className="d-flex justify-content-between align-items-end mt-4 flex-wrap gap-3">
        <ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
          {["Bekliyor", "Test Aşamasında", "Reddedildi", "Başarısız", "Başarılı"].map((label, i) => (
            <li className="nav-item" role="presentation" key={label}>
              <button
                className={`nav-link ${i === 0 ? 'active' : ''}`}
                id={`${label.toLowerCase().replace(/ /g, '-')}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${label.toLowerCase().replace(/ /g, '')}`}
                type="button"
                role="tab"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="d-flex gap-3 mt-3 flex-wrap">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="İsim, soyisim veya e-posta ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="btn btn-outline-secondary" onClick={() => setSearchTerm('')}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          <div className="input-group">
            <select
              className="form-select"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              <option value="">Tüm Pozisyonlar</option>
              {uniquePositions.map((pos, idx) => (
                <option key={idx} value={pos}>{pos}</option>
              ))}
            </select>
            {selectedPosition && (
              <button className="btn btn-outline-secondary" onClick={() => setSelectedPosition('')}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="tab-content mt-3" id="myTabContent">
        {["Bekliyor", "Test Aşamasında", "Reddedildi", "Başarısız", "Başarılı"].map((status, idx) => (
          <div
            key={status}
            className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
            id={status.toLowerCase().replace(/ /g, '')}
            role="tabpanel"
          >
            <Table
              applications={filteredApplications.filter(app => app.status === status)}
              updateApplicationStatus={updateApplicationStatus}
              handleViewDetails={handleViewDetails}
              fetchApplications={fetchApplications}
              setApplications={setApplications}
              handleSort={handleSort}
              sortKey={sortKey}
              sortOrder={sortOrder}
            />
          </div>
        ))}
      </div>

      <div className="modal fade" id="applicationModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Başvuru Detayı</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
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
