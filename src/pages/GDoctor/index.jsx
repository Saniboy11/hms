import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const GDoctorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[59px] items-start justify-between max-w-[1880px] mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-1 flex-col gap-[30px] justify-start w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between md:ml-[0] ml-[9px] w-full">
              <Img
                className="h-[232px] md:h-auto md:mt-0 mt-[41px] object-cover w-[232px]"
                src="images/img_medicalvideoc.png"
                alt="medicalvideoc"
              />
              <div className="flex flex-col gap-[22px] justify-start">
                <div className="flex flex-col gap-8 items-start justify-start ml-3.5 md:ml-[0] w-full">
                  <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start mt-[61px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                        size="txtPoppinsMedium32"
                      >
                        Doctors
                      </Text>
                      <Text
                        className="mt-1 text-base text-gray-900_87"
                        size="txtPoppinsMedium16"
                      >
                        Doctors
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[22px] p-[3px] w-[15%]">
                      <div className="flex flex-col gap-2 items-center justify-start mb-[29px] mt-6 w-[99%] md:w-full">
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
                  <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1241px] md:ml-[0] ml-[5px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        List of Doctors
                      </Text>
                      <Text
                        className="text-blue_gray-200 text-xs w-auto"
                        size="txtPoppinsMedium12"
                      >
                        345 available doctors
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[14%]">
                      <Button
                        className="common-pointer bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[165px] px-5 py-2.5 rounded-md"
                        onClick={() => navigate("/gadddoctorbasicinfo")}
                        leftIcon={
                          <Img
                            className="h-5 mr-2"
                            src="images/img_contrast_white_a700.svg"
                            alt="contrast"
                          />
                        }
                      >
                        <div className="font-semibold leading-[normal] text-left text-white-A700 text-xs">
                          Add new Doctor
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[195px] p-2 rounded-md w-[87%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[11px] text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Name
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[201px] text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    ID
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[125px] md:mt-0 mt-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Email
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[175px] text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Phone number
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[90px] text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Date added
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[69px] text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    SPECILISATION
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-[89%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-9 items-start justify-between w-full">
                <Button className="bg-indigo-900 cursor-pointer font-semibold leading-[normal] min-w-[230px] sm:mt-0 mt-[13px] py-2.5 rounded-br-[50px] text-center text-white-A700 text-xl">
                  Doctors List
                </Button>
                <Img
                  className="common-pointer h-[50px] mb-[13px]"
                  src="images/img_group692.svg"
                  alt="group692"
                  onClick={() => navigate("/gdoctordetails")}
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-9 items-start justify-between mt-2.5 w-full">
                <Button
                  className="common-pointer border-[3px] border-indigo-900 border-solid cursor-pointer font-semibold leading-[normal] mb-[7px] min-w-[230px] py-2.5 rounded-[5px] text-center text-indigo-900 text-xl"
                  onClick={() => navigate("/gdoctorone")}
                >
                  Duty Doctors
                </Button>
                <Button
                  className="common-pointer bg-blue_gray-200 cursor-pointer font-medium leading-[normal] min-w-[1240px] md:min-w-full sm:mt-0 mt-[7px] py-4 text-[11px] text-center text-light_green-700"
                  onClick={() => navigate("/gdoctordetails")}
                >
                  ENT
                </Button>
              </div>
              <Img
                className="common-pointer h-[50px] mt-[30px]"
                src="images/img_group694.svg"
                alt="group694"
                onClick={() => navigate("/gdoctordetails")}
              />
              <Img
                className="common-pointer h-[50px] mt-[30px]"
                src="images/img_group695.svg"
                alt="group695"
                onClick={() => navigate("/gdoctordetails")}
              />
              <Img
                className="common-pointer h-[50px] mt-[30px]"
                src="images/img_group696.svg"
                alt="group696"
                onClick={() => navigate("/gdoctordetails")}
              />
              <div className="md:h-20 h-[50px] mt-[30px] relative w-[83%] md:w-full">
                <div className="bg-gray-100_02 flex flex-col h-full items-center justify-end ml-auto mr-[127px] mt-[11px] p-1 rounded-md">
                  <Text
                    className="text-[11px] text-center text-light_green-700"
                    size="txtPoppinsMedium11"
                  >
                    Physio
                  </Text>
                </div>
                <Img
                  className="common-pointer absolute h-[50px] inset-[0] justify-center m-auto"
                  src="images/img_vector_blue_gray_200.svg"
                  alt="vector_Five"
                  onClick={() => navigate("/gdoctordetails")}
                />
              </div>
              <Img
                className="common-pointer h-[50px] mt-[30px]"
                src="images/img_group698.svg"
                alt="group698"
                onClick={() => navigate("/gdoctordetails")}
              />
              <Img
                className="common-pointer h-[50px] mt-[30px]"
                src="images/img_group699.svg"
                alt="group699"
                onClick={() => navigate("/gdoctordetails")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GDoctorPage;
