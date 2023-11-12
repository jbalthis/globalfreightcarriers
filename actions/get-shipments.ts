import prismadb from "@/lib/prismadb";

export const getShipmentsByCustomerId = async (customerId: string) => {
  if(customerId){
    
    const res = await fetch(`/api/${customerId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const shipments = await res.json();

    console.log('customerId '+customerId+'\nshipments => '+JSON.stringify(shipments))
    
    return Response.json({ shipments });
  }
}

