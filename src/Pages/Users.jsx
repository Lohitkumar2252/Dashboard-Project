import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

import { fetchUsers } from "../Data";
import UserCard from "../Components/UserCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SelectedPlan, setSelectedPlan] = useState("");
  const [FilteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetchUsers();
        setUsers(response);
        setFilteredUsers(response)
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  const handleFilterUsers = (selected) => {
    setSelectedPlan(selected);

    if (selected === "") {
      setFilteredUsers(Users); 
    } else {
      const filtered = Users.filter((user) => user.plan === selected);
      setFilteredUsers(filtered);
    }
  };
  if (loading) return <div className="p-10">Loading...</div>;

  function groupUsers(arr, size) {
    const groups = [];
    for (let i = 0; i < arr.length; i += size) {
      groups.push(arr.slice(i, i + size));
    }
    return groups;
  }

  const groupedUsers = groupUsers(FilteredUsers, 4);

  const pagination = {
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `
<div class="navigation flex justify-end gap-3 px-10">
      <button id="my-prev-button" class="border-2 px-2 rounded-lg border-[#87878785]"><img src="/prev_arrow.svg" class="w-6" alt="previous" /></button>
      <div class="pagination border border-[#acacac85] p-2 rounded-lg">
        <span class="${currentClass}"></span>
        of
        <span class="${totalClass}"></span>
      </div>
      <button id="my-next-button"class="border-2 px-2 rounded-lg border-[#87878785]"><img src="/next_arrow.svg" alt="next" class="w-6"/></button>
  
</div>
`;
    },
  };

  return (
    <div className="w-full overflow-y-auto p-3">
      <Header NoUsers={Users.length} page="users" />
      <div className="wrapper mt-10 w-full border rounded-xl p-4 border-[#b3b3b3]">
        <select
          value={SelectedPlan}
          onChange={(e) => handleFilterUsers(e.target.value)}
          name="plan"
          id="#planFilter"
          className="border border-[#a4a4a4] py-1 outline-none rounded-lg mb-5 px-3"
        >
          <option value="">All Plans</option>
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>
       
        <div className="usersContainer w-full h-full relative">
          <div className="header flex items-center justify-between px-1 py-2 border-b border-b-[#6b6a6a90] text-[#5B5F68] ">
            <h3 className="w-full  text-left">Name</h3>
            <h3 className="w-full  text-left">Email</h3>
            <h3 className="w-full  text-left">Plan</h3>
            <h3 className="w-full  text-left">MRR</h3>
            <h3 className="w-full  text-left">Actions</h3>
          </div>
          <Swiper
          key={SelectedPlan}
            pagination={pagination}
            navigation={true}
            navigation={{
              nextEl: "#my-next-button",
              prevEl: "#my-prev-button",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-full"
          >
            {groupedUsers.map((group, i) => {
              return (
                <SwiperSlide>
                  <div key={i} className="grid grid-rows-4 grid-flow-col gap-2">
                    {group.map((user, i) => {
                      return (
                        <UserCard
                          key={i}
                          name={user.name}
                          MRR={user.mrr}
                          plan={user.plan}
                          action="edit"
                          email={user.email}
                        />
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Users;
