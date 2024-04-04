import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { Pages } from "~/constants";

interface Props {
  children: React.ReactNode;
}

interface NavigationContextValue {
  selectedPage: Pages;
  setSelectedPage: (page: Pages) => void;
}

const defaultValues: NavigationContextValue = {
  selectedPage: Pages.Home,
  setSelectedPage: () => {
    return;
  },
};

const NavigationContext = createContext<NavigationContextValue>(defaultValues);

const NavigationContextProvider = ({ children }: Props) => {
  const currentPath = usePathname();
  const [selectedPage, setSelectedPage] = useState<Pages>(Pages.Home);

  useEffect(() => {
    if (currentPath === "/") {
      setSelectedPage(Pages.Home);
    }

    if (currentPath === "/notification") {
      setSelectedPage(Pages.Notification);
    }

    if (currentPath === "/post") {
      setSelectedPage(Pages.Post);
    }

    if (currentPath === "/search") {
      setSelectedPage(Pages.Search);
    }

    if (currentPath.includes("/profile")) {
      setSelectedPage(Pages.Profile);
    }
  }, [currentPath]);

  return (
    <NavigationContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationContextProvider };
