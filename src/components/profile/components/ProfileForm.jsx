import React, { useState } from "react";
import { withFormik, FieldArray } from "formik";
import { AiFillEdit } from "react-icons/ai";
import { Flex } from "antd-mobile";
// import { Persist } from 'formik-persist'

import styled, { withTheme } from "styled-components";
import * as Yup from "yup";
import { FieldAdapter as Field } from "../../form";
import {
  Input,
  Form,
  Alert,
  InputArea,
  RenderUpload,
  Button as WebButton,
  RenderDynamicFieldSocial,
  RenderUploadWithCrop,
} from "../../look/web";
import { Button, WhiteSpace } from "../../look/mobile";

const ProfileFormContainer = styled.div`
  color: white;
  padding: 50px 26px 32px;
  opacity: 1;
  border-radius: 20px;
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89); */
  background-color: transparent;
  .ant-form-item-extra {
    color: white !important;
  }
`;

const Heading = styled.h1`
  font-family: Rubik;
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
  background: transparent !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  font-size: 15px;
  padding: 0 20px;
  caret-color: white;
  color: white !important;
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  :focus {
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
`;

const UsernameInputStylized = styled(Input)`
  display: inline;
  background: transparent !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 40px !important;
  font-size: 15px;
  padding: 0 10px;
  caret-color: white;
  color: white;
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align:right;
  :focus {
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
`;

const InputAreaStylized = styled(InputArea)`
  background: transparent !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 120px !important;
  font-size: 15px;
  padding: 10px 20px !important;
  caret-color: white;
  color: white;
  font-family: Rubik;
  /* word-spacing: -3px; */
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  :focus {
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
`;

const RenderUploadStylized = styled(RenderUploadWithCrop)`
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
        .ant-upload-list-item-list-type-picture-card {
          padding: 0 !important;
        }
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
          font-family: Rubik;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          font-size: 15px;
        }
      }
    }
  }
`;

const UsernamePrefix = styled.p`
  color: white;
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  /* word-spacing: -3px; */
  margin-top: -4px;
  font-size: 15px;
  text-align: left;
`;
const profileFormSchema = Yup.object().shape({
  userProfile: Yup.object().shape({
    username: Yup.string()
      .required("Required")
      .matches(/^[A-Za-z0-9 ]+$/, "Can only use alphabets and numbers"),
    bio: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
  }),
});

const ProfileForm = (props) => {
  const [load, setload] = useState(false);
  const { values, handleSubmit, socialMediaCategoryList } = props;
  console.log("form values:", values, socialMediaCategoryList);
  return (
    <ProfileFormContainer>
      <Form name="profile" onFinish={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-70px)",
          }}
        >
          <Field
            name="userProfile.profileImage"
            component={RenderUploadStylized}
            aspect={1}
            type="image"
            setload={setload}
            label={"Upload Your Photo"}
            value={values.userProfile.profileImage}
          >
            <Button
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                zIndex: "10",
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                padding: "0",
                color: "#4643D3",
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
          <Flex.Item style={{ flex: 2, marginLeft: "5px" }}>
            <Field
              name="userProfile.username"
              component={UsernameInputStylized}
              type="text"
              // prefix="www.oneplace.me/"
              label={"Username"}
              placeholder="Username"
              value={values.userProfile.username}
            />
          </Flex.Item>
          <Flex.Item style={{ flex: 2 }}>
            {" "}
            <UsernamePrefix> .oneplace.me</UsernamePrefix>
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
          name="userProfile.bio"
          component={InputAreaStylized}
          type="textarea"
          label={"Tell a few words about yourself "}
          placeholder="Tell a few words about yourself "
          value={values.userProfile.bio}
        />
        <FieldArray
          name="userProfile.socialMediaLinks"
          render={(arrayHelpers) => (
            <RenderDynamicFieldSocial
              // quizItem={values}
              arrayHelpers={arrayHelpers}
              values={values.userProfile.socialMediaLinks}
              name="userProfile.socialMediaLinks"
              // quizId={values.id}
              // addSection={addSection}
              // deleteSection={deleteSection}
              // submitQuestion={submitQuestion}
              // deleteQuestion={deleteQuestion}
              // submitSection={submitSection}
              socialMediaCategoryList={socialMediaCategoryList}
            />
          )}
          socialVal={values.userProfile.socialMediaLinks}
          // handleSections={handleSections}
        />
        <WebButton ghost htmlType="submit" size="large" block>
          Submit
        </WebButton>
        {/* <Persist name="profile-edit-form" /> */}
      </Form>
    </ProfileFormContainer>
  );
};

const ProfileFormWithFormik = withFormik({
  enableReinitialize: false,
  mapPropsToValues: ({ user }) => {
    function getSocialMediaLinks(socialM) {
      return {
        category: (socialM && socialM.category && socialM.category._id) || "",
        link: socialM && socialM.link,
      };
    }

    return {
      userProfile: {
        username: user && user.username,
        profileImage:
          (user && user.userProfile && user.userProfile.profileImage) || {},
        firstName:
          (user && user.userProfile && user.userProfile.firstName) || "",
        lastName: (user && user.userProfile && user.userProfile.lastName) || "",
        bio: (user && user.userProfile && user.userProfile.bio) || "",
        socialMediaLinks:
          (user &&
            user.userProfile &&
            user.userProfile.socialMediaLinks &&
            user.userProfile.socialMediaLinks.map(getSocialMediaLinks)) ||
          [],
      },
    };
  },

  handleSubmit(values, { props: { onSubmit, setValues } }) {
    console.log("handleSubmit", values);
    let modifiedValues = values;
    modifiedValues.userProfile.profileImage =
      (values.userProfile &&
        values.userProfile.profileImage &&
        values.userProfile.profileImage._id) ||
      null;
    onSubmit(modifiedValues.userProfile);
  },
  validationSchema: profileFormSchema,
  // validate: (values) => validate(values, profileFormSchema),
  displayName: "ProfileForm", // helps with React DevTools
});

export default withTheme(ProfileFormWithFormik(ProfileForm));
