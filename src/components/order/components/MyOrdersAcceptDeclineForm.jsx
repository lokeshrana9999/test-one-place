import React, { useState, useRef } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
  maxLength,
  email,
} from "@form";
import { Divider } from "antd";
import { withFormik } from "formik";
import { FaImages, FaPhotoVideo } from "react-icons/fa";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { WhiteSpace, Switch } from "@look/mobile";
import { Input, Form, Alert, InputArea, RenderUpload, Button } from "@look/web";
import { orderStates } from "../constants";

const PaymentConfirmationUploadFormContainer = styled.div`
  /* color: white;
  padding: 50px 26px 32px;
  opacity: 0.88;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);
  background-color: transparent; */
`;

const Heading = styled.h1`
  /* font-family: CircularStdMedium;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff; */
`;

const LargeHeadingComponent = styled.div`
  /* font-family: CircularStd;
  font-size: 36px;
  font-weight: 900; */
`;

const InputStylized = styled(Input)`
  border: solid 2px #d8d8d8;
  border-radius: 7px;
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  height: 60px !important;
  padding: 0 20px;
  font-size: 15px;
  /* background: transparent;
  caret-color: white;
  color: white;
   */
`;

const InputAreaStylized = styled(InputArea)`
  background: white !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 120px !important;
  font-size: 15px;
  padding: 10px 20px !important;
  caret-color: black;
  color: black;
  font-family: Rubik;
  /* word-spacing: -3px; */
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  :focus {
    caret-color: black;
    color: black;
    background-color: white !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
    caret-color: black;
    color: black;
    background-color: white !important;
  }
`;

const uploadComponentCss = `
  width: 140px;
  height: 140px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ebebeb;
  overflow: hidden;
  margin: auto;
  .ant-upload-picture-card-wrapper {
    width: 100%;
    height: 100%;
    .ant-upload-list-picture-card {
      width: 100%;
      height: 100%;
      .ant-upload-list-picture-card-container {
        margin: 0;
        width: 100%;
        height: 100%;
        background: #ebebeb;
        .ant-upload-list-item-done {
          padding: 0 !important;
          margin: 0 !important;
        }
      }
      .ant-upload-select-picture-card {
        margin: 0;
        width: 100%;
        height: 100%;
        background: #ebebeb;
        border: 0 !important;

        .ant-upload-text {
          padding: 10px;
          font-family: Rubik;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          font-size: 20px;
        }
      }
    }
  }
`;

const DividerStyled = styled(Divider)`
  :after {
    border-top: 1px solid white !important;
  }
  :before {
    border-top: 1px solid white !important;
  }
`;

const paymentConfirmationUploadFormSchema = {
  // name: [required, minLength(5), maxLength(50)],
};

const PaymentConfirmationUploadForm = (props) => {
  const addPaymentConfirmationUploadFormRef = useRef(null);
  const [load, setload] = useState(false);
  const { values, handleSubmit, setFieldValue } = props;
  console.log("blockCategory", props);
  return (
    <PaymentConfirmationUploadFormContainer>
      <Form
        name="paymentconfirmationupload"
        ref={addPaymentConfirmationUploadFormRef}
        onFinish={handleSubmit}
      >
        <WhiteSpace size="xl" />
        <Button
          type="primary"
          // disabled={values.paymentScreenshot === ""}
          block
          size="large"
          htmlType="submit"
          onClick={() => {
            setFieldValue("status", orderStates.COMPLETED);
          }}
        >
          Accept Order
        </Button>
        <WhiteSpace size="xl" />
        <DividerStyled style={{ color: "white" }}>Or...</DividerStyled>
        <Field
          name="declineReason"
          component={InputAreaStylized}
          type="textarea"
          label={"Reason for decline"}
          placeholder="Reason for decline"
          value={values.declineReason}
        />

        <Button
          type="danger"
          disabled={values.declineReason === ""}
          block
          size="large"
          htmlType="submit"
          onClick={() => {
            setFieldValue("status", orderStates.DECLINED);
          }}
        >
          Decline Order
        </Button>
      </Form>
    </PaymentConfirmationUploadFormContainer>
  );
};

const PaymentConfirmationUploadFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return {
      declineReason: "",
      status: "",
    };
  },

  // handleSubmit: (values, { props: { onSubmit } }) => {
  // },
  handleSubmit: (values, { props: { onSubmit } }) => {
    // let modifiedValues = values;
    console.log("handleSubmit", values);
    onSubmit(values);
  },
  // validator:{() => ({})}
  validate: (values) => validate(values, paymentConfirmationUploadFormSchema),
  displayName: "PaymentConfirmationUploadForm", // helps with React DevTools
});

export default withTheme(
  PaymentConfirmationUploadFormWithFormik(PaymentConfirmationUploadForm)
);
