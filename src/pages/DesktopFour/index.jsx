import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const DesktopFourPage = () => {
  const sideBarMenu = [
    {
      label: "Home",
      href: "/ghome",
      active: window.location.pathname === "/ghome",
    },
    { label: "Patient", href: "/", active: window.location.pathname === "/" },
    { label: "Doctors" },
    {
      label: "EMR",
      href: "/gemr",
      active: window.location.pathname === "/gemr",
    },
    {
      label: "Diagnostic",
      href: "/gdiagnostic",
      active: window.location.pathname === "/gdiagnostic",
    },
    {
      label: "Appointment",
      href: "/gappointments",
      active: window.location.pathname === "/gappointments",
    },
    {
      label: "Billing",
      href: "/gpurchasebilling",
      active: window.location.pathname === "/gpurchasebilling",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start md:px-5 w-[94%] md:w-full">
          <Sidebar className="!sticky !w-[221px] bg-blue_gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-500 flex flex-col items-start justify-start p-2.5 w-full">
              <Text
                className="md:ml-[0] ml-[63px] text-black-900 text-xl"
                size="txtInterRegular20"
              >
                LOGO
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[63px] text-black-900 text-xl"
              size="txtInterRegular20"
            >
              LOGO
            </Text>
            <div className="flex flex-row gap-[15px] items-start justify-center md:ml-[0] ml-[37px] mr-[60px] mt-[50px] w-[57%]">
              <div className="bg-gray-600_01 h-[51px] rounded-[25px] w-[51px]"></div>
              <div className="flex flex-col items-start justify-start mt-1">
                <Text
                  className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                  size="txtInterRegular22"
                >
                  Rahul
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] text-[10px] text-black-900"
                  size="txtInterRegular10"
                >
                  ADMIN
                </Text>
              </div>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "16px",
                  "flex-direction": "column",
                  color: "#000000",
                  "font-size": "23px",
                  [`&:hover, &.ps-active`]: {
                    color: "#5d5d5d",
                    "font-weight": "400 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[445px] mt-[34px] md:pr-10 pr-20 sm:pr-5 w-[64%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[13px] items-center justify-start md:mt-0 mt-[26px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <Text
                className="sm:mt-0 mt-[11px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterRegular30"
              >
                {" "}
                9 September 2022
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                PATIENTS
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <Button className="bg-blue_gray-100 cursor-pointer leading-[normal] min-w-[134px] py-[7px] rounded-[5px] text-black-900 text-center text-xs">
                Select Date
              </Button>
              <div className="flex flex-row gap-2.5 items-center justify-between w-[16%]">
                <div className="bg-blue_gray-100 flex flex-row gap-[9px] items-center justify-center p-1.5 rounded">
                  <Img
                    className="h-2.5 ml-1.5 w-2.5"
                    src="images/img_plus_black_900.svg"
                    alt="plus"
                  />
                  <Text
                    className="mr-4 text-black-900 text-xs"
                    size="txtInterRegular12"
                  >
                    Add
                  </Text>
                </div>
                <Button
                  className="bg-blue_gray-100 cursor-pointer flex items-center justify-center min-w-[78px] px-[11px] py-[7px] rounded"
                  leftIcon={
                    <Img
                      className="h-2.5 mt-px mb-[3px] mr-2"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  }
                >
                  <div className="leading-[normal] text-black-900 text-left text-xs">
                    Delete
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
