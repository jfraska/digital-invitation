"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import CustomizeContext from "@/context/customize";
import { GlobalStyles } from "@mui/material";

import CustomizeTool from "@/components/layouts/customize-tool";
import ButtonShare from "@/components/container/button-share";
import ButtonAction from "@/components/container/button-action";
import ModeCustomize from "@/components/container/mode-customize";
import Loading from "./loading";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isOpenTool, setIsOpenTool] = useState(false);
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const { initData, dataColor } = useContext(CustomizeContext);

  const urlShare = process.env.NEXT_PUBLIC_VERCEL_ENV
    ? `https://template.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${pathname}`
    : `http://template.localhost:3000/${pathname}`;

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`/api/template/${pathname}`);
        let result = await response.json();
        initData(result.data);
        // if (searchParams) {
        //   response = await fetch(
        //     `/api/guest/${searchParams?.get("guest")}?slug=${pathname}`
        //   );
        //   result = await response.json();
        //   setDataGuest(result.data);
        // }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {children}

          <ButtonAction handleOpenShare={setIsOpenShare} />
          <ModeCustomize handleOpenTool={setIsOpenTool} />
          <ButtonShare
            open={isOpenShare}
            onOpenChange={setIsOpenShare}
            link={urlShare}
          />
          <CustomizeTool open={isOpenTool} setOpen={setIsOpenTool} />
          <GlobalStyles
            styles={{
              ":root": {
                "--background": dataColor?.value.background,
                "--foreground": dataColor?.value.foreground,

                // primary
                "--primary": dataColor?.value.primary,
                "--primary-foreground": dataColor?.value["primary-foregroundd"],

                // secondary
                "--secondary": dataColor?.value.secondary,
                "--secondary-foreground":
                  dataColor?.value["secondary-foreground"],

                // accent
                "--accent": dataColor?.value.accent,
                "--accent-foreground": dataColor?.value["accent-foreground"],
              },
              body: {
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              },
            }}
          />
        </>
      )}
    </>
  );
}
