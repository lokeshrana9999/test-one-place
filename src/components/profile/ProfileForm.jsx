import React, { useState } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
} from "../form";
import { withFormik } from "formik";
import { AiFillEdit } from "react-icons/ai";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import {
  Input,
  Form,
  Alert,
  InputArea,
  RenderUpload,
  Button as WebButton,
} from "../look/web";
import { Button, WhiteSpace } from "../look/mobile";

const ProfileFormContainer = styled.div`
  color: white;
  padding: 50px 26px 32px;
  opacity: 0.88;
  border-radius: 20px;
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89); */
  background-color: transparent;
`;

const Heading = styled.h1`
  font-family: Circular Std Medium;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const LargeHeadingComponent = styled.div`
  font-family: CircularStd;
  font-size: 36px;
  font-weight: 900;
`;

const InputStylized = styled(Input)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  font-size: 20px;
  padding: 0 20px;
  caret-color: white;
  color: white;
  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;

const UsernameInputStylized = styled(Input)`
  display: inline;
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 40px !important;
  font-size: 15px;
  padding: 0 10px;
  caret-color: white;
  color: white;
  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;

const InputAreaStylized = styled(InputArea)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 120px !important;
  font-size: 20px;
  padding: 20 20px;
  caret-color: white;
  color: white;
  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;

const RenderUploadStylized = styled(RenderUpload)`
  width: 140px;
  height: 140px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  overflow: hidden;
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
        background: white;
        .ant-upload-list-item-done {
          padding: 0 !important;
          margin: 0 !important;
        }
      }
      .ant-upload-select-picture-card {
        margin: 0;
        width: 100%;
        height: 100%;
        background: white;
        border: 0 !important;

        .ant-upload-text {
          font-family: Circular Std Medium;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          font-size: 20px;
        }
      }
    }
  }
`;

const profileFormSchema = {
  name: [required],
  bio: [required, minLength(4)],
};

const ProfileForm = (props) => {
  const [load, setload] = useState(false);
  const { values, handleSubmit } = props;
  console.log(values);
  return (
    <ProfileFormContainer>
      <Form name="profile" onFinish={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-70px)",
          }}
        >
          <Field
            name="profileImage"
            component={RenderUploadStylized}
            type="text"
            setload={setload}
            label={"Upload Your Photo"}
            value={values.profileImage}
          >
            <Button
              type="primary"
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                zIndex: "10",
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                padding: "0",
              }}
            >
              <AiFillEdit
                size="20"
                style={{ position: "absolute", top: "4px", left: "4px" }}
              />
            </Button>
          </Field>
        </div>
        <WhiteSpace size="md" />
        <WhiteSpace size="md" />
        <Flex type="wrap">
          <Flex.Item style={{flex:1}}>
            {" "}
            <p style={{ color: "white", marginBottom:'20px' }}> oneplace.com/</p>
          </Flex.Item>
          <Flex.Item style={{flex:2}}>
            <Field
              name="username"
              component={UsernameInputStylized}
              type="text"
              // prefix="www.oneplace.me/"
              label={"Username"}
              placeholder="Username"
              value={values.username}
            />
          </Flex.Item>
        </Flex>
        

        <Field
          name="userProfile.firstName"
          component={InputStylized}
          type="text"
          label={"First Name"}
          placeholder="First Name"
          value={values.userProfile.firstName}
        />
        
        <Field
          name="userProfile.lastName"
          component={InputStylized}
          type="text"
          label={"Last Name"}
          placeholder="Last Name"
          value={values.userProfile.lastName}
        />
        
        <Field
          name="bio"
          component={InputAreaStylized}
          type="textarea"
          label={"Tell a few words about yourself "}
          placeholder="Tell a few words about yourself "
          value={values.bio}
        />
        <WhiteSpace size="md" />
        <WhiteSpace size="md" />
        <WebButton type="primary" htmlType="submit" size="large" block>
          Submit
        </WebButton>
      </Form>
    </ProfileFormContainer>
  );
};

const ProfileFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ user }) => {
    return {
      username: user && user.username,
      userProfile: {
        profileImage:
          (user && user.userProfile && user.userProfile.profileImage) || {},
        firstName:
          (user && user.userProfile && user.userProfile.firstName) || "",
        lastName: (user && user.userProfile && user.userProfile.lastName) || "",
        bio: (user && user.userProfile && user.userProfile.bio) || "",
      },
    };
  },

  handleSubmit(values, { props: { onSubmit } }) {
    onSubmit(values);
  },
  validate: (values) => validate(values, profileFormSchema),
  displayName: "ProfileForm", // helps with React DevTools
});

export default withTheme(ProfileFormWithFormik(ProfileForm));
