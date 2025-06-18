import { TeamSectionProps } from "./type";

export const TeamSection = ({ name, logo }: TeamSectionProps) => (
  <section className="flex justify-center items-center flex-col gap-2 bg-gray-400 p-2 cursor-pointer">
    <h2 className="uppercase text-2xl font-bold text-white">{name}</h2>
    <div className="h-35 w-35 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  </section>
);
