import Link from "next/link";
import { SidebarData } from "../data/sidebar-data";

function AdminSidebar() {
  return (
    <div className="bg-white h-full flex-[1]">
      <div className="w-max h-full flex flex-col justify-between items-center bg-dark-blue text-white font-poppins text-[20px] text-center font-semibold">
        <div className="flex flex-col gap-4 w-max h-max p-12 justify-center items-center">
          <div className="w-30 h-30 mb-10 rounded-full bg-white" />
          {SidebarData.map((category) => (
            <Link
              key={category.id}
              className="hover:bg-white hover:text-blue w-60 py-4 rounded-lg"
              href={category.link}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <button className="py-4 w-60 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:text-blue my-12">
          Log out
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
