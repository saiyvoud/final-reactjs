import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SchoolIcon from "@mui/icons-material/School";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalLibrary from "@mui/icons-material/LocalLibrary";
import AccessTime from "@mui/icons-material/AccessTime";
import ClassIcon from "@mui/icons-material/Apartment";
import Sousaka from "../../sousaka.jpeg";
import Settings from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
function SidebarView() {
  const navigate = useNavigate();
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar  backgroundColor="#6495ed" style={{ height: "100vh" , fontWeight: "bold" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              // collapseSidebar();
              alert("Ok");
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <div className="container">
              <img
                src={Sousaka}
                alt="sousaka"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </div>
          </MenuItem>

          <MenuItem
            icon={<HomeOutlinedIcon />}
            style={{ color: "black" }}
            onClick={() => {
              alert("ໜ້າຫຼັກ");
            }}
          >
            ໜ້າຫຼັກ
          </MenuItem>
          <MenuItem icon={<SchoolIcon />}  onClick={() => {
              alert("ອາຈານສອນ");
            }}>ອາຈານສອນ</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}  onClick={() => {
              alert("ນັກຮຽນ");
            }}>ນັກຮຽນ</MenuItem>
          <SubMenu icon={<ContactsOutlinedIcon />} label="ຈັດການການຮຽນການສອນ">
            <MenuItem icon={<CalendarMonthIcon />}>ປີ</MenuItem>
            <MenuItem icon={<SchoolIcon />}>ສາຂາ</MenuItem>
            <MenuItem icon={<AccessTime />}>ພາກຮຽນ</MenuItem>
            <MenuItem icon={<LocalLibrary />}>ວິຊາຮຽນ</MenuItem>
            <MenuItem icon={<ClassIcon />}>ຫ້ອງຮຽນ</MenuItem>
          </SubMenu>
          <MenuItem icon={<ReceiptOutlinedIcon />}  onClick={() => {
              alert("ລາຍງານ");
            }}>ລາຍງານ</MenuItem>
            <MenuItem icon={<Settings />}  onClick={() => {
              alert("ກຳນົດສິດ");
            }}>ກຳນົດສິດ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}  onClick={() => {
             navigate("/login")
            }}>ອອກລະບົບ</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 className="text-red-500 text-[50px]">
          Welcome to Sousaka Collect
        </h1>
      </main>
    </div>
  );
}
export default SidebarView;
