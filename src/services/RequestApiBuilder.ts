import axios, { AxiosInstance, AxiosResponse } from "axios";

class RequestApiBuilder {
  private readonly mainUrl: string;
  private resource: string = "";
  private id: string = "";
  private params: Record<string, string | number> = {};
  private body?: Record<string, any>;
  private axios: AxiosInstance;

  constructor() {
    this.mainUrl = `${import.meta.env.VITE_BACKEND_URL}` || "";
    if (!this.mainUrl) {
      throw new Error("BACKEND_URL is not defined.");
    }
    this.axios = this.generateAxios();

    console.log(`${import.meta.env.VITE_BACKEND_URL}`);
  }

  private generateAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.mainUrl,
      timeout: 30000,
    });
  }

  public setResource(resource: string): this {
    this.resource = resource;
    return this;
  }

  public setId(id: string): this {
    this.id = id;
    return this;
  }

  public setParams(params: Record<string, string | number>): this {
    this.params = params;
    return this;
  }

  public setBody(body: Record<string, any>): this {
    this.body = body;
    return this;
  }

  public async post<T = any>(): Promise<AxiosResponse<T>> {
    return this.axios.post<T>(`${this.resource}`, this.body);
  }

  public async get<T = any>(): Promise<AxiosResponse<T>> {
    const queryString = new URLSearchParams(
      this.params as Record<string, string>
    ).toString();
    const url = this.id ? `${this.resource}/${this.id}` : this.resource;

    return this.axios.get<T>(queryString ? `${url}?${queryString}` : url);
  }
}

export default RequestApiBuilder;
