
import axios, { AxiosError, AxiosInstance } from 'axios';

export type ChatReply = {
  action: string,
  parameters: string[],
  comment: string
}

export type ContractAnalysis = {
  anti_whale_modifiable?: string,
  buy_tax?: string,
  can_take_back_ownership?: string,
  cannot_buy?: string,
  cannot_sell_all?: string,
  creator_address?: string,
  creator_balance?: string,
  creator_percent?: string,
  dex?: string[],
  external_call?: string,
  hidden_owner?: string,
  holder_count?: string,
  honeypot_with_same_creator?: string,
  is_anti_whale?: string,
  is_blacklisted?: string,
  is_honeypot?: string,
  is_in_dex?: string,
  is_mintable?: string,
  is_open_source?: string,
  is_proxy?: string,
}

interface ApiRequest<TRequest = any> {
  readonly url: string;
  readonly method?: 'GET' | 'DELETE' | 'POST' | 'PUT';
  readonly requestData?: TRequest;
}

class ApiClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://extension-api.jozhe.com/',
    });

    this.client.interceptors.response.use(null, (error: AxiosError) => {
      console.log(`Failed to call API`, error.response?.status, error.response?.data);
      return Promise.reject(error);
    });
  }

  public chat = async (accountAddress: string, message: string): Promise<any> => {
    return this.callApi<ChatReply>({
      url: `/chat`,
      method: 'POST',
      requestData: {
        account_address: accountAddress,
        message,
      },
    });
  };

  public contractAnalyze = async (accountAddress: string, contractAddress: string, chainId: string): Promise<ContractAnalysis> => {
    return this.callApi<ContractAnalysis>({
      url: `/contract/analyze`,
      method: 'POST',
      requestData: { account_address: accountAddress, contract_address: contractAddress, chain_id: chainId },
    });
  };

  /**
   * Helper with saint defaults to perform an HTTP call.
   * @param request A request to perform.
   */
  private callApi<TResponse = any, TRequest = any>(request: ApiRequest<TRequest>): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      let data;
      if (request.method === 'POST') {
        data = { data: request.requestData };
      } else {
        data = { params: request.requestData };
      }

      this.client
        .request<TResponse>({
          url: request.url,
          method: request.method ?? 'GET',
          responseType: 'json',
          ...data,
        })
        .then((response) => (response?.status && response.status >= 200 && response.status < 400 ? resolve(response?.data) : reject(response?.data)))
        .catch((error: AxiosError) => reject(error.response ?? error.message));
    });
  }
}

export default new ApiClient();
