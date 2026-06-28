import api from "./api";

const jobService = {
  // Ambil semua lowongan
  getJobs: async () => {
    const response = await api.get("/jobs");

    console.log("========== GET JOBS ==========");
    console.log("FULL RESPONSE :", response);
    console.log("STATUS :", response.status);
    console.log("DATA API :", response.data);
    console.log("==============================");

    return response.data;
  },

  // Ambil satu lowongan berdasarkan ID
  getJob: async (id) => {
    const response = await api.get(`/jobs/${id}`);

    console.log("========== GET JOB ==========");
    console.log("ID :", id);
    console.log("DATA :", response.data);
    console.log("=============================");

    return response.data;
  },

  // Tambah lowongan
  createJob: async (jobData) => {
    console.log("========== CREATE JOB ==========");
    console.log("DATA DIKIRIM :", jobData);

    const response = await api.post("/jobs", jobData);

    console.log("RESPONSE :", response.data);
    console.log("================================");

    return response.data;
  },

  // Update lowongan
  updateJob: async (id, jobData) => {
    console.log("========== UPDATE JOB ==========");
    console.log("ID :", id);
    console.log("DATA :", jobData);

    const response = await api.put(`/jobs/${id}`, jobData);

    console.log("RESPONSE :", response.data);
    console.log("================================");

    return response.data;
  },

  // Hapus lowongan
  deleteJob: async (id) => {
    console.log("========== DELETE JOB ==========");
    console.log("ID :", id);

    const response = await api.delete(`/jobs/${id}`);

    console.log("RESPONSE :", response.data);
    console.log("================================");

    return response.data;
  },
};

export default jobService;