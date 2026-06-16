import { create } from "zustand";

const useAuthStore = create((set) => ({
    isAdmin: false,

    login: (email, password) => {
        if (
            email === "admin@admin.com" &&
            password === "fed25"
        ) {
            set({ isAdmin: true });
            return true;
        }
        return false;
    }
}));

export default useAuthStore;