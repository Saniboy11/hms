import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const GAddDoctorBasicInfoPage = () => {
  const navigate = useNavigate();

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
              <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-[17px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-9"
                    src="images/img_car_indigo_900.svg"
                    alt="car"
                  />
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
          <div className="flex md:flex-1 flex-col gap-[18px] justify-start w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex md:flex-1 flex-col gap-4 justify-start md:mt-0 mt-[41px] w-[14%] md:w-full">
                <Img
                  className="h-[232px] md:h-auto object-cover w-[232px]"
                  src="images/img_medicalvideoc.png"
                  alt="medicalvideoc"
                />
                <Text
                  className="md:ml-[0] ml-[27px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Basic Details
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[39px] md:mt-0 mt-[60px] w-[12%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Add Doctor
                </Text>
                <div className="flex flex-row items-center justify-between mt-1 w-full">
                  <Text
                    className="text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Doctors
                  </Text>
                  <Img
                    className="h-[19px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Add Doctor
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[1017px] p-[3px] w-[13%] md:w-full">
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
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px] w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-3/4 md:w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Title
                </Text>
                <Text
                  className="md:ml-[0] ml-[409px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  First Name
                </Text>
                <Text
                  className="md:ml-[0] ml-[357px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Last Name
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-1 w-full">
                <Input
                  name="groupSeventeen"
                  placeholder="Select Title"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex flex-1 pl-[25px] pr-[18px] py-2.5 rounded w-full"
                  suffix={
                    <div className="h-[13px] mt-0.5 mb-1 ml-[35px] w-[13] bg-black-900_87">
                      <Img
                        className="h-[13px] w-[13px] my-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="groupTwelve"
                  placeholder="Enter First Name"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                  type="text"
                ></Input>
                <Input
                  name="groupFive"
                  placeholder="Enter Last Name"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                  type="text"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-4 w-[73%] md:w-full">
                <Text
                  className="md:mt-0 mt-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Specialization
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[331px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Email Address
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[329px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Mobile
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[3px] w-full">
                <Input
                  name="groupFifteen"
                  placeholder="Select Specialization"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex flex-1 pb-[9px] pl-[25px] pr-[18px] pt-3 rounded w-full"
                  suffix={
                    <div className="h-[13px] mt-px mb-[5px] ml-[35px] w-[13] bg-black-900_87">
                      <Img
                        className="h-[13px] w-[13px] my-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="groupNine"
                  placeholder="Enter Email address"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                  type="email"
                ></Input>
                <Input
                  name="groupFour"
                  placeholder="Enter mobile number"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                  type="number"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-4 w-[77%] md:w-full">
                <Text
                  className="mb-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Date of Birth
                </Text>
                <Text
                  className="md:ml-[0] ml-[344px] md:mt-0 mt-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Age
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[410px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Marital Status
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-0.5 w-full">
                <Input
                  name="groupThirteen"
                  placeholder="Select Date of Birth"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex flex-1 pl-[25px] pr-[15px] py-2.5 rounded w-full"
                  suffix={
                    <div className="ml-[35px] w-full bg-gray-900_87_01 my-[3px]">
                      <Img
                        className="w-full my-auto"
                        src="images/img_calendar_gray_900_02.svg"
                        alt="calendar"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  name="groupSix"
                  placeholder="Age"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pb-2 pl-[25px] pr-[35px] pt-[13px] rounded w-full"
                ></Input>
                <Input
                  name="groupThree"
                  placeholder="Select Marital Status"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex flex-1 pl-[25px] pr-[19px] py-2.5 rounded w-full"
                  suffix={
                    <div className="h-[13px] ml-[35px] w-[13] bg-black-900_87 my-[3px]">
                      <Img
                        className="h-[13px] w-[13px] my-auto"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <Text
                className="mt-[71px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Address Details
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[17px] w-[71%] md:w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Door No.
                </Text>
                <Text
                  className="md:ml-[0] ml-[375px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Area / Locality
                </Text>
                <Text
                  className="md:ml-[0] ml-[327px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  City
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[3px] w-full">
                <Input
                  name="groupSixteen"
                  placeholder="Enter Door No."
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                ></Input>
                <Input
                  name="groupEleven"
                  placeholder="Enter Area / Locality"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                ></Input>
                <Input
                  name="groupTen"
                  placeholder="Enter City"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pb-[9px] pl-[25px] pr-3 pt-3 rounded w-full"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-4 w-[74%] md:w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  State
                </Text>
                <Text
                  className="mb-0.5 md:ml-[0] ml-[400px] text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Pincode
                </Text>
                <Text
                  className="md:ml-[0] ml-[377px] md:mt-0 mt-0.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Country
                </Text>
              </div>
              <div className="gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-0.5 w-full">
                <Input
                  name="groupFourteen"
                  placeholder="Enter State"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                ></Input>
                <Input
                  name="groupEight"
                  placeholder="Enter Pincode"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pl-[25px] pr-3 py-2.5 rounded w-full"
                  type="number"
                ></Input>
                <Input
                  name="groupSeven"
                  placeholder="Enter Country"
                  className="leading-[normal] p-0 placeholder:text-gray-400 sm:pl-5 text-[13px] text-gray-400 text-left w-full"
                  wrapClassName="border border-gray-400 border-solid flex-1 pb-2 pl-[25px] pr-3 pt-3 rounded w-full"
                ></Input>
              </div>
              <Button
                className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[110px] md:ml-[0] ml-[594px] mt-[70px] py-[11px] rounded text-[13px] text-center text-white-A700"
                onClick={() => navigate("/gdoctordetails")}
              >
                SUBMIT{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GAddDoctorBasicInfoPage;
