import React from "react";

import { Button, Img, List, Text } from "components";

const GBillDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1877px] mx-auto md:px-5 w-full">
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
              <div className="flex flex-col items-center justify-start mt-[55px] w-full">
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
              <div className="flex flex-col items-center justify-start mt-3.5 w-full">
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
              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
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
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
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
              <div className="flex flex-col items-center justify-start mt-[68px] w-[73%] md:w-full">
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
          <div className="flex md:flex-1 flex-col gap-11 items-center justify-start md:mt-0 mt-8 w-[14%] md:w-full">
            <Img
              className="h-[254px] md:h-auto object-cover w-[254px]"
              src="images/img_calculating.png"
              alt="calculating"
            />
            <div className="flex flex-col gap-[7px] items-center justify-start w-[91%] md:w-full">
              <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded-br-[50px] text-center text-white-A700 text-xl">
                Staff Payroll
              </Button>
              <Button className="border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded text-center text-indigo-900 text-xl">
                Patient Billing
              </Button>
              <Button className="border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded text-center text-indigo-900 text-xl">
                Purchase Billing
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col justify-start w-[76%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex sm:flex-1 flex-col gap-[5px] items-start justify-start sm:mt-0 mt-[59px] w-[17%] sm:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Bill Details
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    BIll Details
                  </Text>
                  <Img
                    className="h-[19px] mt-[3px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Staff Payroll
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col items-center justify-start mb-[22px] p-[3px] w-[16%] sm:w-full">
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
              className="md:ml-[0] ml-[543px] mt-[111px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtPoppinsMedium32"
            >
              Staff Payroll
            </Text>
            <div className="flex flex-col font-inter items-center justify-start md:ml-[0] ml-[316px] mt-[103px] w-[47%] md:w-full">
              <div className="md:gap-5 gap-[102px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-center justify-start p-5 rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[92px] md:h-auto mb-[13px] mt-[5px] object-cover w-[98%]"
                      src="images/img_businessaccount.png"
                      alt="businessaccount"
                    />
                  </div>
                  <Text
                    className="capitalize text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Add Account
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[27px] justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-start justify-end p-[31px] sm:px-5 rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[84px] md:h-auto mt-1 object-cover w-[89%]"
                      src="images/img_pad.png"
                      alt="pad"
                    />
                  </div>
                  <Text
                    className="capitalize md:ml-[0] ml-[22px] text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Account List
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[29px] items-center justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-start justify-start p-2.5 rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[88px] md:h-auto mb-[23px] mt-[19px] object-cover w-[91%]"
                      src="images/img_businesswomanmaking.png"
                      alt="businesswomanma"
                    />
                  </div>
                  <Text
                    className="capitalize text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Add Payment
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-center justify-start p-[19px] rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[82px] md:h-auto mb-2.5 mt-5 object-cover w-[98%]"
                      src="images/img_angrybusinesswoman.png"
                      alt="angrybusinesswo"
                    />
                  </div>
                  <Text
                    className="capitalize text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Payment List
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[25px] items-center justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-end justify-start p-2 rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[98px] md:h-auto my-[18px] object-cover w-[86%]"
                      src="images/img_cardholder.png"
                      alt="cardholder"
                    />
                  </div>
                  <Text
                    className="capitalize text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Debit Report
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
                  <div className="bg-blue-100 flex flex-col h-[150px] items-end justify-start p-5 rounded-[50%] shadow-bs2 w-[150px]">
                    <Img
                      className="h-[92px] md:h-auto my-[9px] object-cover w-[90%]"
                      src="images/img_mobilebankingcashback.png"
                      alt="mobilebankingca"
                    />
                  </div>
                  <Text
                    className="capitalize text-black-900 text-center text-xl"
                    size="txtInterRegular20"
                  >
                    Credit Report
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GBillDetailsPage;
