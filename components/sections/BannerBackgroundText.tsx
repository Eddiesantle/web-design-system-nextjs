import { ContainerDefault } from "../layout/ContainerDefault";

const BannerBackgroundText = () => {
    return (
        <div
            className="bg-cover bg-center bg-fixed flex flex-col justify-center h-[230px]"
            style={{ backgroundImage: `url('img/em-construcao/banner-fundo.png')` }}
        >
            <ContainerDefault>
                <div className="flex items-center justify-center h-full text-center text-white">
                    <h1 className="text-5xl">
                        <>Sobre a <span className="text-secondary font-semibold font-[family-name:var(--font-geist-sans)]">Dra. Magda Simoni</span></>
                    </h1>
                </div>
            </ContainerDefault>
        </div>
    );
}

export default BannerBackgroundText;
