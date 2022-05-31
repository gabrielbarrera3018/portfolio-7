import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";

export default function Projetos({ className })
{
    const projetos = [{
            id: 1,
            imagem: "/img/placehouder.jpg",
            nome: "projeto 1"
        },
        {
            id: 2,
            imagem: "/img/placehouder.jpg",
            nome: "projeto 2"
        },
        {
            id: 3,
            imagem: "/img/placehouder.jpg",
            nome: "projeto 3"
        },
    ]
    return (
        <>
            <div className={className ?? "my-3"}>
                <div className="border-bottom">
                    <h3 className="fw-bold mb-3">Projetos</h3>
                </div>
                <div>
                    <div className="text-end my-3">
                        <Link href="/projetos"><a>Ver Mais -></a></Link>

                    </div>
                    <Swiper
                        spaceBetween={40}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: Math.min(projetos.length, 2) },
                            768: { slidesPerView: Math.min(projetos.length, 3) }
                        }}
                    >
                        {projetos.map((projeto) => (
                            <SwiperSlide
                                key={projeto.id}
                            >
                                <Link href={`/projetos/${projeto.id}`}>
                                    <a className="row gy-3">
                                        <div>{projeto.nome}</div>
                                        <div><img src={projeto.imagem}/></div>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
