import React, { createContext, useContext, useState } from 'react';

// Create a context for theme
// export const MenuContext = createContext(false);

interface MenuContextProps {
    menuClicked: boolean;
    setMenuClicked: (value: boolean) => void;
  }
  
  const MenuContext = createContext<MenuContextProps>({
    menuClicked: false,
    setMenuClicked: () => {},
  });


  export const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [menuClicked, setMenuClicked] = useState(false);
  
    return (
      <MenuContext.Provider value={{ menuClicked, setMenuClicked }}>
        {children}
      </MenuContext.Provider>
    );
  };
  
  export const useMenuContext = () => useContext(MenuContext);

  
// Export the MenuContextProvider
// export default function MenuContextProvider({ children }) {
//   const [menuClicked, setMenuClicked] = useState(false);

//   return (
//     <MenuContext.Provider value={{ menuClicked, setMenuClicked }}>
//       {children}
//     </MenuContext.Provider>
//   );
// }