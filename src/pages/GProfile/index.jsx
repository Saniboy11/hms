import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text, TextArea } from "components";

const GProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between max-w-[1882px] mx-auto md:px-5 w-full">
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
              <div className="flex flex-col items-center justify-start mt-[68px] w-[73%] md:w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-1 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[50px]"
                    src="images/img_user_indigo_900.svg"
                    alt="user"
                  />
                </Button>
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="h-[254px] md:h-auto md:mt-0 mt-[15px] object-cover w-[254px]"
                src="images/img_analysisstudies.png"
                alt="analysisstudies"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[42px] md:mt-0 mt-[59px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Profile
                </Text>
                <Text
                  className="mt-[5px] text-base text-gray-900_87"
                  size="txtPoppinsMedium16"
                >
                  Profile
                </Text>
                <Text
                  className="mt-[25px] text-base text-gray-900_02"
                  size="txtPoppinsSemiBold16Gray90002"
                >
                  Id: 2128286
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[1111px] p-[3px] w-[13%] md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[82px] mt-5 w-[67%] md:w-full">
              <Img
                className="h-72 md:h-auto rounded-[50%] w-72"
                src="images/img_ellipse450.png"
                alt="ellipse450"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Details
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtPoppinsRegular16"
                  >
                    Title
                  </Text>
                  <Input
                    name="language"
                    placeholder="Mr "
                    className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                    wrapClassName="border border-black-900_87 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtPoppinsRegular16"
                  >
                    First Name
                  </Text>
                  <Input
                    name="group440"
                    placeholder="Brooklyn"
                    className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                    wrapClassName="border border-black-900_87 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtPoppinsRegular16"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="group437"
                    placeholder="K"
                    className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                    wrapClassName="border border-black-900_87 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtPoppinsRegular16"
                  >
                    Admin Id
                  </Text>
                  <Input
                    name="group436"
                    placeholder="2128286"
                    className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                    wrapClassName="border border-black-900_87 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
                    type="number"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                  <Text
                    className="text-base text-gray-900_02"
                    size="txtPoppinsRegular16"
                  >
                    Email
                  </Text>
                  <Input
                    name="email_One"
                    placeholder="brooklyns@mail.com"
                    className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                    wrapClassName="border border-black-900_87 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                    type="email"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[165px] mt-[5px] w-[62%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsMedium32"
              >
                Rahesa
              </Text>
              <Text
                className="md:ml-[0] ml-[248px] md:mt-0 mt-3.5 text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Mobile
              </Text>
              <Input
                name="group434"
                placeholder="(603) 555-0123"
                className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                wrapClassName="border border-black-900_87 border-solid md:ml-[0] ml-[215px] md:mt-0 mt-1 pl-[25px] pr-[35px] py-2.5 rounded w-2/5 md:w-full"
              ></Input>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[153px] mt-2 w-[62%] md:w-full">
              <Text
                className="md:mt-0 mt-1 text-gray-900_87 text-xl"
                size="txtPoppinsMedium20Gray90087"
              >
                System Admin
              </Text>
              <Text
                className="md:ml-[0] ml-[235px] md:mt-0 mt-[9px] text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Date of Birth
              </Text>
              <Input
                name="group433"
                placeholder="29 - Oct - 1999"
                className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                wrapClassName="border border-black-900_87 border-solid md:ml-[0] ml-[170px] pl-[25px] pr-[35px] py-2.5 rounded w-[39%] md:w-full"
              ></Input>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[535px] mt-2.5 w-2/5 md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Age
                </Text>
                <Text
                  className="border border-black-900_87 border-solid pl-[25px] pr-[35px] sm:px-5 py-2.5 rounded text-[13px] text-black-900_a2"
                  size="txtPoppinsRegular13Black900a2"
                >
                  22
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                <Text
                  className="text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Marital Status
                </Text>
                <Input
                  name="group431"
                  placeholder="Single"
                  className="leading-[normal] p-0 placeholder:text-black-900_a2 sm:px-5 text-[13px] text-black-900_a2 text-left w-full"
                  wrapClassName="border border-black-900_87 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                ></Input>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-2.5 w-full">
                <Text
                  className="sm:mt-0 mt-2.5 text-base text-gray-900_02"
                  size="txtPoppinsRegular16"
                >
                  Address
                </Text>
                <TextArea
                  className="border border-black-900_87 border-solid leading-[normal] pb-[30px] pl-[25px] pr-[35px] pt-2.5 sm:px-5 rounded text-[13px] placeholder:text-black-900_a2 text-black-900_a2 text-left"
                  name="group438"
                  placeholder="10, abc, new streert,
Chennai,
Tamil Nadu"
                  name="group438"
                  placeholder={`10, abc, new streert,
Chennai,
Tamil Nadu`}
                ></TextArea>
              </div>
              <Text
                className="md:ml-[0] ml-[133px] mt-[35px] text-[13px] text-white-A700"
                size="txtPoppinsSemiBold13"
              >
                NEXT STEP
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GProfilePage;
