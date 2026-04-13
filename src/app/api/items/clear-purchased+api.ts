import { clearPurchasedItems } from "@/lib/server/db-action";

export async function POST() {
    try {
        await clearPurchasedItems();
        return Response.json({ message: 'Purchased items cleared' }, { status: 200 });
    }
    catch (error) { 
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("Error clearing purchased items:", message);
        return Response.json({ error: 'Failed to clear purchased items' }, { status: 500 });
    }}
