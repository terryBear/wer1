import axios from "axios";
import { ITrackData } from "../types/ITrackData";

const getTrackData = async ({ name, artists }: Partial<ITrackData>): Promise<any> => {

  const globalConfig = {
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${process.env.ACR_KEY}`
    }
  };

  const localConfig = {
    method: 'get',
    url: `${process.env.EXTERNAL_API_URL}tracks`,
    params: {
      query:JSON.stringify({"track": name, "artists": artists, "source_url": "https://www.youtube.com/", "platforms": ["youtube"]}),
      format:'json'
    }
  };

  const response = await axios.request({ ...globalConfig, ...localConfig });
  return response?.data?.data;

}

const externalApi = {
  getTrackData
};

export default externalApi;