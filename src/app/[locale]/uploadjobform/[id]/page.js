'use client'
import React, { useEffect, useState } from 'react'
import { fetchPosition, uploadJobs } from '@/firebase/firebaseUpload'
import Navbar from '@/components/Navbar'
import { useParams, useRouter } from 'next/navigation'

const UploadJobForm = () => {
  const params = useParams()
  const id = params?.id?.toString()
  const router = useRouter()

  const [job, setJob] = useState({
    id: '',
    title: '',
    description: '',
    location: '',
    type: '',
    startDate: '',
    endDate: '',
    responsivities: '',
    requirements: ''
  })

  useEffect(() => {
    if (id && id !== 'new') {
      const fetchData = async () => {
        try {
          const data = await fetchPosition(id)
          if (data) setJob({ ...data, id })
        } catch (err) {
          console.error('Veri alınırken hata:', err)
        }
      }
      fetchData()
    }
  }, [id])

  const handleChange = e => {
    setJob({ ...job, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await uploadJobs({ ...job, id: id !== 'new' ? id : undefined })
      if (id === 'new') {
        setJob({
          id: '',
          title: '',
          description: '',
          location: '',
          type: '',
          startDate: '',
          endDate: '',
          responsivities: '',
          requirements: ''
        })
      }
      router.push('/position')
    } catch (error) {
      console.error('Hata oluştu:', error)
    }
  }

  return (
    <div className='container mt-5 py-5'>
      <Navbar />
      <div className='card shadow p-4'>
        <h2 className='mb-4 text-center'>İş İlanı Yükle</h2>
        <form onSubmit={handleSubmit} className='row g-3'>
          <div className='col-12'>
            <label className='form-label'>İş Başlığı</label>
            <input
              type='text'
              className='form-control'
              name='title'
              value={job.title || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Konum</label>
            <input
              type='text'
              className='form-control'
              name='location'
              value={job.location || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Başvuru Türü</label>
            <input
              type='text'
              className='form-control'
              name='type'
              value={job.type || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>İlan Açılış Tarihi</label>
            <input
              type='date'
              className='form-control'
              name='startDate'
              value={job.startDate || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Son Başvuru Tarihi</label>
            <input
              type='date'
              className='form-control'
              name='endDate'
              value={job.endDate || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className='col-12'>
            <label className='form-label'>Açıklama</label>
            <textarea
              className='form-control'
              name='description'
              rows='4'
              value={job.description || ''}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='col-12'>
            <label className='form-label'>Sorumluluklar</label>
            <textarea
              className='form-control'
              name='responsivities'
              rows='4'
              value={job.responsivities || ''}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='col-12'>
            <label className='form-label'>Gereksinimler</label>
            <textarea
              className='form-control'
              name='requirements'
              rows='4'
              value={job.requirements || ''}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='col-12 text-center'>
            <button type='submit' className='btn btn-primary px-4 py-2'>
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadJobForm
