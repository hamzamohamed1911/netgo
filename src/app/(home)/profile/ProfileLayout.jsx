import CustomBreadcrumbs from "../_components/profileComponents/CustomBreadcrumbs";
import Sidebar from "../_components/profileComponents/SideBar";
const ProfileLayout = ({ children }) => {

  return (
    <>
   <div className="h-[20vh] flex justify-center items-center">
   <h1 className="text-4xl font-[500] text-[#171196] text-center">
    الملف الشخصي
    </h1>

   </div>
      <CustomBreadcrumbs />
      <div className="flex flex-col lg:flex-row w-full container mx-auto gap-4">
        <Sidebar />
        <main className="flex-grow lg:w-[calc(100%-20rem)] w-full">
          {children}
        </main>
      </div>
    
    </>
  );
};

export default ProfileLayout;
