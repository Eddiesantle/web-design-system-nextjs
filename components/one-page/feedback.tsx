'use client'
import React, { useState } from "react";
import { ContainerDefault } from "../layout/containerDefault";

interface Testimonial {
    id: number;
    text: string;
    name: string;
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
        <div className="bg-[#00569C] text-white pb-16 md:pt-[250px]">
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
        <p className="text-sm uppercase tracking-wider text-gray-400">Depoimentos</p>
        <h3 className="text-2xl font-bold mt-2 mb-4">Feedback de Clientes</h3>
        <p className="leading-relaxed">
            Nossa empresa preza pela satisfação dos nossos clientes. Veja o que eles têm a dizer sobre nossos serviços.
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

const TestimonialCard: React.FC<Testimonial> = ({ text, name }) => (
    <div className="bg-white text-black rounded-lg shadow-lg p-6 md:w-[250px] md:h-[200px]">
        <p className="italic">{text}</p>
        <div className="mt-4 text-right font-semibold">— {name}</div>
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
                            className={`w-2 h-2 p-[6px] rounded-full mx-2 ${currentIndex / 2 === i ? 'bg-blue-500' : 'bg-white'
                                }`}
                        ></button>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default Feedback;
