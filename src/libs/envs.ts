const envs = {
    isDevelopment: process.env.NODE_ENV !== "production",
    apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
};

export default envs;
