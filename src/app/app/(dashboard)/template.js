"use client";

import { useContext, useEffect, useState } from "react";
import { getCookie, hasCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import PortalContext from "@/context/portal";
import Loading from "@/components/UI/loading";
import { Button } from "@/components/UI/button";
import NotfoundDashboard from "@/components/container/notfound-dashboard";
import axios from "axios";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const {
    invitation,
    updateInvitation,
    setStateSwitcher,
    setStateCreateInvitation,
  } = useContext(PortalContext);

  useEffect(() => {
    (async () => {
      try {
        const selected = hasCookie("invitation")
          ? JSON.parse(getCookie("invitation"))
          : null;

        if (!selected) {
          setStateSwitcher(true);
          return;
        }
        const res = await axios.get(`/api/invitation/${selected.id}`);
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        const { data } = res;

        updateInvitation(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div className="m-auto">
          <Loading />
        </div>
      ) : invitation ? (
        children
      ) : (
        <NotfoundDashboard
          pathname={pathname === "/" ? "dashboard" : pathname.slice(1)}
          title="You have no invitation"
          desc="You can start a new experience with an invitation from us."
          textButton="Add invitation"
          onClick={() => setStateCreateInvitation(true)}
        />
      )}
    </>
  );
}
