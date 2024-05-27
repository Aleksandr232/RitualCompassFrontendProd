"use client";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import FuneralСompanies from "./components/FuneralСompanies/FuneralСompanies";

import AddCompany from "./components/AddCompany/AddCompany";

export default function Company() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AddCompany />
      <FuneralСompanies />
    </div>
  );
}
