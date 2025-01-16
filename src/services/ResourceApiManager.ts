import RequestApiBuilder from "./RequestApiBuilder";

interface Realization {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
  images: string[];
}

interface RealizationApiResponse {
  "hydra:member": Realization[];
  [key: string]: any;
}

export const getRealizations = async (
  id?: string
): Promise<Realization | Realization[]> => {
  const api = new RequestApiBuilder().setResource("realizations");

  if (id) {
    const response = await api.setId(id).get<Realization>();
    return response.data;
  }

  const response = await api.get<RealizationApiResponse>();
  return response.data["hydra:member"];
};
