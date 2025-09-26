import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

type AuthErrorHandler = (error: AxiosError) => void;

class ApiCore {
  private client: AxiosInstance;
  private static instance: ApiCore;
  private authErrorHandler: AuthErrorHandler | null = null;

  private constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      timeout: 400000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.setupInterceptors();
  }

  public static getInstance(): ApiCore {
    if (!ApiCore.instance) {
      ApiCore.instance = new ApiCore();
    }
    return ApiCore.instance;
  }

  public setAuthErrorHandler(handler: AuthErrorHandler): void {
    this.authErrorHandler = handler;
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config) => {
        if (typeof window !== "undefined") {
          const getCookie = (name: string): string | undefined => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(";").shift();
          };
          const token = getCookie("auth_session");
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          if (this.authErrorHandler) {
            this.authErrorHandler(error);
          }
        }
        return Promise.reject(error);
      },
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  public async post<T, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }
  
}

export const apiClient = ApiCore.getInstance();