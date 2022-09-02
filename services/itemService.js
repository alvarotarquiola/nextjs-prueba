export async function getItems(){
    const request = await fetch('https://lazzo.co/elvive/datos');
    const items = await request.json();
    
    return items.data;
}

export async function getLatestItems(){
    const items = await getItems()

    return items.slice(0, 4);
}