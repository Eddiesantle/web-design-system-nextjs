'use client'
import React, { useState } from "react";
import { ContainerDefault } from "../layout/ContainerDefault";
import Image from "next/image";

interface Testimonial {
    id: number;
    text?: string;
    name: string;
    officer?: string
    imageUrl?: string
}

interface FeedbackProps {
    testimonials: Testimonial[];
}

const Feedback: React.FC<FeedbackProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Math.ceil(testimonials.length / 2);

    const goToSlide = (index: number) => {
        setCurrentIndex(index * 2);
    };

    return (
        <div id="depoimentos" className="bg-gradient-to-r from-[#EAEAEA] to-[#F4F4F4] text-white pb-16 md:pt-[100px]">
            <ContainerDefault>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                    <FeedbackDescription />
                    <TestimonialCarousel
                        testimonials={testimonials}
                        currentIndex={currentIndex}
                        totalSlides={totalSlides}
                        goToSlide={goToSlide}
                    />
                </div>
            </ContainerDefault>
        </div>
    );
};

const FeedbackDescription: React.FC = () => (
    <div className="md:col-span-1 text-black">
        <p className="text-sm uppercase tracking-wider ">Histórias de Sucesso</p>
        <h3 className="text-3xl  mt-2 mb-4">Depoimentos de <span className="text-secondary  font-semibold font-[family-name:var(--font-geist-sans)]">Pacientes</span></h3>
        <p className="leading-relaxed">
            Os resultados falam por si! Veja o que os meus pacientes dizem sobre as transformações que experimentaram após adotarem um estilo de vida mais saudável e equilibrado.
        </p>
    </div>
);

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    currentIndex: number;
    totalSlides: number;
    goToSlide: (index: number) => void;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
    testimonials,
    currentIndex,
    totalSlides,
    goToSlide
}) => (
    <div className="md:col-span-2 relative grid justify-items-center">
        <div className="flex md:flex-row flex-col gap-6">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
        </div>
        <CarouselIndicators
            totalSlides={totalSlides}
            currentIndex={currentIndex}
            goToSlide={goToSlide}
        />
    </div>
);

const TestimonialCard: React.FC<Testimonial> = ({ /* text, */ name, /* officer, */ imageUrl }) => (
    <div className="bg-white text-black rounded-lg shadow-lg p-2 md:w-[350px] md:h-[530px]">
        <div className="italic md:h-[800px]">{imageUrl ? (<Image
            src={imageUrl}
            alt={`Depoimento de ${name}`}
            sizes="100vw"
            // Make the image display full width
            style={{
                width: '100%',
                height: 'auto',
            }}
            width={60}
            height={60}
            className="w-full h-full rounded-lg object-cover"
        />) : (<div className="w-16 h-16 p-[6px] rounded-full bg-primary"></div>)}</div>

    </div>
);

interface CarouselIndicatorsProps {
    totalSlides: number;
    currentIndex: number;
    goToSlide: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
    totalSlides,
    currentIndex,
    goToSlide
}) => (
    <div className="flex gap-6">
        <div>
            {totalSlides > 1 && (
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalSlides }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`w-2 h-2 p-[6px] rounded-full mx-2 ${currentIndex / 2 === i ? 'bg-secondary' : 'bg-white'
                                }`}
                            type="button"
                            aria-label={`Ir para o slide ${i + 1}`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default Feedback;
