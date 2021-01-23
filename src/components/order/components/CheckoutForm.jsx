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
import { withFormik } from "formik";
import { FaImages, FaPhotoVideo } from "react-icons/fa";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { WhiteSpace, Switch } from "@look/mobile";
import {
  Input,
  Form,
  Alert,
  InputArea,
  RenderUpload,
  Button,
  RenderUploadWithCrop,
  RenderUploadWithCropUnnested,
} from "@look/web";

const BlockFormContainer = styled.div`
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

const RenderUploadWithCropUnnestedStylized = styled(
  RenderUploadWithCropUnnested
)`
  ${uploadComponentCss}
`;

const blockFormSchema = {
  name: [required, minLength(5), maxLength(50)],
  email: [required, email],
};

const BlockForm = (props) => {
  const addBlockFormRef = useRef(null);
  const [load, setload] = useState(false);
  const { values, handleSubmit, errors, blockCategory, block } = props;
  console.log("blockCategory", props);
  return (
    <BlockFormContainer>
      <Form name="addBlock" ref={addBlockFormRef} onFinish={handleSubmit}>
        <Flex justify="between">
          <Flex.Item>
            <Field
              name="avatar"
              component={RenderUploadWithCropUnnestedStylized}
              type="media"
              fileFormat="image/*"
              aspect={1}
              setload={setload}
              label={
                <React.Fragment>
                  <FaImages size={30} />
                  <br />
                  Upload Avatar
                </React.Fragment>
              }
              value={values.avatar}
            />
          </Flex.Item>
        </Flex>
        <Field
          name="name"
          component={InputStylized}
          type="text"
          label={"Your Name"}
          placeholder="Your Name"
          value={values.name}
        />
        <WhiteSpace size="xl" />
        <Field
          name="email"
          component={InputStylized}
          type="email"
          label={"Email ID"}
          placeholder="Email ID"
          value={values.email}
        />
        <WhiteSpace size="xl" />
        <Button type="primary" block size="large" htmlType="submit">
          Pay &#x20B9; {block && block.price}
        </Button>
      </Form>
    </BlockFormContainer>
  );
};

const BlockFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ initialValues }) => {
    return {
      name: (initialValues && initialValues.name) || "",
      avatar: (initialValues && initialValues.avatar) || "",
      email: (initialValues && initialValues.email) || "",
    };
  },

  // handleSubmit: (values, { props: { onSubmit } }) => {
  // },
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
  // validator:{() => ({})}
  validate: (values) => validate(values, blockFormSchema),
  displayName: "BlockForm", // helps with React DevTools
});

export default withTheme(BlockFormWithFormik(BlockForm));
