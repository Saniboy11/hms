import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const GAddPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between max-w-[1875px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-1 flex-col gap-[31px] justify-start w-[92%] md:w-full">
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
                    className="common-pointer text-base text-gray-900_87"
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
                    className="common-pointer text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gbilldetails")}
                  >
                    Staff Payroll
                  </Text>
                  <Img
                    className="h-[19px] mt-[3px]"
                    src="images/img_forward.svg"
                    alt="forward_One"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-28 justify-start md:ml-[0] ml-[13px] w-[67%] md:w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-[115px] text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Add Payment
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[23px] p-[3px]">
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
                <Text
                  className="md:ml-[0] ml-[294px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Add Payment
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[7px] items-start justify-start ml-3 md:ml-[0] w-[84%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[52%] md:w-full">
                <Button
                  className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded-[5px] text-center text-indigo-900 text-xl"
                  onClick={() => navigate("/gbilldetails")}
                >
                  Staff Payroll
                </Button>
                <Button
                  className="common-pointer bg-indigo-900 border border-indigo-900 border-solid cursor-pointer flex items-center justify-center min-w-[231px] pl-[25px] pr-5 py-[7px] rounded"
                  onClick={() => navigate("/gpaymentlist")}
                  leftIcon={
                    <Img
                      className="h-[30px] mb-[3px] mr-5"
                      src="images/img_bilistul.svg"
                      alt="bi:list-ul"
                    />
                  }
                >
                  <div className="leading-[normal] md:text-[19px] sm:pl-5 sm:text-[17px] text-[21px] text-left text-white-A700">
                    Payment List
                  </div>
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start w-[17%] md:w-full">
                  <Button
                    className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded text-center text-indigo-900 text-xl"
                    onClick={() => navigate("/gpatientbilling")}
                  >
                    Patient Billing
                  </Button>
                  <Button
                    className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded text-center text-indigo-900 text-xl"
                    onClick={() => navigate("/gpurchasebilling")}
                  >
                    Purchase Billing
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-3 w-[66%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="sm:mt-0 mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      Date
                    </Text>
                    <div className="border border-gray-400 border-solid h-[49px] rounded w-[72%]"></div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-7 w-full">
                    <Text
                      className="mb-1 sm:mt-0 mt-[9px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      Account Name
                    </Text>
                    <Input
                      name="group125"
                      placeholder="Select Option"
                      className="font-inter leading-[normal] p-0 placeholder:text-black-900_7f sm:px-5 text-black-900_7f text-left text-lg w-full"
                      wrapClassName="border border-gray-400 border-solid sm:flex-1 pb-2.5 pt-4 px-[34px] rounded sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-7 w-full">
                    <Text
                      className="sm:mt-0 mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      Pay To
                    </Text>
                    <div className="border border-gray-400 border-solid h-[49px] rounded w-[72%]"></div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-7 w-full">
                    <Text
                      className="sm:mt-0 mt-2.5 sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      Description
                    </Text>
                    <div className="border border-gray-400 border-solid h-[142px] rounded w-[72%]"></div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mt-7 w-full">
                    <Text
                      className="mb-0.5 sm:mt-0 mt-[11px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                      size="txtPoppinsRegular23"
                    >
                      Account
                    </Text>
                    <div className="border border-gray-400 border-solid h-[49px] rounded w-[72%]"></div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[55px] items-end justify-start mt-[39px] w-3/5 md:w-full">
                    <div className="flex flex-row items-end justify-between w-[69%] sm:w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtPoppinsRegular23"
                      >
                        Status
                      </Text>
                      <div className="flex flex-row font-inter gap-[21px] items-center justify-start mb-[3px] mt-1.5">
                        <div className="bg-blue_gray-100 h-5 my-0.5 rounded-[50%] w-5"></div>
                        <Text
                          className="text-black-900 text-xl"
                          size="txtInterRegular20"
                        >
                          Active
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row font-inter gap-[21px] items-center justify-start mb-[3px] sm:mt-0 mt-1.5 w-[22%] sm:w-full">
                      <div className="bg-blue_gray-100 h-5 my-0.5 rounded-[50%] w-5"></div>
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        InActive
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[26px] items-center justify-start md:ml-[0] ml-[285px] mt-[49px] w-[27%] md:w-full">
                    <Button
                      className="common-pointer bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[110px] px-[23px] py-[11px] rounded"
                      onClick={() => navigate("/gbilldetails")}
                      leftIcon={
                        <div className="h-5 mb-px mr-[9px] w-5 bg-white-A700">
                          <Img
                            className="h-5"
                            src="images/img_camera.svg"
                            alt="camera"
                          />
                        </div>
                      }
                    >
                      <div className="font-bold leading-[normal] sm:px-5 text-[13px] text-left text-white-A700">
                        SAVE
                      </div>
                    </Button>
                    <Button
                      className="bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[110px] px-5 py-[9px] rounded"
                      leftIcon={
                        <Img
                          className="mr-2.5"
                          src="images/img_contrast_white_a700_23x21.svg"
                          alt="contrast"
                        />
                      }
                    >
                      <div className="font-bold leading-[normal] text-[13px] text-left text-white-A700">
                        RESET
                      </div>
                    </Button>
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

export default GAddPaymentPage;
