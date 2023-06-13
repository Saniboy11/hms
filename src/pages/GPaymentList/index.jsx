import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const showOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortByOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const GPaymentListPage = () => {
  const navigate = useNavigate();

  const [grouptwelvevalue, setGrouptwelvevalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1879px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-1 flex-col gap-11 items-center justify-start md:mt-0 mt-8 w-[14%] md:w-full">
            <Img
              className="h-[254px] md:h-auto object-cover w-[254px]"
              src="images/img_calculating.png"
              alt="calculating"
            />
            <div className="flex flex-col gap-[7px] items-center justify-start w-[91%] md:w-full">
              <Button
                className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[230px] py-2.5 rounded-[5px] text-center text-indigo-900 text-xl"
                onClick={() => navigate("/gbilldetails")}
              >
                Staff Payroll
              </Button>
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
          </div>
          <div className="flex md:flex-1 flex-col gap-[53px] justify-start w-[76%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:mt-0 mt-[59px] w-[19%] md:w-full">
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
              <div className="flex md:flex-1 flex-col md:gap-10 gap-28 justify-start w-[81%] md:w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-[114px] text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Payment List
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[22px] p-[3px]">
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
                  Payment List
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[123px] w-[79%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-full">
                <div className="flex md:flex-1 md:flex-col flex-row font-inter gap-[15px] items-center justify-between w-[76%] md:w-full">
                  <SelectBox
                    className="bg-white-A700 border border-black-900_19 border-solid leading-[normal] sm:pl-5 pl-[29px] pr-[19px] py-2 rounded-[5px] text-[10px] text-black-900_7f text-left w-[12%] md:w-full"
                    placeholderClassName="text-black-900_7f"
                    indicator={
                      <Img
                        className="h-[5px] mr-[0] w-[7px]"
                        src="images/img_arrowdown_black_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupFifteen"
                    options={showOptionsList}
                    isSearchable={false}
                    placeholder="Show"
                  />
                  <SelectBox
                    className="bg-white-A700 border border-black-900_19 border-solid leading-[normal] sm:pl-5 pl-[23px] pr-[19px] py-2 rounded-[5px] text-[10px] text-black-900_7f text-left w-[12%] md:w-full"
                    placeholderClassName="text-black-900_7f"
                    indicator={
                      <Img
                        className="h-[5px] mr-[0] w-[7px]"
                        src="images/img_arrowdown_black_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupSeventeen"
                    options={sortByOptionsList}
                    isSearchable={false}
                    placeholder="Sort By"
                  />
                  <div className="flex flex-col items-center justify-start sm:w-full">
                    <Input
                      name="groupTwelve"
                      placeholder="Search"
                      value={grouptwelvevalue}
                      onChange={(e) => setGrouptwelvevalue(e)}
                      className="leading-[normal] p-0 placeholder:text-black-900_7f sm:pr-5 text-[10px] text-black-900_7f text-left w-full"
                      wrapClassName="bg-white-A700 border border-black-900_19 border-solid flex pl-[9px] pr-[35px] py-2 rounded-[5px] w-full"
                      prefix={
                        <div className="mr-[7px] w-[7px] bg-black-900_7f my-0.5">
                          <Img
                            className="cursor-pointer my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </div>
                      }
                      suffix={
                        <CloseSVG
                          fillColor="#0000007f"
                          className="cursor-pointer my-auto"
                          onClick={() => setGrouptwelvevalue("")}
                          style={{
                            visibility:
                              grouptwelvevalue?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={8}
                          width={7}
                          viewBox="0 0 7 8"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <Button
                  className="common-pointer bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[224px] pl-[29px] pr-[22px] py-2 rounded"
                  onClick={() => navigate("/gaddpayment")}
                  leftIcon={
                    <div className="h-5 mt-[3px] mb-[5px] mr-[21px] w-5 bg-white-A700">
                      <Img
                        className="h-5"
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                      />
                    </div>
                  }
                >
                  <div className="font-poppins font-semibold leading-[normal] sm:px-5 text-[19px] text-left text-white-A700">
                    Add Payment
                  </div>
                </Button>
              </div>
              <div className="sm:h-[4929px] md:h-[583px] h-[584px] relative w-full">
                <div className="absolute sm:h-[4929px] md:h-[565px] h-[583px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-blue_gray-100_3f border border-blue-100 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <List
                      className="flex flex-col gap-[7px] items-center mb-[18px] mt-8 w-[99%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
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
                          className="ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[108px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Declined
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[67px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1
                        </Text>
                        <Text
                          className="mb-0.5 ml-7 sm:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          20/10/2022
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[51px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          RAHI Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[113px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          ABC Acc
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          1000.00
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[131px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[104px] sm:mt-0 mt-0.5 text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Approved
                        </Text>
                        <Text
                          className="mb-0.5 sm:ml-[0] ml-[62px] text-base text-black-900"
                          size="txtPoppinsRegular16Black900"
                        >
                          Nil
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="absolute bg-blue-100 border border-blue-100 border-solid flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto p-[7px] rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full">
                    <Text
                      className="mb-0.5 sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Sl No.
                    </Text>
                    <Text
                      className="mb-0.5 ml-9 sm:ml-[0] sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Date{" "}
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[35px] sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Account Name
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[82px] sm:mt-0 mt-2 text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Pay To
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[125px] sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Amount
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[88px] sm:mt-0 mt-[7px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Description
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[63px] sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Status
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[42px] sm:mt-0 mt-[5px] text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      Remarks
                    </Text>
                  </div>
                </div>
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] left-[5%] my-auto w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] left-[15%] my-auto w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] left-[47%] my-auto w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] left-[29%] my-auto w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] my-auto right-[36%] w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] my-auto right-[21%] w-px" />
                <Line className="absolute bg-blue-100 h-[583px] inset-y-[0] my-auto right-[10%] w-px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GPaymentListPage;
