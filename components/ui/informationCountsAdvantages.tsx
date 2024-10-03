import React from 'react';
import { ContainerDefault } from '../layout/containerDefault';


interface StatItem {
    title?: string;
    value: string;
    subtitle?: string;
}

interface InformationCountsAdvantagesProps {
    stats: StatItem[];
}

const InformationCountsAdvantages: React.FC<InformationCountsAdvantagesProps> = ({ stats }) => {
    return (
        <ContainerDefault>
            <div className="flex justify-center">
                <div className="flex bg-[#004983] text-white gap-6 rounded-[30px] py-6 px-12">
                    {stats.map((stat, index) => (
                        <StatDisplay key={index} {...stat} />
                    ))}
                </div>
            </div>
        </ContainerDefault>
    );
};

const StatDisplay: React.FC<StatItem> = ({ title, value, subtitle }) => (
    <div className="flex flex-col text-center md:w-[150px]">
        {title && <div className="text-sm">{title}</div>}
        <div className="text-3xl font-semibold">{value}</div>
        {subtitle && <div className="text-sm">{subtitle}</div>}
    </div>
);

export default InformationCountsAdvantages;
