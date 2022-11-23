import { useRouter } from 'next/router'
import Support from "../components/D3Components/Resources/Support/Support";

export default function SupportPage() {
    const router = useRouter()
    return (
        <>
            <Support />
        </>
    );
}
