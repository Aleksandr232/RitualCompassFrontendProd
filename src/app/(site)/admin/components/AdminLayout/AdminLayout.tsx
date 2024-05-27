import React, { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import API from "@/utils/api/api";
import { IAdminLayout } from "./AdminLayout.prop";
import NotFound from "@/app/not-found";
import { ValidateAdmin } from "../ValidateAdmin/ValidateAdmin";
import Loading from "@/components/Loading/Loading";

const AdminLayout: FC<IAdminLayout> = ({ children }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      ValidateAdmin({
        API: API.compass.user,
        token: token,
        setIsAdmin,
        setIsLoading,
      });
    } else {
      router.push("/");
    }
  }, [router]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAdmin) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export default AdminLayout;
