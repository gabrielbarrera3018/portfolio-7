import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function BasicLayout({ children })
{
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
