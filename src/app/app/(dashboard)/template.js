"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PortalContext from "@/context/portal";
import Loading from "@/components/UI/loading";

export default function Template({ children }) {
  const { invitation, updateInvitation, setStateSwitcher } =
    useContext(PortalContext);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/invitation/${invitation?.id}`);
        const result = await response.json();
        if (!result.data) {
          setStateSwitcher(true);
          return;
        }
        updateInvitation(result.data);
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
        <section className="flex h-full flex-col gap-4 lg:gap-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl capitalize">
              {pathname === "/" ? "dashboard" : pathname.slice(1)}
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no invitation
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start a new experience with an invitation from us.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
