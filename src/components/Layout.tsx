import { FC, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <CookiesProvider>
          <div className="bg-sky-100 p-8">
            <div className="flex flex-col bg-sky-200 h-screen p-8 shadow-2xl">
              <h1 className="text-3xl font-bold underline text-center p-8 text-gray-600 font-serif italic ">
                TODO APP
              </h1>
              {children}
            </div>
          </div>
        </CookiesProvider>
      </RecoilRoot>
    </>
  );
};
