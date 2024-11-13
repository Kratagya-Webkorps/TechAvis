import React from "react";

const data = [
  {
    team: "Development",
    role: "Front-end development",
    location: "Remote/USA",
  },
  { team: "Design", role: "UI/UX designer", location: "Remote/USA" },
  { team: "Finance", role: "Sr Finance Manager", location: "Remote/USA" },
  {
    team: "Development",
    role: "Front-end development",
    location: "Remote/USA",
  },
];

const Career_roles:React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center md:justify-start md:ml-20">
        <p className="font-medium text-[44px]">Open Roles</p>
      </div>
      <div className="flex items-center justify-center ">
        <table className="w-full bg-white border-collapse border-spacing-y-[49px] md:mr-24">
          <thead className="border-b">
            <tr>
              <th className="font-normal text-xl py-3 px-4">Team</th>
              <th className="font-normal text-xl py-3 px-4">Role</th>
              <th className="font-normal text-xl py-3 px-4">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center ">
                <td className="py-4 px-4 md:text-[27px] font-medium leading-[34px]">
                  {item.team}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-block bg-[#5C25F9] text-white font-normal px-4 py-1 rounded-full text-sm md:text-2xl">
                    {item.role}
                  </span>
                </td>
                <td className="py-4 px-4 md:text-[27px] font-medium leading-[34px]">
                  {item.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Career_roles;
