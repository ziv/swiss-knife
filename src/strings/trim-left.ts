
export default function trimLeft(chars: string): (text: string) => string {
    const left = new RegExp(`^[${chars}]+`, 'g');
    return (text: string) => {
        return text.replace(left, '');
    }
}
