export function formatDate(source: number) {
    const date = new Date(source * 1000);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
}

export function asUrParams(source: any) {
    const entries = Object.entries(source);
    return entries.reduce((acc, curr) => {
        const [key, value] = curr;
        if(source[key]) {
            // @ts-ignore
            acc.set(key, value.toString());
        }
        return acc;
    }, new URLSearchParams("")).toString();
}

export function range(size: number) {
    return Array.from( {length: size}, (v, k)=>k+1);
}