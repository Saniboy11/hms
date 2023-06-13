import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const GDiagnosticPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between max-w-[1878px] mx-auto md:px-5 w-full">
          <div className="bg-indigo-900 flex md:flex-1 flex-col gap-3.5 items-center justify-center md:mt-0 mt-[15px] p-[11px] rounded-[25px] w-[7%] md:w-full">
            <div className="flex flex-col items-center justify-start mt-[18px] w-[72%] md:w-full">
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
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_car.svg"
                  alt="car"
                />
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
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_group300.svg"
                  alt="group300"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  EMR
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[23px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-4 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[37px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
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
                    alt="car_One"
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
          </div>
          <div className="flex md:flex-1 flex-col gap-12 items-center justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
              <Img
                className="h-[198px] md:h-auto md:mt-0 mt-[46px] object-cover w-[198px]"
                src="images/img_healthcheckup.png"
                alt="healthcheckup"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[70px] md:mt-0 mt-16">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Diagnostics
                </Text>
                <Text
                  className="mt-0.5 text-base text-gray-900_87"
                  size="txtPoppinsMedium16"
                >
                  Diagnostics
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[1016px] p-[3px] w-[13%] md:w-full">
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
                      alt="lock_One"
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
                      alt="cut_One"
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
            <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between w-[99%] md:w-full">
              <div className="bg-blue-100_7e flex flex-col items-center justify-start md:mt-0 mt-[5px] p-[31px] sm:px-5 rounded-[10px] w-[44%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start mb-[26px] mt-[15px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtPoppinsMedium32"
                  >
                    Book Appointments
                  </Text>
                  <div className="md:gap-5 gap-[111px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div
                      className="common-pointer flex flex-1 flex-col gap-5 items-center justify-start w-full"
                      onClick={() => navigate("/gdbloodtest")}
                    >
                      <div className="flex flex-col h-[150px] items-center justify-start rounded-[50%] shadow-bs1 w-[150px]">
                        <Img
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          src="images/img_handsholdingm.png"
                          alt="handsholdingm"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        Blood Test
                      </Text>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-col gap-[21px] items-center justify-start w-full"
                      onClick={() => navigate("/gdbptest")}
                    >
                      <div className="flex flex-col h-[150px] items-center justify-start rounded-[50%] shadow-bs1 w-[150px]">
                        <Img
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          src="images/img_istockphoto124.png"
                          alt="istockphoto124"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        BP Test
                      </Text>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-col gap-5 items-center justify-start w-full"
                      onClick={() => navigate("/gdultrasonicscan")}
                    >
                      <div className="flex flex-col h-[150px] items-center justify-start rounded-[50%] shadow-bs1 w-[150px]">
                        <Img
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          src="images/img_pregnancyultra.png"
                          alt="pregnancyultra"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        Ultrasonic Scan
                      </Text>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-col gap-[23px] items-center justify-start w-full"
                      onClick={() => navigate("/gdxray")}
                    >
                      <div className="flex flex-col h-[150px] items-center justify-start rounded-[50%] shadow-bs1 w-[150px]">
                        <Img
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          src="images/img_29238486080e288.png"
                          alt="29238486080e288"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        X-Ray
                      </Text>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-col gap-5 items-center justify-start w-full"
                      onClick={() => navigate("/gdrenalscan")}
                    >
                      <div className="flex flex-col h-[150px] items-center justify-start rounded-[50%] shadow-bs1 w-[150px]">
                        <Img
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          src="images/img_360f328481670.png"
                          alt="360f328481670"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        Renal Scan
                      </Text>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-col gap-[21px] items-center justify-start w-full"
                      onClick={() => navigate("/gdctscan")}
                    >
                      <div className="flex flex-col items-center justify-start rounded-bl-[75px] rounded-br-[75px] shadow-bs1 w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-bl-[75px] rounded-br-[75px] w-full"
                          src="images/img_istockphoto118.png"
                          alt="istockphoto118"
                        />
                      </div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsMedium20Black900"
                      >
                        CT Scan
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50_7e flex flex-col items-center justify-end mb-[5px] p-7 sm:px-5 rounded-[10px] w-[55%] md:w-full">
                <div className="flex flex-col items-end justify-start mb-[7px] mt-[25px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtPoppinsMedium32"
                  >
                    Reports
                  </Text>
                  <div className="flex flex-row gap-7 items-end justify-end mt-[19px] w-[32%] md:w-full">
                    <Text
                      className="mb-[3px] mt-[15px] text-gray-900 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Choose Date
                    </Text>
                    <div className="md:h-9 h-[45px] relative w-[47%]">
                      <div className="absolute bottom-[0] font-roboto h-10 md:h-9 inset-x-[0] mx-auto w-full">
                        <div className="absolute bottom-[0] flex h-9 inset-x-[0] justify-end mx-auto w-full">
                          <Text
                            className="mb-2 ml-2 mt-auto text-gray-900_01 text-sm tracking-[0.50px]"
                            size="txtRobotoRegular14"
                          >
                            08/17/2023
                          </Text>
                          <div className="absolute border border-deep_purple-500 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-1.5 rounded-[3px] w-full">
                            <Img
                              className="h-[22px] md:h-auto mt-0.5 object-cover w-[22px]"
                              src="images/img_calendar_22x22.png"
                              alt="calendar_One"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-light_green-50 h-[9px] left-[11%] top-[0] w-[27%]"></div>
                      </div>
                      <Text
                        className="absolute left-[13%] text-black-900 text-xs top-[0]"
                        size="txtPoppinsMedium12Black900"
                      >
                        Date
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[1843px] h-[479px] sm:h-[501px] mt-[23px] relative w-full">
                    <div className="absolute md:h-[1820px] h-[478px] inset-[0] justify-center m-auto w-full">
                      <div className="bg-blue-100 h-[52px] mx-auto rounded-tl-[10px] rounded-tr-[10px] w-full"></div>
                      <div className="absolute border border-blue-100 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto px-[7px] rounded-tl-[21px] rounded-tr-[20px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start py-[15px] w-[98%] md:w-full">
                          <div className="flex flex-col gap-9 justify-start w-[18%] md:w-full">
                            <div className="flex flex-row gap-[38px] items-start justify-start w-[86%] md:w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtPoppinsSemiBold16Black900"
                              >
                                Sl No.
                              </Text>
                              <Text
                                className="text-base text-black-900"
                                size="txtPoppinsSemiBold16Black900"
                              >
                                Date
                              </Text>
                            </div>
                            <div className="flex flex-col font-inter gap-[22px] items-center justify-start md:ml-[0] ml-[17px] w-[88%] md:w-full">
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[43px] items-center justify-start w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  1
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  29/12/2022
                                </Text>
                              </div>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[29.5px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] ml-7 md:ml-[0] w-[56%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtPoppinsSemiBold16Black900"
                              >
                                Report Id
                              </Text>
                              <div className="flex flex-col font-inter gap-[22px] items-center justify-start">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  09C3N7
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[478px] bg-blue-100 w-px" />
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtPoppinsSemiBold16Black900"
                              >
                                Report Name
                              </Text>
                              <div className="flex flex-col font-inter gap-[22px] items-center justify-start">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Blood Test
                                </Text>
                              </div>
                            </div>
                            <Line className="self-center h-[478px] bg-blue-100 w-px" />
                            <div className="flex flex-col gap-9 items-center justify-start w-full">
                              <Text
                                className="text-base text-black-900"
                                size="txtPoppinsSemiBold16Black900"
                              >
                                Patient Name
                              </Text>
                              <div className="flex flex-col font-inter gap-[22px] items-center justify-start">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtInterRegular14"
                                >
                                  Shyam
                                </Text>
                              </div>
                            </div>
                          </List>
                          <div className="flex flex-col gap-9 items-center justify-start mb-3 md:ml-[0] ml-[83px] md:mt-0 mt-[3px] w-[13%] md:w-full">
                            <Text
                              className="text-base text-black-900"
                              size="txtPoppinsSemiBold16Black900"
                            >
                              Status
                            </Text>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
                                <Text
                                  className="text-black-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  Report
                                </Text>
                                <Img
                                  className="h-[9px] mt-1"
                                  src="images/img_instagram.svg"
                                  alt="instagram"
                                />
                                <Img
                                  className="h-[9px] mt-1"
                                  src="images/img_download.svg"
                                  alt="download"
                                />
                              </div>
                              <Text
                                className="mt-[15px] text-red-A700 text-sm"
                                size="txtPoppinsRegular14RedA700"
                              >
                                Not Completed
                              </Text>
                              <Text
                                className="mt-[19px] text-red-A700 text-sm"
                                size="txtPoppinsRegular14RedA700"
                              >
                                Not Completed
                              </Text>
                              <List
                                className="flex flex-col gap-[18px] items-center mt-[18px] w-[93%]"
                                orientation="vertical"
                              >
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Text
                                    className="text-black-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    Report
                                  </Text>
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_instagram.svg"
                                    alt="instagram"
                                  />
                                  <Img
                                    className="h-[9px] mt-1"
                                    src="images/img_download.svg"
                                    alt="download"
                                  />
                                </div>
                              </List>
                              <Text
                                className="mt-[18px] text-red-A700 text-sm"
                                size="txtPoppinsRegular14RedA700"
                              >
                                Not Completed
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-blue-100 h-[478px] inset-y-[0] left-[7%] my-auto w-px" />
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

export default GDiagnosticPage;
