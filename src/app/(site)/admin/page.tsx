"use client";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import FuneralСompanies from "./company/components/FuneralСompanies/FuneralСompanies";
import AddCompany from "./company/components/AddCompany/AddCompany";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Admin() {
  return (
    <AdminLayout>
      <div>
        <Navbar />
        <Sidebar />
        <AddCompany />
        <FuneralСompanies />
      </div>
    </AdminLayout>
  );
}
