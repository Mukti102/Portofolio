import { Iskills } from "@/types/SkillsTypes";
function SkillCard({ item }: { item: Iskills }) {
  return (
    <div className="sm:w-[30%] w-full bg-slate-50 shadow-md dark:border-slate-800 border-slate-300 border-[.7px] rounded-md  h-max dark:bg-[#050b16] px-5 py-5">
      {" "}
      <item.icon />
      <h1 className="font-[700]">{item?.title}</h1>
      <p className="font-[300] mt-3 text-slate-400 text-sm">
        {item?.description}
      </p>
    </div>
  );
}

export default SkillCard;