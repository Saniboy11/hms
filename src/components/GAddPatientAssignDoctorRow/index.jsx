import React from "react";

import { Button, Img, Text } from "components";

const GAddPatientAssignDoctorRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
          {!!props?.userimage ? (
            <Img
              className="h-[50px] w-[50px]"
              alt="user_Two"
              src="props?.userimage"
            />
          ) : null}
          <div className="flex flex-col items-start justify-start w-auto">
            {!!props?.username ? (
              <Text
                className="text-base text-blue_gray-700 w-auto"
                size="txtPoppinsSemiBold16"
              >
                {props?.username}
              </Text>
            ) : null}
            {!!props?.usersurname ? (
              <Text
                className="text-[13px] text-blue_gray-200 w-auto"
                size="txtPoppinsMedium13"
              >
                {props?.usersurname}
              </Text>
            ) : null}
          </div>
        </div>
        {!!props?.userid ? (
          <Text
            className="md:ml-[0] ml-[73px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {props?.userid}
          </Text>
        ) : null}
        {!!props?.useremail ? (
          <Text
            className="md:ml-[0] ml-[62px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {props?.useremail}
          </Text>
        ) : null}
        {!!props?.userphone ? (
          <Text
            className="md:ml-[0] ml-[87px] text-base text-blue_gray-700"
            size="txtPoppinsSemiBold16"
          >
            {props?.userphone}
          </Text>
        ) : null}
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[92px] w-auto">
          {!!props?.userdate ? (
            <Text
              className="text-base text-blue_gray-700 w-auto"
              size="txtPoppinsSemiBold16"
            >
              {props?.userdate}
            </Text>
          ) : null}
          {!!props?.usertime ? (
            <Text
              className="text-[13px] text-blue_gray-200 w-auto"
              size="txtPoppinsMedium13"
            >
              {props?.usertime}
            </Text>
          ) : null}
        </div>
        {!!props?.userlabel ? (
          <Button className="bg-gray-100_02 cursor-pointer font-medium font-poppins leading-[normal] min-w-[74px] md:ml-[0] ml-[104px] md:mt-0 my-3 py-1 rounded-md text-[11px] text-center text-light_green-700">
            {props?.userlabel}
          </Button>
        ) : null}
        {!!props?.usericon ? (
          <Button className="bg-gray-50 flex h-8 items-center justify-center md:ml-[0] ml-[95px] md:mt-0 my-[9px] p-1.5 rounded-md w-8">
            <Img
              className="h-[19px]"
              alt="arrowright_Two"
              src="props?.usericon"
            />
          </Button>
        ) : null}
      </div>
    </>
  );
};

GAddPatientAssignDoctorRow.defaultProps = {};

export default GAddPatientAssignDoctorRow;
