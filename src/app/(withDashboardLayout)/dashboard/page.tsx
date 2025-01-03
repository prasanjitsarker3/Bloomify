"use client"

import { useAppDispatch } from "@/components/Redux/hooks";
import { setBreadcrumbs } from "@/components/Redux/Slice/breadcrumbSlice";
import { useEffect } from "react";

const DashboardPage= () =>{
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ label: "Dashboard", path: "/dashboard" }])
    );
  }, [dispatch]);
    return (
        <h1>Dashboard Page</h1>
    )
}

export default DashboardPage