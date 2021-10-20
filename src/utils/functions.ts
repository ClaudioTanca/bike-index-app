export function formatDate(source: number) {
    const date = new Date(source * 1000);
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
}