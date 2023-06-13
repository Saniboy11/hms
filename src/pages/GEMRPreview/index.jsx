import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const GEMRPreviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[77px] items-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="bg-indigo-900 flex flex-col gap-3.5 items-center justify-center md:ml-[0] ml-[7px] md:mt-0 mt-[15px] p-[11px] md:px-5 rounded-[25px] w-[7%] md:w-full">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
                Doctors
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[13px] w-full">
              <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                <Img
                  className="h-10"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
              </Button>
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
                EMR
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mb-[23px] w-[99%] md:w-full">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
                Profile
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[1035px] md:h-[3432px] sm:h-[986px] mr-1.5 md:px-5 relative w-[89%] md:w-full">
          <div className="absolute md:h-[3432px] sm:h-[736px] h-[998px] inset-y-[0] left-[0] my-auto w-[93%] md:w-full">
            <div className="absolute md:h-[3432px] sm:h-[736px] h-[995px] inset-[0] justify-center m-auto w-full">
              <div className="absolute md:h-[443px] sm:h-[504px] h-[843px] left-[0] top-[0] w-[78%] md:w-full">
                <div className="absolute md:h-40 h-[157px] right-[0] top-[3%] w-[79%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-14 justify-start w-full">
                      <Text
                        className="ml-2 md:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_6c"
                        size="txtPoppinsMedium32Gray9006c"
                      >
                        EMR
                      </Text>
                      <div className="flex flex-col items-center justify-between max-w-[938px] md:pr-10 sm:pr-5 pr-[1097px] w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtPoppinsMedium20"
                          >
                            EMR Records
                          </Text>
                          <Text
                            className="text-blue_gray-200 text-xs w-auto"
                            size="txtPoppinsMedium12"
                          >
                            345 available records
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute left-[1%] text-base text-gray-900_6c top-[33%]"
                    size="txtPoppinsMedium16Gray9006c"
                  >
                    EMR
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] left-[0] object-cover top-[0] w-1/5"
                  src="images/img_appointmentofa.png"
                  alt="appointmentofa"
                />
                <div className="absolute bottom-[0] flex flex-col font-inter md:gap-10 gap-[101px] items-center justify-start right-[27%] w-[4%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                        size="txtInterRegular9"
                      >
                        10.10.2022{" "}
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                        size="txtInterRegular7"
                      >
                        Description{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[99px] w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                        size="txtInterRegular9"
                      >
                        10.10.2022{" "}
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                        size="txtInterRegular7"
                      >
                        Description{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[104px] w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                        size="txtInterRegular9"
                      >
                        10.10.2022{" "}
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                        size="txtInterRegular7"
                      >
                        Description{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[100px] w-full">
                      <Text
                        className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                        size="txtInterRegular9"
                      >
                        10.10.2022{" "}
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                        size="txtInterRegular7"
                      >
                        Description{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                      size="txtInterRegular9"
                    >
                      10.10.2022{" "}
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                      size="txtInterRegular7"
                    >
                      Description{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[27%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[10%]">
                <Img
                  className="h-9"
                  src="images/img_frame15.svg"
                  alt="frameFifteen"
                />
                <Img
                  className="h-9 mt-[84px]"
                  src="images/img_frame15.svg"
                  alt="frame301"
                />
                <Img
                  className="h-9 mt-[89px]"
                  src="images/img_frame15.svg"
                  alt="frame313"
                />
                <Img
                  className="h-9 mt-[85px]"
                  src="images/img_frame15.svg"
                  alt="frame325"
                />
              </div>
              <Img
                className="absolute bottom-[14%] h-9 inset-x-[0] mx-auto"
                src="images/img_frame15.svg"
                alt="frame337"
              />
              <div className="absolute bg-blue-100_6c h-[52px] inset-x-[0] mx-auto rounded-tl-[10px] rounded-tr-[10px] top-[26%] w-[99%]"></div>
              <div className="absolute border border-blue-100_6c border-solid bottom-[0] md:h-[3432px] sm:h-[736px] h-[737px] inset-x-[0] mx-auto px-[19px] rounded-tl-[21px] rounded-tr-[20px] w-[99%] md:w-full">
                <div className="absolute flex flex-row gap-9 h-max inset-y-[0] items-start justify-between my-auto right-[2%] w-[9%]">
                  <Line className="bg-blue-100_6c h-[736px] w-px" />
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-5">
                    <Text
                      className="text-base text-black-900_6c"
                      size="txtPoppinsSemiBold16Black9006c"
                    >
                      Activity
                    </Text>
                    <div className="flex flex-col font-inter items-center justify-start w-full">
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[18px] justify-end relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[61px] justify-end mt-[43px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[55px] justify-end mt-[37px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[61px] justify-end mt-[43px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[60px] justify-end mt-[42px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[61px] justify-end mt-[43px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex md:h-14 h-5 justify-end mt-[38px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[61px] justify-end mt-[43px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[57px] justify-end mt-[39px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-100_6c flex h-5 md:h-[61px] justify-end mt-[43px] relative rounded-sm w-full">
                        <Text
                          className="mb-1 mt-auto mx-auto text-[8px] text-black-900"
                          size="txtInterRegular8"
                        >
                          View Patient Page
                        </Text>
                        <div className="absolute bg-indigo-900_6c flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto p-[3px] rounded-sm w-full">
                          <Text
                            className="text-[8px] text-white-A700_6c"
                            size="txtPoppinsBold8WhiteA7006c"
                          >
                            View Patient Page
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-start justify-between left-[3%] my-auto pr-[18px] py-[18px] w-[77%]">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[14%] md:w-full">
                    <div className="flex flex-row gap-[29px] items-start justify-start w-full">
                      <Text
                        className="mb-0.5 text-base text-black-900_6c"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Sl No.
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900_6c text-center"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Patient Id
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          1
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[38px] w-[97%] md:w-full">
                        <Text
                          className="mb-0.5 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[37px] w-[98%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          3
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[39px] w-[97%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          4
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[42px] w-[98%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          5
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[38px] w-[97%] md:w-full">
                        <Text
                          className="mb-0.5 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          6
                        </Text>
                        <Text
                          className="mt-0.5 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[38px] w-[98%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          7
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[39px] w-[97%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          8
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[38px] w-[98%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          9
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-10 w-[99%] md:w-full">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          10
                        </Text>
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          09C3N7
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[10.5px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-[23%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-8 justify-start w-full">
                      <Text
                        className="text-base text-black-900_6c text-center"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Patient Name
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px]">
                        <Text
                          className="text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-11 text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-10 text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[41px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-sm"
                          size="txtPoppinsSemiBold14Black9006c"
                        >
                          Shyam
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[736px] bg-blue-100_6c w-px" />
                    <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                      <Text
                        className="text-base text-black-900_6c"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Diagnosis
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[42px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[38px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[39px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                        <Text
                          className="mt-[37px] text-black-900_6c text-center text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Severe Cold , Lungs blockage
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-6 items-center justify-start mb-16 w-[44%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-[95%] md:w-full">
                      <Text
                        className="mb-0.5 text-base text-black-900_6c"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Medications
                      </Text>
                      <Text
                        className="mb-0.5 text-base text-black-900_6c text-center"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Immunization Dates
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-black-900_6c text-center"
                        size="txtPoppinsSemiBold16Black9006c"
                      >
                        Allergies
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-6 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] ml-14 sm:ml-[0] relative w-[32%] sm:w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] sm:ml-[0] ml-[57px] relative w-[32%] sm:w-full">
                          <div className="h-9 md:h-[34px] m-auto w-full">
                            <div className="h-9 md:h-[34px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame15.svg')",
                                }}
                              >
                                <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                  <div className="flex flex-col items-center justify-start ml-1">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                              <Text
                                className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                size="txtInterRegular9"
                              >
                                10.10.2022{" "}
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                size="txtInterRegular7"
                              >
                                Description{" "}
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] ml-14 sm:ml-[0] relative w-[32%] sm:w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] sm:ml-[0] ml-[57px] relative w-[32%] sm:w-full">
                          <div className="h-9 md:h-[34px] m-auto w-full">
                            <div className="h-9 md:h-[34px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame15.svg')",
                                }}
                              >
                                <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                  <div className="flex flex-col items-center justify-start ml-1">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                              <Text
                                className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                size="txtInterRegular9"
                              >
                                10.10.2022{" "}
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                size="txtInterRegular7"
                              >
                                Description{" "}
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-2 text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] ml-14 sm:ml-[0] relative w-[32%] sm:w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-start justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] sm:ml-[0] ml-[57px] relative w-[32%] sm:w-full">
                          <div className="h-9 md:h-[34px] m-auto w-full">
                            <div className="h-9 md:h-[34px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame15.svg')",
                                }}
                              >
                                <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                  <div className="flex flex-col items-center justify-start ml-1">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                              <Text
                                className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                size="txtInterRegular9"
                              >
                                10.10.2022{" "}
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                size="txtInterRegular7"
                              >
                                Description{" "}
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] ml-14 sm:ml-[0] relative w-[32%] sm:w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] sm:ml-[0] ml-[57px] relative w-[32%] sm:w-full">
                          <div className="h-9 md:h-[34px] m-auto w-full">
                            <div className="h-9 md:h-[34px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame15.svg')",
                                }}
                              >
                                <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                  <div className="flex flex-col items-center justify-start ml-1">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                              <Text
                                className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                size="txtInterRegular9"
                              >
                                10.10.2022{" "}
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                size="txtInterRegular7"
                              >
                                Description{" "}
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] ml-14 sm:ml-[0] relative w-[32%] sm:w-full">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] w-px" />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[9px] text-black-900_6c text-sm"
                          size="txtPoppinsRegular14Black9006c"
                        >
                          Prescription
                        </Text>
                        <Img
                          className="h-[9px] ml-3.5 sm:ml-[0] sm:mt-0 mt-2.5"
                          src="images/img_instagram.svg"
                          alt="instagram"
                        />
                        <Img
                          className="h-[9px] sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5"
                          src="images/img_download.svg"
                          alt="download"
                        />
                        <div className="font-inter h-9 md:h-[34px] sm:ml-[0] ml-[57px] relative w-[32%] sm:w-full">
                          <div className="h-9 md:h-[34px] m-auto w-full">
                            <div className="h-9 md:h-[34px] m-auto w-full">
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                                <Text
                                  className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_frame15.svg')",
                                }}
                              >
                                <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                  <div className="flex flex-col items-center justify-start ml-1">
                                    <Text
                                      className="text-[9px] text-black-900"
                                      size="txtInterRegular9"
                                    >
                                      10.10.2022{" "}
                                    </Text>
                                    <Text
                                      className="text-[7px] text-black-900"
                                      size="txtInterRegular7"
                                    >
                                      Description{" "}
                                    </Text>
                                  </div>
                                  <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                              <Text
                                className="bg-clip-text bg-gradient  text-[9px] text-transparent"
                                size="txtInterRegular9"
                              >
                                10.10.2022{" "}
                              </Text>
                              <Text
                                className="bg-clip-text bg-gradient  text-[7px] text-transparent"
                                size="txtInterRegular7"
                              >
                                Description{" "}
                              </Text>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-[98%]"
                            style={{
                              backgroundImage: "url('images/img_group70.svg')",
                            }}
                          >
                            <div className="flex flex-row items-center justify-start my-1 w-[71%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                              <div className="flex flex-col items-center justify-start ml-1">
                                <Text
                                  className="text-[9px] text-black-900"
                                  size="txtInterRegular9"
                                >
                                  10.10.2022{" "}
                                </Text>
                                <Text
                                  className="text-[7px] text-black-900"
                                  size="txtInterRegular7"
                                >
                                  Description{" "}
                                </Text>
                              </div>
                              <Line className="bg-black-900_32 h-[18px] ml-1 w-px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col font-inter items-center justify-start sm:ml-[0] ml-[47px] w-[22%] sm:w-full">
                          <div className="border border-indigo-900 border-solid flex flex-col items-center justify-start p-[3px] rounded-sm w-full">
                            <div className="flex flex-col items-center justify-start my-0.5 w-full">
                              <div className="flex flex-row items-center justify-evenly w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Eggs
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Soya
                                  </Text>
                                </div>
                                <div className="bg-blue-100_aa flex flex-col items-center justify-start p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Pennicilin
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <div className="bg-blue-100_aa flex flex-col items-center justify-end p-0.5 rounded-[1px]">
                                  <Text
                                    className="text-[5.5px] text-black-900"
                                    size="txtInterRegular55"
                                  >
                                    Tree Nuts
                                  </Text>
                                </div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[22%]"></div>
                                <div className="bg-blue-100 h-3 rounded-[1px] w-[35%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col gap-[18px] items-center justify-start mb-[63px] mr-[3px] w-[11%] md:w-full">
                    <Text
                      className="text-base text-black-900_6c text-center"
                      size="txtPoppinsSemiBold16Black9006c"
                    >
                      Lab Results
                    </Text>
                    <List
                      className="flex flex-col font-inter gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                      <div className="h-[42px] relative w-full">
                        <div className="absolute bottom-[0] flex flex-row items-center justify-between left-[0] w-[92%]">
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1.5 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[11px]"
                                src="images/img_fontistobloodtest.svg"
                                alt="fontistobloodte"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Blood Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                className="h-[15px]"
                                src="images/img_mdiheartplusoutline.svg"
                                alt="mdiheartplusout"
                              />
                            </Button>
                            <Text
                              className="md:ml-[0] ml-[3px] mt-[3px] text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Pressure Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[23%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-[3px] rounded-[12px] w-[25px]">
                              <Img
                                className="h-[17px]"
                                src="images/img_healthiconskidneysoutline.svg"
                                alt="healthiconskidn"
                              />
                            </Button>
                            <Text
                              className="ml-0.5 md:ml-[0] mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Heart Test
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[12%]">
                            <Button className="border border-indigo-900 border-solid flex h-[25px] items-center justify-center p-1 rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_lucidebone.svg"
                                alt="lucidebone"
                              />
                            </Button>
                            <Text
                              className="mt-0.5 text-[4.5px] text-center text-indigo-900"
                              size="txtInterRegular45"
                            >
                              Kidney Test
                            </Text>
                          </div>
                        </div>
                        <div className="absolute h-[42px] inset-y-[0] my-auto right-[0] w-[14%]">
                          <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[42px] m-auto rounded-[21px] w-full"></div>
                          <Img
                            className="absolute bottom-[33%] h-[9px] right-[0] w-[9px]"
                            src="images/img_dashiconsarrowrightalt2.svg"
                            alt="dashiconsarrowr"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[13px] items-center justify-start right-[12%] top-[3%] w-[10%]">
                  <Text
                    className="text-base text-black-900_6c"
                    size="txtPoppinsSemiBold16Black9006c"
                  >
                    Radiology Images
                  </Text>
                  <div className="flex flex-col font-inter items-center justify-start w-[95%] md:w-full">
                    <List
                      className="flex flex-col gap-2 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="h-[53px] my-0 relative w-full">
                        <div className="h-[53px] m-auto w-full">
                          <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[91%]"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    X - RAY
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    CT SCAN
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_One"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    M.R.I
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Two"
                                />
                              </div>
                              <div className="h-[30px] relative w-[15%]">
                                <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                                <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                  <Text
                                    className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    USG{" "}
                                  </Text>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-4 right-[0] w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[3%] rounded-[26px] w-[18%]"></div>
                        </div>
                        <Img
                          className="absolute h-[9px] inset-y-[0] my-auto right-[2%] w-[9px]"
                          src="images/img_dashiconsarrowrightalt2.svg"
                          alt="dashiconsarrowr"
                        />
                      </div>
                      <div className="h-[53px] my-0 relative w-full">
                        <div className="h-[53px] m-auto w-full">
                          <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[86%]"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    X - RAY
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    CT SCAN
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_One"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    M.R.I
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Two"
                                />
                              </div>
                              <div className="h-[30px] relative w-[15%]">
                                <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                                <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                  <Text
                                    className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    USG{" "}
                                  </Text>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-4 right-[0] w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[2%] rounded-[26px] w-[18%]"></div>
                        </div>
                        <Img
                          className="absolute h-[9px] inset-y-[0] my-auto right-[1%] w-[9px]"
                          src="images/img_dashiconsarrowrightalt2.svg"
                          alt="dashiconsarrowr"
                        />
                      </div>
                      <div className="h-[53px] my-0 relative w-full">
                        <div className="h-[53px] m-auto w-full">
                          <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[91%]"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    X - RAY
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    CT SCAN
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_One"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    M.R.I
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Two"
                                />
                              </div>
                              <div className="h-[30px] relative w-[15%]">
                                <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                                <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                  <Text
                                    className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    USG{" "}
                                  </Text>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-4 right-[0] w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[3%] rounded-[26px] w-[18%]"></div>
                        </div>
                        <Img
                          className="absolute h-[9px] inset-y-[0] my-auto right-[2%] w-[9px]"
                          src="images/img_dashiconsarrowrightalt2.svg"
                          alt="dashiconsarrowr"
                        />
                      </div>
                      <div className="h-[53px] my-0 relative w-full">
                        <div className="h-[53px] m-auto w-full">
                          <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[86%]"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    X - RAY
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    CT SCAN
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_One"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    M.R.I
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Two"
                                />
                              </div>
                              <div className="h-[30px] relative w-[15%]">
                                <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                                <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                  <Text
                                    className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    USG{" "}
                                  </Text>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-4 right-[0] w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[2%] rounded-[26px] w-[18%]"></div>
                        </div>
                        <Img
                          className="absolute h-[9px] inset-y-[0] my-auto right-[1%] w-[9px]"
                          src="images/img_dashiconsarrowrightalt2.svg"
                          alt="dashiconsarrowr"
                        />
                      </div>
                      <div className="h-[53px] my-0 relative w-full">
                        <div className="h-[53px] m-auto w-full">
                          <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                              <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[91%]"></div>
                            </div>
                            <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    X - RAY
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    CT SCAN
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_One"
                                />
                              </div>
                              <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                                <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                  <Text
                                    className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    M.R.I
                                  </Text>
                                </div>
                                <Img
                                  className="h-4 w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Two"
                                />
                              </div>
                              <div className="h-[30px] relative w-[15%]">
                                <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                                <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                  <Text
                                    className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                    size="txtInterExtraBold55"
                                  >
                                    USG{" "}
                                  </Text>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-4 right-[0] w-4"
                                  src="images/img_folder.svg"
                                  alt="folder_Three"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[3%] rounded-[26px] w-[18%]"></div>
                        </div>
                        <Img
                          className="absolute h-[9px] inset-y-[0] my-auto right-[2%] w-[9px]"
                          src="images/img_dashiconsarrowrightalt2.svg"
                          alt="dashiconsarrowr"
                        />
                      </div>
                    </List>
                    <div className="bg-white-A700_6c h-1 mt-0.5 rounded-[1px] w-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-[43%] font-inter h-[53px] right-[12%] w-[10%]">
                  <div className="absolute bg-white-A700_6c h-1 inset-x-[0] mx-auto rounded-[1px] top-[0] w-1"></div>
                  <div className="bg-white-A700_6c h-1 mt-1.5 mx-auto rounded-[1px] w-1"></div>
                  <div className="absolute h-[53px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[53px] m-auto w-full">
                      <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[52%]">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start">
                                <div className="bg-white-A700_6c h-1 rounded-[1px] w-1"></div>
                                <div className="bg-white-A700_6c h-1 mt-0.5 rounded-[1px] w-1"></div>
                                <div className="bg-white-A700_6c h-1 mt-0.5 rounded-[1px] w-1"></div>
                                <div className="bg-white-A700_6c h-1 mt-0.5 rounded-[1px] w-1"></div>
                                <div className="bg-white-A700_6c h-1 mt-0.5 rounded-[1px] w-1"></div>
                              </div>
                              <div className="backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] w-[17%]"></div>
                            </div>
                          </div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[4%] w-[26%]"></div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                          <List
                            className="sm:flex-col flex-row gap-1 grid grid-cols-3 w-[82%]"
                            orientation="horizontal"
                          >
                            <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start sm:ml-[0] rounded-sm w-full">
                              <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                <Text
                                  className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                  size="txtInterExtraBold55"
                                >
                                  X - RAY
                                </Text>
                              </div>
                              <Img
                                className="h-4 w-4"
                                src="images/img_folder.svg"
                                alt="folder"
                              />
                            </div>
                            <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start sm:ml-[0] rounded-sm w-full">
                              <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                <Text
                                  className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                  size="txtInterExtraBold55"
                                >
                                  CT SCAN
                                </Text>
                              </div>
                              <Img
                                className="h-4 w-4"
                                src="images/img_folder.svg"
                                alt="folder"
                              />
                            </div>
                            <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start sm:ml-[0] rounded-sm w-full">
                              <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                                <Text
                                  className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                  size="txtInterExtraBold55"
                                >
                                  M.R.I
                                </Text>
                              </div>
                              <Img
                                className="h-4 w-4"
                                src="images/img_folder.svg"
                                alt="folder"
                              />
                            </div>
                          </List>
                          <div className="overflow-x-auto w-[15%]">
                            <div className="h-[30px] relative w-full">
                              <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                              <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                                <Text
                                  className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                  size="txtInterExtraBold55"
                                >
                                  USG{" "}
                                </Text>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-4 right-[0] w-4"
                                src="images/img_folder.svg"
                                alt="folder"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[2%] rounded-[26px] w-[18%]"></div>
                    </div>
                    <Img
                      className="absolute h-[9px] inset-y-[0] my-auto right-[1%] w-[9px]"
                      src="images/img_dashiconsarrowrightalt2.svg"
                      alt="dashiconsarrowr"
                    />
                  </div>
                </div>
                <List
                  className="absolute bottom-[10%] flex flex-col font-inter gap-2 right-[12%] w-[10%]"
                  orientation="vertical"
                >
                  <div className="h-[53px] relative w-full">
                    <div className="h-[53px] m-auto w-full">
                      <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[91%]"></div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                X - RAY
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                CT SCAN
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_One"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                M.R.I
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_Two"
                            />
                          </div>
                          <div className="h-[30px] relative w-[15%]">
                            <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                            <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                USG{" "}
                              </Text>
                            </div>
                            <Img
                              className="absolute bottom-[0] h-4 right-[0] w-4"
                              src="images/img_folder.svg"
                              alt="folder_Three"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[3%] rounded-[26px] w-[18%]"></div>
                    </div>
                    <Img
                      className="absolute h-[9px] inset-y-[0] my-auto right-[2%] w-[9px]"
                      src="images/img_dashiconsarrowrightalt2.svg"
                      alt="dashiconsarrowr"
                    />
                  </div>
                  <div className="h-[53px] relative w-full">
                    <div className="h-[53px] m-auto w-full">
                      <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[86%]"></div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                X - RAY
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                CT SCAN
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_One"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                M.R.I
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_Two"
                            />
                          </div>
                          <div className="h-[30px] relative w-[15%]">
                            <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                            <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                USG{" "}
                              </Text>
                            </div>
                            <Img
                              className="absolute bottom-[0] h-4 right-[0] w-4"
                              src="images/img_folder.svg"
                              alt="folder_Three"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[2%] rounded-[26px] w-[18%]"></div>
                    </div>
                    <Img
                      className="absolute h-[9px] inset-y-[0] my-auto right-[1%] w-[9px]"
                      src="images/img_dashiconsarrowrightalt2.svg"
                      alt="dashiconsarrowr"
                    />
                  </div>
                  <div className="h-[53px] relative w-full">
                    <div className="h-[53px] m-auto w-full">
                      <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[91%]"></div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                X - RAY
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                CT SCAN
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_One"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                M.R.I
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_Two"
                            />
                          </div>
                          <div className="h-[30px] relative w-[15%]">
                            <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                            <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                USG{" "}
                              </Text>
                            </div>
                            <Img
                              className="absolute bottom-[0] h-4 right-[0] w-4"
                              src="images/img_folder.svg"
                              alt="folder_Three"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[3%] rounded-[26px] w-[18%]"></div>
                    </div>
                    <Img
                      className="absolute h-[9px] inset-y-[0] my-auto right-[2%] w-[9px]"
                      src="images/img_dashiconsarrowrightalt2.svg"
                      alt="dashiconsarrowr"
                    />
                  </div>
                  <div className="h-[53px] relative w-full">
                    <div className="h-[53px] m-auto w-full">
                      <div className="absolute md:h-[37px] h-[38px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[37px] h-[38px] inset-y-[0] my-auto right-[0] w-[16%]">
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] my-auto right-[0] w-[58%]"></div>
                          <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[6.00px] h-[37px] inset-y-[0] left-[0] my-auto w-[86%]"></div>
                        </div>
                        <div className="absolute bottom-[8%] flex flex-row items-center justify-evenly left-[0] w-[87%]">
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                X - RAY
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                CT SCAN
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_One"
                            />
                          </div>
                          <div className="border border-indigo-900 border-solid flex flex-col h-[30px] items-center justify-start rounded-sm w-[30px]">
                            <div className="bg-indigo-900 flex flex-col items-center justify-end rounded-tl-sm rounded-tr-sm w-full">
                              <Text
                                className="mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                M.R.I
                              </Text>
                            </div>
                            <Img
                              className="h-4 w-4"
                              src="images/img_folder.svg"
                              alt="folder_Two"
                            />
                          </div>
                          <div className="h-[30px] relative w-[15%]">
                            <div className="border border-indigo-900 border-solid h-[30px] ml-auto my-auto rounded-sm w-[30px]"></div>
                            <div className="absolute bg-indigo-900 flex flex-col items-start justify-end right-[0] rounded-tl-sm rounded-tr-sm top-[0] w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] mt-0.5 text-[5.5px] text-center text-white-A700"
                                size="txtInterExtraBold55"
                              >
                                USG{" "}
                              </Text>
                            </div>
                            <Img
                              className="absolute bottom-[0] h-4 right-[0] w-4"
                              src="images/img_folder.svg"
                              alt="folder_Three"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute backdrop-opacity-[0.5] bg-white-A700_6c blur-[9.00px] h-[53px] inset-y-[0] my-auto right-[2%] rounded-[26px] w-[18%]"></div>
                    </div>
                    <Img
                      className="absolute h-[9px] inset-y-[0] my-auto right-[1%] w-[9px]"
                      src="images/img_dashiconsarrowrightalt2.svg"
                      alt="dashiconsarrowr"
                    />
                  </div>
                </List>
              </div>
            </div>
            <Line className="absolute bg-blue-100_6c bottom-[1%] h-[736px] left-[6%] w-px" />
            <Line className="absolute bg-blue-100_6c bottom-[0] h-[736px] left-[44%] w-px" />
            <Line className="absolute bg-blue-100_6c bottom-[1%] h-[736px] right-[42%] w-px" />
          </div>
          <Img
            className="absolute h-[986px] inset-y-[0] left-[23%] my-auto object-cover w-[42%]"
            src="images/img_1ia3fdhofitdkucpyx3l59w.png"
            alt="1ia3fdhofitdkuc"
          />
          <Img
            className="common-pointer absolute h-[66px] left-[18%] top-[9%] w-[66px]"
            src="images/img_materialsymbol_indigo_900.svg"
            alt="materialsymbol"
            onClick={() => navigate("/gemr")}
          />
          <div className="absolute flex flex-col items-center justify-start p-[3px] right-[0] top-[0] w-[13%]">
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
                <Img className="h-[26px]" src="images/img_eye.svg" alt="eye" />
                <Img
                  className="h-6"
                  src="images/img_checkmark_black_900.svg"
                  alt="checkmark_Four"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GEMRPreviewPage;
