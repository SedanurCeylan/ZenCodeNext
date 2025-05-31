import React from 'react';

function Table({
  applications,
  updateApplicationStatus,
  handleViewDetails,
  fetchApplications,
  setApplications,
  handleSort,
  sortKey,
  sortOrder
}) {
  const getArrow = (key) => {
    if (sortKey !== key) return '';
    return sortOrder === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th>No</th>
          <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
            Ad{getArrow('name')}
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => handleSort('surname')}>
            Soyad{getArrow('surname')}
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => handleSort('email')}>
            E-Mail{getArrow('email')}
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => handleSort('position')}>
            Pozisyon{getArrow('position')}
          </th>
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
                    'Reddedildi',
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
  );
}

export default Table;
