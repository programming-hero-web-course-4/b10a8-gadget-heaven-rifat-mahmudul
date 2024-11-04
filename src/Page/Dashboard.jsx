import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {


  return (
    <section className="bg-[#F7F7F7]">
      <div className="bg-purple-600 pt-5 pb-7">
        <div className="text-white text-center">
          <h1 className="sm:text-5xl text-3xl font-bold sm:max-w-[80%] mx-auto">Dashboard</h1>
          <p className="mt-6 mb-4 sm:max-w-xl mx-auto">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? `py-2 px-5 bg-white rounded-3xl text-purple-600 font-bold mr-5`
                : `mr-5 py-2 px-5 rounded-3xl border border-white bg-inherit font-bold`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive
                ? `py-2 px-5 bg-white rounded-3xl text-purple-600 font-bold mr-5`
                : `mr-5 py-2 px-5 rounded-3xl border border-white bg-inherit font-bold`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
