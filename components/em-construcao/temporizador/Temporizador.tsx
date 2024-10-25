'use client'
import { useEffect, useState } from "react";

const Temporizador = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Definir a data final como 17 de outubro
        const targetDate = new Date("2024-12-01T00:00:00");

        // Função para atualizar o tempo restante
        const updateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // Quando a contagem regressiva terminar, parar o temporizador
                clearInterval(timerInterval);
            }
        };

        // Atualizar o tempo restante a cada segundo
        const timerInterval = setInterval(updateTimeLeft, 1000);

        // Limpar o intervalo quando o componente desmontar
        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div >
            <div className="px-3 text-white text-center mb-3 flex flex-col md:hidden block">
                <div className="text-2xl ">Em breve <br /> </div>
                <span className="text-lg">Novembro</span>
            </div>
            <div className="lg:absolute flex text-white items-center flex-col md:flex-row  py-4 md:px-5 space-x-4 md:space-y-4 space-y-0 bg-zinc-500/[.26] rounded-none md:rounded-full w-full bottom-0 right-0">

                <div className="px-3 flex flex-col ml-4 hidden md:block">
                    <div className="text-2xl ">Em breve <br /> </div>
                    <span className="text-lg">Novembro</span>
                </div>

                <div className="md:border-r-2 md:px-2 md:h-[45px]">
                </div>
                <div className=" flex space-x-6 ">
                    <span className="lg:text-4xl text-2xl">{timeLeft.days}</span> dias
                    <span className="lg:text-4xl text-2xl">{timeLeft.hours}</span> horas
                    <span className="lg:text-4xl text-2xl">{timeLeft.minutes}</span> min
                    <span className="lg:text-4xl text-2xl">{timeLeft.seconds}</span> seg
                </div>
            </div>
        </div>
    );
};

export default Temporizador