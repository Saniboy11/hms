import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, List, ReactTable, Text } from "components";
import GAddPatientAssignDoctorRow from "components/GAddPatientAssignDoctorRow";

const GPatientsPage = () => {
  const table2Data = React.useRef([
    {
      name: " Diase",
      id: "93874563",
      emailTwo: "garysy@mail.com",
      phonenumber: "(219) 555-0114",
      dateadded: "05:20 PM",
      status: "images/img_arrowright.svg",
    },
    {
      name: "Wawy",
      id: "93874563",
      emailTwo: "kristinw@mail.com",
      phonenumber: "(219) 555-0114",
      dateadded: "05:20 PM",
      status: "images/img_arrowright.svg",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-start sm:w-full">
            <Img
              className="h-[50px] w-[50px]"
              src="images/img_user_15.svg"
              alt="user"
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtPoppinsSemiBold16"
              >
                Gary Classy
              </Text>
              <Text
                className="text-[13px] text-blue_gray-200 w-auto"
                size="txtPoppinsMedium13"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[538px] sm:px-5 px-[35px] py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            Name
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[142px] py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            ID
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("emailTwo", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[35px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[222px] py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            Email
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[211px] py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            Phone number
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("dateadded", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtPoppinsSemiBold16"
            >
              22/12/2022
            </Text>
            <Text
              className="text-[13px] text-blue_gray-200 w-auto"
              size="txtPoppinsMedium13"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[192px] pl-[5px] py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            Date added
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between py-[9px]">
            <Button className="bg-pink-50 cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[74px] mt-[33px] py-1 rounded-md text-[11px] text-center text-red-A200_01">
              Out Patient
            </Button>
            <Button className="bg-gray-50 flex h-8 items-center justify-center mt-[30px] p-1.5 rounded-md w-8">
              <Img
                className="h-[19px]"
                alt="arrowright"
                src="info?.getValue()"
              />
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[201px] pl-2.5 py-[9px] text-base text-blue_gray-200 tracking-[0.48px]"
            size="txtPoppinsSemiBold16Bluegray200"
          >
            STATUS
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between max-w-[1873px] mx-auto md:px-5 w-full">
          <List
            className="bg-indigo-900 flex flex-col gap-[13px] md:mt-0 mt-[15px] p-[11px] rounded-[25px] w-[7%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
              <Img
                className="h-[60px] md:h-auto object-cover rounded-[20px] w-[60px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[55px] w-full"
                onClick={() => navigate("/ghome")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-3.5 rounded-[50%] w-[70px]">
                  <Img src="images/img_settings.svg" alt="settings" />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Patients
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3.5 w-full"
                onClick={() => navigate("/gdoctor")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[17px] rounded-[50%] w-[70px]">
                  <Img className="h-9" src="images/img_car.svg" alt="car" />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Doctors
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[13px] w-full"
                onClick={() => navigate("/gemr")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_group300.svg"
                    alt="group300"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  EMR
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div
                className="common-pointer flex flex-col items-center justify-start w-[89%] md:w-full"
                onClick={() => navigate("/gdiagnostic")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-4 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[37px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Diagnostics
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3 w-full"
                onClick={() => navigate("/gappointments")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-3 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[45px]"
                    src="images/img_calendar_white_a700.svg"
                    alt="calendar"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Appointment
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3 w-[78%] md:w-full"
                onClick={() => navigate("/gbilldetails")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_car_white_a700.svg"
                    alt="car"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Bill Details
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[68px] w-[73%] md:w-full"
                onClick={() => navigate("/gprofile")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Profile
                </Text>
              </div>
            </div>
          </List>
          <div className="flex md:flex-1 flex-col justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between w-full">
              <Img
                className="h-[254px] md:h-auto md:mt-0 mt-6 object-cover w-[254px]"
                src="images/img_medicalselfcontrol.png"
                alt="medicalselfcont"
              />
              <div className="flex flex-col items-center justify-start pb-3.5 pl-3.5">
                <div className="flex flex-col gap-[33px] items-start justify-start mb-[50px] w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-[59px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                        size="txtPoppinsMedium32"
                      >
                        Patients
                      </Text>
                      <Text
                        className="text-base text-gray-900_87"
                        size="txtPoppinsMedium16"
                      >
                        Patients
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[21px] p-[3px] w-[16%]">
                      <div className="flex flex-col gap-2 items-center justify-start mb-[29px] mt-6 w-[99%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-[11px] mt-[3px]"
                            src="images/img_contrast.svg"
                            alt="contrast"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_clock.svg"
                            alt="clock"
                          />
                          <Img
                            className="h-[9px] mt-1.5"
                            src="images/img_lock_black_900.svg"
                            alt="lock"
                          />
                          <Img
                            className="h-[13px] mt-0.5"
                            src="images/img_vector_black_900_13x2.svg"
                            alt="vector"
                          />
                          <Img
                            className="h-[13px] mt-1.5"
                            src="images/img_location.svg"
                            alt="location"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_music.svg"
                            alt="music"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_clock.svg"
                            alt="clock_One"
                          />
                          <Img
                            className="h-[13px]"
                            src="images/img_vector.svg"
                            alt="vector_One"
                          />
                          <Img
                            className="h-[9px] mt-[5px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Img
                            className="h-[13px] mt-0.5"
                            src="images/img_vector_black_900_13x2.svg"
                            alt="vector_Two"
                          />
                          <Img
                            className="h-3 mt-[3px]"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                          <Img
                            className="h-[13px]"
                            src="images/img_reply.svg"
                            alt="reply"
                          />
                          <Img
                            className="h-[13px]"
                            src="images/img_vector_black_900_13x3.svg"
                            alt="vector_Three"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_contrast_black_900.svg"
                            alt="contrast_One"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <Img
                            className="h-[9px] mt-1.5 w-2"
                            src="images/img_clock.svg"
                            alt="clock_Two"
                          />
                          <Img
                            className="h-[18px]"
                            src="images/img_checkmark_red_500.svg"
                            alt="checkmark_One"
                          />
                          <Img
                            className="h-[13px]"
                            src="images/img_contrast_black_900_13x7.svg"
                            alt="contrast_Two"
                          />
                          <Img
                            className="h-[13px] mt-1.5"
                            src="images/img_cut_black_900.svg"
                            alt="cut"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Img
                            className="h-6"
                            src="images/img_checkmark_black_900.svg"
                            alt="checkmark_Two"
                          />
                          <Img
                            className="h-[25px] w-[26px]"
                            src="images/img_vector_black_900.svg"
                            alt="vector_Four"
                          />
                          <Img
                            className="h-6 w-[25px]"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                          <Img
                            className="h-6"
                            src="images/img_checkmark_black_900.svg"
                            alt="checkmark_Three"
                          />
                          <Img
                            className="h-6"
                            src="images/img_location_black_900.svg"
                            alt="location_One"
                          />
                          <Img
                            className="h-[26px]"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                          <Img
                            className="h-6"
                            src="images/img_checkmark_black_900.svg"
                            alt="checkmark_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1241px] md:ml-[0] ml-[5px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        List of Patients
                      </Text>
                      <Text
                        className="text-blue_gray-200 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        345 available doctors
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[14%]">
                      <Button
                        className="common-pointer bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[168px] px-5 py-2.5 rounded-md"
                        onClick={() => navigate("/gaddpatientbasicinfo")}
                        leftIcon={
                          <Img
                            className="h-5 mr-2"
                            src="images/img_contrast_white_a700.svg"
                            alt="contrast"
                          />
                        }
                      >
                        <div className="font-semibold leading-[normal] text-left text-white-A700 text-xs">
                          Add new Patient
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] w-[89%] md:w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table2Columns}
                  data={table2Data.current}
                  rowClass={""}
                  headerClass="bg-gray-50"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-9 items-start justify-between mt-[3px] w-full">
                <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] mb-[27px] min-w-[230px] py-2.5 rounded-br-[50px] text-center text-white-A700 text-xl">
                  Out Patient
                </Button>
                <GAddPatientAssignDoctorRow
                  className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:mt-0 mt-[27px]"
                  userimage="images/img_user_17.svg"
                  username="Kristin Watson"
                  usersurname=" Diase"
                  userid="93874563"
                  useremail="kristinw@mail.com"
                  userphone="(219) 555-0114"
                  userdate="22/12/2022"
                  usertime="05:20 PM"
                  userlabel="Out Patient"
                  usericon="images/img_arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GPatientsPage;
