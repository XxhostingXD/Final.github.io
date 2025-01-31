import axios from 'axios';

export const LLamadaapi = async (url) => {
    try {
      const response = await axios.get(url);      
      return response;
    } catch (error) {
      console.error('Error fetching data', error);
      throw error;
    }
  };
  