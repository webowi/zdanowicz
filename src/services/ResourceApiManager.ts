import RequestApiBuilder from "./RequestApiBuilder";

interface RealizationImage {
  image: string;
}

interface Realization {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
  images: RealizationImage[];
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

interface Machine {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
}

interface MachineApiResponse {
  "hydra:member": Machine[];
  [key: string]: any;
}

export const getMachines = async (): Promise<Machine[]> => {
  const api = new RequestApiBuilder().setResource("machines");

  const response = await api.get<MachineApiResponse>();
  return response.data["hydra:member"];
};

interface ConcretePlant {
  uuid: string;
  name: string;
  description?: string;
  mainImage: string;
}

interface ConcretePlantApiResponse {
  "hydra:member": ConcretePlant[];
  [key: string]: any;
}

export const getConcretePlants = async (): Promise<ConcretePlant[]> => {
  const api = new RequestApiBuilder().setResource("concrete-plants");

  const response = await api.get<ConcretePlantApiResponse>();
  return response.data["hydra:member"];
};
