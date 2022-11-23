import { useRouter } from 'next/router'
import Donate from "../components/D3Components/Resources/Donate/Donate";

export default function SupportPage() {
    const router = useRouter()
    return (
        <>
            <Donate />
        </>
    );
}