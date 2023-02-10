import { createContext, ReactNode } from "react";
import {
  toast,
  ToastOptions,
  ToastContent,
  ToastContainer,
  Id,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastProps = {
  msg: ToastContent<unknown>;
  options?: ToastOptions;
};

type ToastProviderProps = {
  children: ReactNode;
};

type ToastContextType = {
  notify: (params: ToastProps) => Id;
};

const ToastContext = createContext<Partial<ToastContextType>>({});

function ToastProvider({ children }: ToastProviderProps) {
  const notify = (params: ToastProps) =>
    toast(params.msg, {
      type: "success",
      position: "bottom-right",
      hideProgressBar: true,
      ...params.options,
      theme: "colored",
      bodyStyle: { fontSize: "14px", fontWeight: 500 },
      style: { borderRadius: "5px" },
      closeButton: false,
      pauseOnHover: false,
    });

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export { ToastContext, ToastProvider };
