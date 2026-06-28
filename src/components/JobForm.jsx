function JobForm({ form, handleChange, handleSubmit, submitLabel }) {
  return (
    <form onSubmit={handleSubmit}>

      <div className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Judul Pekerjaan</label>
          <input
            type="text"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Perusahaan</label>
          <input
            type="text"
            name="perusahaan"
            value={form.perusahaan}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Lokasi</label>
          <input
            type="text"
            name="lokasi"
            value={form.lokasi}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">ID Kategori</label>
          <input
            type="number"
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Tipe Pekerjaan</label>

          <select
            name="tipe_pekerjaan"
            value={form.tipe_pekerjaan}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Pilih</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>

        </div>

        <div className="col-12">
          <label className="form-label">Deskripsi</label>

          <textarea
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            rows="5"
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Persyaratan</label>

          <textarea
            name="persyaratan"
            value={form.persyaratan}
            onChange={handleChange}
            rows="5"
            className="form-control"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Cara Mendaftar</label>

          <textarea
            name="cara_mendaftar"
            value={form.cara_mendaftar}
            onChange={handleChange}
            rows="5"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Batas Pendaftaran</label>

          <input
            type="date"
            name="batas_pendaftaran"
            value={form.batas_pendaftaran}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

      </div>

      <div className="mt-4">

        <button
          type="submit"
          className="btn btn-primary"
        >
          {submitLabel}
        </button>

      </div>

    </form>
  );
}

export default JobForm;