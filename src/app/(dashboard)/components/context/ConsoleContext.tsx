"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { FormElementInstance } from "@/dashboard/FormElements";

type ConsoleContextType = {
  elements: FormElementInstance[];
  addElements: (index: number, element: FormElementInstance) => void;
};

export const ConsoleContext = createContext<ConsoleContextType | null>(null);

export const UseConsole = () => {
  const context = useContext(ConsoleContext);

  if (!context)
    throw new Error("UseConsole must be used within a console context");

  return context;
};

export const ConsoleContextProvider = ({ children }: PropsWithChildren) => {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElements = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <ConsoleContext.Provider value={{ elements, addElements }}>
      {children}
    </ConsoleContext.Provider>
  );
};
