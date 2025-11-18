import React, { useEffect, useState } from 'react';

const ExtraSection = () => {
    const stats = [
        {
            value: 103962,
            label: "ANIMALS TREATED",
            bg: "from-white to-gray-100",
            text: "text-gray-800",
        },
        {
            value: 2863,
            label: "VETS AND VET STUDENTS TRAINED",
            bg: "from-[#B7E1DD] to-[#D5E9E7]",
            text: "text-gray-800",
        },
        {
            value: 1042,
            label: "PARCELS SENT",
            bg: "from-[#003B4C] to-[#005A75]",
            text: "text-white",
        },
    ];
    const Counter = ({ target }) => {
        const [count, setCount] = useState(0);
        useEffect(() => {
            let start = 0;
            const duration = 1500;
            const increment = target / (duration / 16);
            const animate = () => {
                start += increment;
                if (start < target) {
                    setCount(Math.floor(start));
                    requestAnimationFrame(animate);
                } else {
                    setCount(target);
                }
            };
            animate();
        }, [target]);
        return count.toLocaleString();
    };
    return (
        <div className="w-full mb-3 rounded-2xl bg-linear-to-r from-[#0D7A95] to-[#22A4C4] py-14 flex flex-col items-center">
            <h2 className="text-white text-xl font-semibold mb-12 tracking-wide text-center">
                ACHIEVED LAST YEAR, THANKS TO YOUR SUPPORT
            </h2>


            <div className="flex flex-col md:flex-row gap-10 md:gap-14">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`w-48 h-48 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center shadow-xl bg-linear-to-br ${item.bg} transform transition duration-300 hover:scale-110`}
                    >
                        <p className={`text-3xl md:text-4xl font-extrabold ${item.text}`}>
                            <Counter target={item.value} />
                        </p>
                        <p className={`text-xs md:text-sm font-semibold text-center px-4 mt-2 ${item.text}`}>
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExtraSection;