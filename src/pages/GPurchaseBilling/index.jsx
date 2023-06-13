import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const GPurchaseBillingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between max-w-[1876px] mx-auto md:px-5 w-full">
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
              <div className="flex flex-col items-center justify-start mt-3 w-[78%] md:w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_music_indigo_900_70x70.svg"
                    alt="music"
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
          <div className="flex md:flex-1 flex-col gap-[23px] justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="h-[254px] md:h-auto md:mt-0 mt-8 object-cover w-[254px]"
                src="images/img_calculating.png"
                alt="calculating"
              />
              <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[38px] md:mt-0 mt-[59px] w-[16%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Bill Details
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="common-pointer mb-0.5 text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gbilldetails")}
                  >
                    BIll Details
                  </Text>
                  <Img
                    className="h-[19px] mt-[3px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="common-pointer mt-0.5 text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gbilldetails")}
                  >
                    Purchase Billing
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[943px] p-[3px] w-[13%] md:w-full">
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
            <div className="flex flex-col gap-[7px] items-start justify-start ml-3 md:ml-[0] w-[92%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[68%] md:w-full">
                <Button
                  className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] sm:mt-0 mt-5 py-2.5 rounded-[5px] text-center text-indigo-900 text-xl"
                  onClick={() => navigate("/gbilldetails")}
                >
                  Staff Payroll
                </Button>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Purchase Billing
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start w-[15%] md:w-full">
                  <Button
                    className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded text-center text-indigo-900 text-xl"
                    onClick={() => navigate("/gpatientbilling")}
                  >
                    Patient Billing
                  </Button>
                  <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded-br-[50px] text-center text-white-A700 text-xl">
                    Purchase Billing
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[129px] justify-start md:mt-0 mt-[33px] w-4/5 md:w-full">
                  <div className="h-[399px] sm:h-[4743px] relative w-full">
                    <div className="md:h-[387px] h-[399px] sm:h-[4743px] m-auto w-full">
                      <div className="absolute bg-blue_gray-100_3f border border-blue-100 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto p-[39px] sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                        <List
                          className="flex flex-col gap-[9px] items-center mt-[21px] w-[99%]"
                          orientation="vertical"
                        >
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[87px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Eldos M
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[75px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              AO1234
                            </Text>
                            <Text
                              className="ml-10 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              05/05/2026
                            </Text>
                            <Text
                              className="ml-11 sm:ml-[0] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Avail
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[47px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              23
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              100
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[45px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[77px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              10
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[104px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[93px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              90
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[105px] text-base text-black-900"
                              size="txtPoppinsRegular16Black900"
                            >
                              Nil
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="absolute bg-blue-100 border border-blue-100 border-solid flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto p-1.5 rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full">
                        <Text
                          className="mb-2 ml-4 sm:ml-[0] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Sl No.
                        </Text>
                        <Text
                          className="mb-[7px] sm:ml-[0] ml-[35px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Item Name{" "}
                        </Text>
                        <Text
                          className="mb-[7px] sm:ml-[0] ml-[43px] sm:mt-0 mt-0.5 text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Batch No.
                        </Text>
                        <Text
                          className="mb-[7px] sm:ml-[0] ml-[30px] sm:mt-0 mt-0.5 text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Expiry Date
                        </Text>
                        <Text
                          className="mb-[9px] sm:ml-[0] ml-[34px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Stock
                        </Text>
                        <Text
                          className="mb-1.5 sm:ml-[0] ml-[33px] sm:mt-0 mt-0.5 text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Qty
                        </Text>
                        <Text
                          className="mb-[9px] sm:ml-[0] ml-[30px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          MRP
                        </Text>
                        <Text
                          className="mb-[9px] sm:ml-[0] ml-[31px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Disc
                        </Text>
                        <Text
                          className="mb-[9px] ml-9 sm:ml-[0] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Disc Amt
                        </Text>
                        <Text
                          className="mb-[7px] sm:ml-[0] ml-[55px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Text
                        </Text>
                        <Text
                          className="mb-2 sm:ml-[0] ml-[63px] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Net Amt.
                        </Text>
                        <Text
                          className="mb-[9px] ml-10 sm:ml-[0] text-black-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Remarks
                        </Text>
                      </div>
                    </div>
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] left-[7%] my-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] left-[19%] my-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] left-[28%] my-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] left-[38%] my-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] left-[45%] my-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-[0] justify-center m-auto w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] my-auto right-[44%] w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] my-auto right-[39%] w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] my-auto right-[28%] w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] my-auto right-[19%] w-px" />
                    <Line className="absolute bg-blue-100 h-[399px] inset-y-[0] my-auto right-[10%] w-px" />
                  </div>
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-end md:ml-[0] ml-[534px] p-[9px] w-[9%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group656.svg')",
                    }}
                    onClick={() => navigate("/gbilldetails")}
                  >
                    <div className="flex flex-row gap-[9px] items-center justify-center w-[78%] md:w-full">
                      <Img
                        className="h-6 md:h-auto object-cover w-6"
                        src="images/img_upwardarrow.png"
                        alt="upwardarrow"
                      />
                      <Text
                        className="text-[13px] text-white-A700"
                        size="txtPoppinsBold13"
                      >
                        BACK
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GPurchaseBillingPage;
