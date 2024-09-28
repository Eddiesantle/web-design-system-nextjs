'use client'
import { useState } from "react";
import { ContainerDefault } from "../layout/containerDefault";

const testimonials = [
    {
        id: 1,
        text: "O serviço prestado pela Brandani Contabilidade foi excepcional. A equipe é extremamente atenciosa e eficiente.",
        name: "João Silva",
    },
    {
        id: 2,
        text: "Profissionais qualificados e prontos para ajudar em todas as necessidades contábeis da minha empresa.",
        name: "Maria Souza",
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Carlos Lima",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
    },
    {
        id: 3,
        text: "Sempre atenciosos e rápidos no atendimento. Recomendo a Brandani Contabilidade para todos os meus colegas!",
        name: "Marta Lima",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Sandra Dias",
    },
    {
        id: 4,
        text: "Excelente serviço e ótima relação custo-benefício. Equipe preparada e confiável.",
        name: "Fernanda Dias",
    },
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = Math.ceil(testimonials.length / 2);

    // Navegar para o próximo slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    };

    // Navegar para o slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
        );
    };

    // Navegar diretamente para um slide específico
    const goToSlide = (index: any) => {
        setCurrentIndex(index * 2);
    };

    return (
        <div className="bg-[#00569C] text-white py-10">
            <ContainerDefault>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                    {/* Seção de título e descrição */}
                    <div className="md:col-span-1">
                        <p className="text-sm uppercase tracking-wider text-gray-400">Depoimentos</p>
                        <h3 className="text-2xl font-bold mt-2 mb-4">Feedback de Clientes</h3>
                        <p className="leading-relaxed">
                            Nossa empresa preza pela satisfação dos nossos clientes. Veja o que eles têm a dizer sobre nossos serviços.
                        </p>
                    </div>

                    {/* Seção de depoimentos (carrossel) */}
                    {/* Seção de depoimentos (carrossel) */}
                    <div className="md:col-span-2 relative grid justify-items-center ">
                        <div className="flex md:flex-row flex-col gap-6 ">
                            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
                                <div key={testimonial.id} className="bg-white text-black rounded-lg shadow-lg p-6 md:w-[250px]  md:h-[200px]">
                                    <p className="italic">"{testimonial.text}"</p>
                                    <div className="mt-4 text-right font-semibold">— {testimonial.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-6">
                            <div>
                                {/* Indicadores de navegação (bolinhas) */}
                                {testimonials.length > 2 && (
                                    <div className="flex justify-center mt-6 ">
                                        {Array.from({ length: totalSlides }, (_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => goToSlide(i)}
                                                className={`w-2 h-2 p-[6px] rounded-full mx-2 ${currentIndex / 2 === i
                                                    ? 'bg-blue-500'
                                                    : 'bg-white'
                                                    }`}
                                            ></button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </ContainerDefault>

        </div>
    );
};

export default Feedback;
