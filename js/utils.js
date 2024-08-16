export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            console.error(error);
        }
    }
}
