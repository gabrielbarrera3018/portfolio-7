import Link from "next/link";

export default function Header(){
    return (
        <footer className="pt-3 mb-5">
            <nav className="d-flex mx-5">
                <div className="flex-fill">
                    <Link href="/">
                        <a>dsadas</a>
                    </Link>
                </div>
                <div>
                    <Link href="/projetos" >
                        <a>projetos</a>
                    </Link>
                    <Link href="/sobre" >
                        <a className="mx-2">sobre</a>
                    </Link>
                    <Link href="/contato">
                        <a >contato</a>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}