export function readFile(file: File): Promise<string>
{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(<string>reader.result));
        reader.addEventListener('error', () => reject(reader?.error?.message || 'Failed to load file'));
        reader.readAsText(file);
    });
}
