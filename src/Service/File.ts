export function readFile(file: File): Promise<string>
{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.addEventListener('error', (e: any) => reject(e?.message || e?.toString() || '?'));
        reader.readAsText(file);
    });
}
