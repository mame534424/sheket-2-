import { createGroceryItem, listGroceryItems } from "@/lib/server/db-action";

export async function GET() {
    try{
        const items = await listGroceryItems();
        return Response.json({ items });
    }
    catch(error){
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("Error fetching grocery items:", message);
        return Response.json({ error: 'Failed to fetch grocery items' }, { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {name,category,quantity,priority} = body;
        if (!name || !priority || !category) {
            return Response.json({ error: 'Name, category, and priority are required' }, { status: 400 });
        }
        const newItem = await createGroceryItem({name, category, quantity, priority});
        return Response.json({ item: newItem }, { status: 201 });
    }
    catch (error) { 
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("Error creating grocery item:", message);
        return Response.json({ error: 'Failed to create grocery item' }, { status: 500 });
    }}