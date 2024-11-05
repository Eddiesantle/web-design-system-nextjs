import React from 'react';
import { ContainerDefault } from '../layout/ContainerDefault';


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
                <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#004780] to-[#0060AD] text-white gap-6 rounded-[30px] py-6 px-12">
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
        <div className="text-3xl font-semibold font-[family-name:var(--font-geist-sans)]">{value}</div>
        {subtitle && <div className="text-sm">{subtitle}</div>}
    </div>
);

export default InformationCountsAdvantages;
