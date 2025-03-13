import { toast } from "react-toastify";


// Toast configuration
export const toastConfig = {
  position: "top-center" as const,
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
export const showToast =(message:string, type:"success"|"error")=>{
  if(type === "success"){
    toast.success(message, toastConfig);
  }else{
    toast.error(message, toastConfig);
  }
}