import { AxiosError } from "axios";
import { IApiError, ICustomAxiosRequestConfig } from "./interface";
import { showToast } from "@/components/shared/showToast";
import api from "./baseApi";

export const getCategory = async () => {
  try {
    const response = await api.get("/catalog/attribute-create/", {
      authRequired: true,
    } as ICustomAxiosRequestConfig);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const apiError: IApiError = error.response?.data ?? {
        message: "Something went wrong",
      };
      throw apiError;
    }
    throw { message: "Unknown error occurred" } as IApiError;
  }
};

type ApiData = {
  category: string;
  show_in_ecommerce: boolean;
  is_active: boolean;
  icon?: string;
};

type ApiResponse = {
  message?: string;
  error?: {
    message: string;
    details?: unknown;
  };
};

type CreateUpdateParams = {
  url: string;
  method: "post" | "put" | "patch";
  data: ApiData;
  reset: () => void;
  refetch?: () => void;
  setOpen?: (open: boolean) => void;
  setEditModalOpen?: (open: boolean) => void;
};

export const CallCreateUpdateApi = async ({
  url,
  method,
  data,
  reset,
  refetch,
  setOpen,
  setEditModalOpen,
}: CreateUpdateParams): Promise<ApiResponse> => {
  try {
    const response = await api[method](url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 || response.status === 201) {
      const action = method === "post" ? "saved" : "updated";
      showToast(`Data ${action} successfully!`, "success");
      reset();
      refetch?.();
      setOpen?.(false);
      setEditModalOpen?.(false);
      return { message: `Data ${action} successfully!` };
    } else {
      const action = method === "post" ? "save" : "update";
      showToast(`Failed to ${action} data!`, "error");
      return { error: { message: `Failed to ${action} data!` } };
    }
  } catch (error: unknown) {
    const action = method === "post" ? "saving" : "updating";
    showToast(`An error occurred while ${action} data.`, "error");

    if (error instanceof AxiosError) {
      console.error("Error:", error.response?.data || error.message);
      return { error: { message: error.message, details: error.response?.data } };
    }

    console.error("Error:", error);
    return { error: { message: "An unknown error occurred." } };
  }
};