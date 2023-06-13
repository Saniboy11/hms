import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";

const GAddPatientProblemsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between max-w-[1876px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-1 flex-col gap-[18px] justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-3 justify-start md:mt-0 mt-6 w-[15%] md:w-full">
                <Img
                  className="h-[254px] md:h-auto object-cover w-[254px]"
                  src="images/img_medicalselfcontrol.png"
                  alt="medicalselfcont"
                />
                <Text
                  className="md:ml-[0] ml-[47px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Problems
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[37px] md:mt-0 mt-[59px] w-1/4 md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Add Patient
                </Text>
                <div className="flex flex-row items-start justify-start mt-[5px] w-[47%] md:w-full">
                  <Text
                    className="common-pointer text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gpatientstwo")}
                  >
                    Patients
                  </Text>
                  <Img
                    className="h-[19px] ml-1 mt-[3px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="ml-[5px] text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Add Patient
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[51px] w-full">
                  <div
                    className="common-pointer flex flex-row items-center justify-evenly w-[47%]"
                    onClick={() => navigate("/gaddpatientbasicinfo")}
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
                  <div className="h-12 relative w-[36%]">
                    <Line className="absolute bg-light_green-700 bottom-[6%] h-[3px] inset-x-[0] mx-auto w-full" />
                    <Text
                      className="absolute bottom-[8%] left-[15%] text-light_green-700 text-xl"
                      size="txtPoppinsSemiBold20Lightgreen700"
                    >
                      Problems
                    </Text>
                    <Text
                      className="absolute h-full inset-y-[0] left-[0] my-auto md:text-3xl sm:text-[28px] text-[32px] text-light_green-700"
                      size="txtPoppinsSemiBold32Lightgreen700"
                    >
                      2
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[785px] p-[3px] w-[13%] md:w-full">
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
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[47px] w-[76%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[41%] md:w-full">
                <Text
                  className="mt-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Symptoms
                </Text>
                <Text
                  className="mb-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Problem
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-11 items-center justify-start mt-0.5 w-[68%] md:w-full">
                <TextArea
                  className="border border-gray-400 border-solid leading-[normal] pb-[35px] pl-[25px] pr-[35px] pt-3 sm:px-5 rounded text-[13px] placeholder:text-gray-400 text-gray-400 text-left w-[48%] sm:w-full"
                  name="group211"
                  placeholder="Enter the Symptoms"
                  name="group211"
                  placeholder="Enter the Symptoms"
                ></TextArea>
                <div className="border border-gray-400 border-solid flex flex-col items-start justify-start p-3 rounded">
                  <Text
                    className="mb-[105px] ml-3 md:ml-[0] text-[13px] text-gray-400"
                    size="txtPoppinsRegular13"
                  >
                    Enter problem details
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[51px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Medical History
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3.5 w-3/4 md:w-full">
                <Text
                  className="mb-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Chronic Disease
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[312px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Ailments
                </Text>
                <Text
                  className="md:ml-[0] ml-[372px] md:mt-0 mt-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Allergic To
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-0.5 w-full">
                <Input
                  name="group208"
                  placeholder="Enter Door No."
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                ></Input>
                <Input
                  name="group207"
                  placeholder="Enter Area / Locality"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                ></Input>
                <Input
                  name="group206"
                  placeholder="Enter City"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pb-[9px] pl-[25px] pr-3 pt-3 rounded w-full"
                ></Input>
              </div>
              <Text
                className="mt-[27px] text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Operation History
              </Text>
              <TextArea
                className="border border-gray-400 border-solid leading-[normal] mt-[3px] pb-[35px] pl-[25px] pr-[35px] pt-3 sm:px-5 rounded text-[13px] placeholder:text-gray-400 text-gray-400 text-left w-[32%] sm:w-full"
                name="group210"
                placeholder="Enter the Operations histories"
                name="group210"
                placeholder="Enter the Operations histories"
              ></TextArea>
              <Button
                className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[110px] md:ml-[0] ml-[594px] mt-10 py-[11px] rounded text-[13px] text-center text-white-A700"
                onClick={() => navigate("/gpatientstwo")}
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GAddPatientProblemsPage;
