import { apiClient } from "../../core/AxiosInstance";
import {
  StatisticsData,
  CreateNominationPayload,
  NominationDetail,
  UpdateNominationPayload,
} from "@/feature/(admin)/admin/types/admin";

class AdminService {
  private static instance: AdminService;

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
  }

  async getStatistics() {
    const response = await apiClient.get<StatisticsData>("/admin/statistics");
    return response;
  }

  async getNominationDetail(nominationId: string) {
    const response = await apiClient.get<NominationDetail>(
      `/admin/nomination/${nominationId}`
    );
    return response;
  }

  async deleteNomination(nominationId: string) {
    const response = await apiClient.delete(
      `/admin/nomination/${nominationId}`
    );
    return response;
  }

  async createNomination(payload: CreateNominationPayload) {
    const response = await apiClient.post<NominationDetail>(
      "/admin/nomination",
      payload
    );
    return response;
  }

  async updateNomination(
    nominationId: string,
    payload: UpdateNominationPayload
  ) {
    const response = await apiClient.put<NominationDetail>(
      `/admin/nomination/${nominationId}`,
      payload
    );
    return response;
  }
}

export const adminService = AdminService.getInstance();
