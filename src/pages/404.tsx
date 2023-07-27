import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFoundPage () {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
            // router.go(1)
        }, 20000)
    }, [router])
    return (
        <div className="min-h-70vh p-4 text-center">
            <h1 className="text-3xl p-2">Oops.....</h1>
            <h2 className="text-3xl p-2">That page can not Found</h2>
            <p>Go back to the <Link href="/" className="bg-[#6191b3] p-2 rounded-xl">Home Page</Link></p>
        </div>
    );
}