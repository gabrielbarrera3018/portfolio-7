import Link from "next/link";

export default function Header(){
    return (
        <footer className="mt-3 mb-5">
            <nav className="d-flex mx-5">
                <div className="flex-fill">
                    dsadas
                </div>
                <div>
                    <Link href="" >
                        <a >projetos</a>
                    </Link>
                    <Link href="" >
                        <a className="mx-2">sobre</a>
                    </Link>
                    <Link href="">
                        <a >contato</a>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}