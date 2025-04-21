import axios from "axios";

const COINCAP_API = "https://api.coincap.io/v2";

export interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
}

export interface AssetHistory {
  priceUsd: string;
  time: number;
}

/**
 * Fetches assets from CoinCap API.
 * 
 * @param params Optional parameters for pagination, sorting, etc.
 * Example: { limit: 50, offset: 0, search: "bitcoin" }
 */
export const getAssets = async (
  params?: Partial<{ limit: number; offset: number; search: string; sort: string }>
): Promise<Asset[]> => {
  try {
    // Build query string for optional parameters
    const query = params
      ? Object.entries(params)
          .filter(([_, v]) => v !== undefined && v !== null && v !== "")
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as string)}`)
          .join("&")
      : "";
    const url = `${COINCAP_API}/assets${query ? `?${query}` : ""}`;
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching assets:", error);
    throw new Error("Failed to fetch cryptocurrency assets");
  }
};

export const getAsset = async (id: string): Promise<Asset> => {
  try {
    const response = await axios.get(`${COINCAP_API}/assets/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching asset ${id}:`, error);
    throw new Error(`Failed to fetch details for ${id}`);
  }
};

export const getAssetHistory = async (id: string): Promise<AssetHistory[]> => {
  try {
    const response = await axios.get(
      `${COINCAP_API}/assets/${id}/history?interval=h1`
    );
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching history for ${id}:`, error);
    throw new Error(`Failed to fetch price history for ${id}`);
  }
};
