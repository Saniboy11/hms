import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  FloatingInput,
  Img,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import GAddPatientAssignDoctorRow from "components/GAddPatientAssignDoctorRow";

const physcologistOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GAddPatientAssigndoctorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] pl-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between max-w-[1898px] mx-auto md:px-5 w-full">
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
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[13px] w-full"
                onClick={() => navigate("/gpatientstwo")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_cut.svg"
                  alt="cut"
                />
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
              <div className="flex flex-col items-center justify-start mt-3 w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-3 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[45px]"
                    src="images/img_bag.svg"
                    alt="bag"
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
          <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
              <Img
                className="h-[254px] md:h-auto md:mt-0 mt-6 object-cover w-[254px]"
                src="images/img_onlineconsultation.png"
                alt="onlineconsultat"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[37px] w-[39%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Add Appointment
                </Text>
                <div className="flex flex-row items-start justify-start mt-[3px] w-[46%] md:w-full">
                  <Text
                    className="common-pointer text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gappointments")}
                  >
                    Appointments
                  </Text>
                  <Img
                    className="h-[19px] ml-[5px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="ml-2 text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Add Appointment
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-12 w-full">
                  <div
                    className="common-pointer flex sm:flex-1 flex-row items-center justify-evenly w-[30%] sm:w-full"
                    onClick={() => navigate("/gaddpatientbasicinfoapp")}
                  >
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_87"
                      size="txtPoppinsSemiBold32"
                    >
                      1
                    </Text>
                    <Text
                      className="text-black-900_87 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Basic information
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex sm:flex-1 flex-row items-end justify-center w-[19%] sm:w-full"
                    onClick={() => navigate("/gaddpatientproblemsapp")}
                  >
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900_87"
                      size="txtPoppinsSemiBold32"
                    >
                      2
                    </Text>
                    <Text
                      className="mb-1 ml-[3px] mt-[13px] text-black-900_87 text-xl"
                      size="txtPoppinsSemiBold20"
                    >
                      Problems
                    </Text>
                  </div>
                  <div className="h-12 relative w-[27%] sm:w-full">
                    <Line className="absolute bg-light_green-700 bottom-[8%] h-[3px] inset-x-[0] mx-auto w-full" />
                    <Text
                      className="absolute bottom-[4%] right-[5%] text-light_green-700 text-xl"
                      size="txtPoppinsSemiBold20Lightgreen700"
                    >
                      Assign Doctor
                    </Text>
                    <Text
                      className="absolute h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-700"
                      size="txtPoppinsSemiBold32Lightgreen700"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[552px] p-[3px] w-[13%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start mb-[29px] mt-[25px] w-[99%] md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
              <div className="flex flex-col gap-[39px] items-start justify-start md:mt-0 mt-[3px] w-1/4 md:w-full">
                <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Choose Specialization
                    </Text>
                    <SelectBox
                      className="border-2 border-deep_purple-500 border-solid leading-[normal] md:ml-[0] ml-[3px] pb-3 pl-[34px] pr-[21px] pt-5 sm:px-5 rounded text-base text-black-900 text-left w-full"
                      placeholderClassName="text-black-900"
                      indicator={
                        <Img
                          className="h-[13px] mr-[0] w-[13px]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group202"
                      options={physcologistOptionsList}
                      isSearchable={false}
                      placeholder="Physcologist"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] w-[44%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Choose Date
                    </Text>
                    <div className="flex flex-col font-roboto items-start justify-start mt-[3px] rounded-tl rounded-tr w-[181px] sm:w-full">
                      <FloatingInput
                        wrapClassName="bg-transparent border-0 flex pb-3.5 pl-4 pr-[35px] pt-[26px] rounded-tl rounded-tr top-[0] w-full"
                        className="p-0 placeholder:bg-white-A700 placeholder:left-4 placeholder:text-deep_purple-500 placeholder:top-[0] sm:pr-5 text-base text-gray-900_01 text-left tracking-[0.50px] w-full"
                        name="inputtext"
                        labelClasses="bg-white-A700 left-4 top-[0] text-deep_purple-500"
                        focusedClasses="translate-y-[26px] scale-[1]"
                        wrapperClasses="w-full top-[0]"
                        labelText="Date"
                        defaultText="08/17/2023"
                        suffix={
                          <Img
                            className="top-[0] my-auto"
                            src="images/img_lock_gray_800.svg"
                            alt="lock"
                          />
                        }
                      ></FloatingInput>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[3px] w-[94%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtPoppinsMedium24"
                  >
                    Selected Doctor
                  </Text>
                  <div className="h-14 md:h-[54px] relative w-full">
                    <div className="absolute flex flex-row gap-[15px] items-center justify-between left-[0] top-[4%] w-[52%]">
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_user_gray_100.svg"
                        alt="user"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-base text-blue_gray-700 w-auto"
                          size="txtPoppinsSemiBold16"
                        >
                          Brooklyn
                        </Text>
                        <Text
                          className="text-[13px] text-blue_gray-200 w-auto"
                          size="txtPoppinsMedium13"
                        >
                          Duty Doctor
                        </Text>
                      </div>
                    </div>
                    <div className="absolute border-2 border-deep_purple-500 border-solid flex flex-col font-roboto h-full inset-y-[0] items-start justify-end my-auto p-[5px] right-[0] rounded w-[57%]">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-0.5 w-[86%] md:w-full">
                        <div className="flex flex-row gap-[90px] items-center justify-start w-[81%] md:w-full">
                          <Text
                            className="text-deep_purple-500 text-xs tracking-[0.40px]"
                            size="txtRobotoRegular12"
                          >
                            Date
                          </Text>
                          <Text
                            className="text-deep_purple-500 text-xs tracking-[0.40px]"
                            size="txtRobotoRegular12"
                          >
                            Time
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[27px] items-center justify-between mt-[3px] w-full">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-base text-gray-900_01 tracking-[0.50px] w-auto"
                              size="txtRobotoRegular16"
                            >
                              08/17/2023
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-base text-gray-900_01 tracking-[0.50px] w-auto"
                              size="txtRobotoRegular16"
                            >
                              9.30 AM{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] justify-start w-[69%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Available Doctors
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-gray-50 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[7px] rounded-md w-full">
                    <Text
                      className="ml-3 sm:ml-[0] sm:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                      size="txtPoppinsSemiBold16Bluegray200"
                    >
                      Name
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[201px] sm:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                      size="txtPoppinsSemiBold16Bluegray200"
                    >
                      ID
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[155px] sm:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                      size="txtPoppinsSemiBold16Bluegray200"
                    >
                      Phone number
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[212px] sm:mt-0 mt-1 text-base text-blue_gray-200 tracking-[0.48px]"
                      size="txtPoppinsSemiBold16Bluegray200"
                    >
                      Available Timings
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-6 items-center mt-[18px] w-full"
                    orientation="vertical"
                  >
                    <div className="sm:h-[138px] md:h-[81px] h-[83px] relative w-full">
                      <GAddPatientAssignDoctorRow
                        className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto md:pr-10 sm:pr-5 pr-[608px] w-full"
                        userimage="images/img_user_gray_100_50x50.svg"
                        username="Brooklyn"
                        usersurname="Duty Doctor"
                        userid="87364523"
                      />
                      <div className="absolute border border-light_green-700 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[9px] right-[10%] rounded-[5px] w-[35%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              07.30 AM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              08.30 AM
                            </Text>
                            <Text
                              className="bg-gray-100_01 border border-black-900 border-solid h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-black-900 text-sm w-[73px]"
                              size="txtPoppinsMedium14Black900"
                            >
                              09.30 AM
                            </Text>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              10.30 AM
                            </Button>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              11.30 AM
                            </Button>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[5px] w-full">
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              01.30 PM
                            </Button>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              02.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              04.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              05.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              06.30 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:h-[138px] md:h-[81px] h-[83px] relative w-full">
                      <GAddPatientAssignDoctorRow
                        className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-[0] items-center justify-center m-auto md:pr-10 sm:pr-5 pr-[608px] w-full"
                        userimage="images/img_user_50x50.svg"
                        username="Kristin Watson"
                        usersurname="General Shift"
                        userid="93874563"
                      />
                      <div className="absolute border border-light_green-700 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[9px] right-[10%] rounded-[5px] w-[35%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              07.30 AM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              08.30 AM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              09.30 AM
                            </Text>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              10.30 AM
                            </Button>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              11.30 AM
                            </Button>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[5px] w-full">
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              01.30 PM
                            </Button>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              02.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              04.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              05.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              06.30 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:h-[138px] md:h-[81px] h-[83px] relative w-full">
                      <GAddPatientAssignDoctorRow
                        className="absolute bottom-[17%] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[608px] w-full"
                        userimage="images/img_user_1.svg"
                        username="Jacob Jones"
                        usersurname="Ophthalmologists"
                        userid="23847569"
                      />
                      <div className="absolute border border-light_green-700 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[9px] right-[10%] rounded-[5px] w-[35%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-evenly w-full">
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              07.30 AM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              08.30 AM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-1 py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              09.30 AM
                            </Text>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              10.30 AM
                            </Button>
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              11.30 AM
                            </Button>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[5px] w-full">
                            <Button className="bg-light_green-700 cursor-pointer font-medium leading-[normal] min-w-[73px] py-1 rounded-[5px] text-center text-sm text-white-A700">
                              01.30 PM
                            </Button>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              02.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              04.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              05.30 PM
                            </Text>
                            <Text
                              className="bg-light_green-700 h-[29px] justify-center px-[5px] py-[3px] rounded-[5px] text-sm text-white-A700 w-[73px]"
                              size="txtPoppinsMedium14"
                            >
                              06.30 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <Button
                    className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[110px] md:ml-[0] ml-[81px] mt-[159px] py-[11px] rounded text-[13px] text-center text-white-A700"
                    onClick={() => navigate("/gappointments")}
                  >
                    SUBMIT{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GAddPatientAssigndoctorPage;
