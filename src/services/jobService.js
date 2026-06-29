import api from "./api";

const jobService = {
  // Ambil semua lowongan
  getJobs: async () => {
    const response = await api.get("/jobs");
    return response.data;
  },

  // Ambil satu lowongan berdasarkan ID
  getJob: async (id) => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  },

  // Tambah lowongan
  createJob: async (jobData) => {
    const response = await api.post("/jobs", jobData);
    return response.data;
  },

  // Update lowongan
  updateJob: async (id, jobData) => {
    const response = await api.put(`/jobs/${id}`, jobData);
    return response.data;
  },

  // Hapus lowongan
  deleteJob: async (id) => {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
  },
};

export default jobService;