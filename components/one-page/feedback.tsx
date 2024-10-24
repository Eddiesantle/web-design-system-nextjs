'use client'
import React, { useState } from "react";
import { ContainerDefault } from "../layout/containerDefault";
import Image from "next/image";

interface Testimonial {
    id: number;
    text: string;
    name: string;
    officer?: string
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
        <div id="depoimentos" className="bg-gradient-to-r from-[#003662] to-[#00569C] text-white pb-16 md:pt-[150px]">
            <div className="relative">
                <div className="absolute -left-60">
                    <Image src="/img/home/b-grande-transparente.webp" alt="b grandão" width={531} height={492} />
                </div>
            </div>
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
    <div className="md:col-span-1">
        <p className="text-sm uppercase tracking-wider ">Depoimentos</p>
        <h3 className="text-3xl  mt-2 mb-4">Depoimentos de <span className="text-secondary  font-semibold font-[family-name:var(--font-frank-ruhl-libre)]">Clientes</span></h3>
        <p className="leading-relaxed">
            Fundada em 1983, há mais de 40 anos simplificando a contabilidade rural e empresarial. Confiança e expertise para gerenciar
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

const TestimonialCard: React.FC<Testimonial> = ({ text, name, officer }) => (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 md:w-[250px] md:h-[230px]">
        <div className="italic md:h-[150px]">{text}</div>
        <div className="flex flex-row items-center gap-3 ">
            <div className="w-6 h-6 p-[6px] rounded-full bg-primary"></div>
            <div>
                <div className="font-semibold"> {name}</div>
                <div className="text-xs text-gray-500"> {officer}</div>
            </div>
        </div>
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
                        ></button>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default Feedback;
