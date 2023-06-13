import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold16Black9006c: "font-poppins font-semibold",
  txtPoppinsMedium20Gray90087: "font-medium font-poppins",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsSemiBold16Bluegray200: "font-poppins font-semibold",
  txtPoppinsMedium32Gray9006c: "font-medium font-poppins",
  txtPoppinsBold8: "font-bold font-poppins",
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtInterRegular7: "font-inter font-normal",
  txtPoppinsRegular14Black9006c: "font-normal font-poppins",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtInterExtraBold55: "font-extrabold font-inter",
  txtInterRegular22: "font-inter font-normal",
  txtInterRegular23: "font-inter font-normal",
  txtInterRegular9: "font-inter font-normal",
  txtInterRegular8: "font-inter font-normal",
  txtPoppinsRegular16Black900: "font-normal font-poppins",
  txtRobotoRomanMedium24: "font-medium font-roboto",
  txtPoppinsRegular13Black900a2: "font-normal font-poppins",
  txtInterRegular10: "font-inter font-normal italic",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold14Lightblue50: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtRobotoRegular14Gray90099: "font-normal font-roboto",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsBold8WhiteA7006c: "font-bold font-poppins",
  txtPoppinsSemiBold20Lightgreen700: "font-poppins font-semibold",
  txtPoppinsMedium32Indigo900: "font-medium font-poppins",
  txtPoppinsRegular23: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsBold50: "font-bold font-poppins",
  txtInterRegular55: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsMedium16Gray9006c: "font-medium font-poppins",
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtInterRegular40: "font-inter font-normal",
  txtPoppinsBold13: "font-bold font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsSemiBold70: "font-poppins font-semibold",
  txtPoppinsSemiBold14Black9006c: "font-poppins font-semibold",
  txtPoppinsMedium13: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium11: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsSemiBold16Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular13Black90099: "font-normal font-poppins",
  txtInterRegular45: "font-inter font-normal",
  txtPoppinsSemiBold32Lightgreen700: "font-poppins font-semibold",
  txtPoppinsSemiBold16Gray90002: "font-poppins font-semibold",
  txtPoppinsMedium18Black900: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsMedium12Black900: "font-medium font-poppins",
  txtInterRegular30: "font-inter font-normal",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsMedium12Black90099: "font-medium font-poppins",
  txtPoppinsRegular14RedA700: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRomanBold48: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
