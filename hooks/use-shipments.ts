
import { getAllShipments } from '@/actions/get-shipments';


const useShipments = async () => {
  
  const shipments = await getAllShipments();
      
  return shipments;
};


export default useShipments;
