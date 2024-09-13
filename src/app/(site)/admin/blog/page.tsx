"use client";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import AddCompany from "./components/AddCompany/AddCompany";

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AddCompany/>
    </div>
  );
}