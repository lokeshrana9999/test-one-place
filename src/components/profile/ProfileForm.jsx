import React, { useState } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
} from "../form";
import { withFormik } from "formik";
import {
  AiFillEdit,
} from "react-icons/ai";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "../look/mobile";
import { Input, Form, Alert, InputArea, RenderUpload } from "../look/web";
import { Button} from "../look/mobile";

const ProfileFormContainer = styled.div`
  color: white;
  padding: 50px 26px 32px;
  opacity: 0.88;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);
  background-color: transparent;
`;

const Heading = styled.h1`
  font-family: CircularStdMedium;
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
  font-family: CircularStdMedium;
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
  font-family: CircularStdMedium;
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
      .ant-upload-list-picture-card-container{
          margin: 0;
        width: 100%;
        height: 100%;
        background:white;
      .ant-upload-list-item-done{
        padding:0 !important;
        margin:0 !important;

      }  
      }
      .ant-upload-select-picture-card {
        margin: 0;
        width: 100%;
        height: 100%;
        background:white;
        border:0 !important;
        
        .ant-upload-text {
          font-family: CircularStdMedium;
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
  phoneNumber: [required, phoneNumber],
  otp: [required, minLength(4)],
};

const ProfileForm = (props) => {
  const [load, setload] = useState(false);
  const { values, handleSubmit } = props;
  return (
    <ProfileFormContainer>
      <Form name="profile" onSubmit={handleSubmit}>
        <div style={{ position: "absolute", top: "-80px", left:'50%', transform:'translateX(-70px)' }}>
          <Field
            name="avatar"
            component={RenderUploadStylized}
            type="text"
            setload={setload}
            label={"Upload Your Photo"}
            value={values.avatar}
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
                  padding:'0'
                }}
              >
                <AiFillEdit size="20" style={{position:'absolute', top:'4px', left:'4px'}} />
              </Button>
          </Field>
        </div>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <Field
          name="firstName"
          component={InputStylized}
          type="text"
          label={"First Name"}
          placeholder="First Name"
          value={values.firstName}
        />
        <WhiteSpace size="xl" />
        <Field
          name="lastName"
          component={InputStylized}
          type="text"
          label={"Last Name"}
          placeholder="Last Name"
          value={values.lastName}
        />
        <WhiteSpace size="xl" />
        <Field
          name="bio"
          component={InputAreaStylized}
          type="textarea"
          label={"Tell a few words about yourself "}
          placeholder="Tell a few words about yourself "
          value={values.bio}
        />
      </Form>
    </ProfileFormContainer>
  );
};

const ProfileFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return { avatar: "https://yt3.ggpht.com/yti/ANoDKi5f9agr7oQdzZxVZZUk2_twBPhEUtrC3Rom4Jj9fg=s88-c-k-c0x00ffffff-no-rj-mo", firstName: "", lastName: "", bio: "" };
  },

  handleSubmit(values, { props: { onSubmit } }) {
    // console.log(values);
  },
  validate: (values) => validate(values, profileFormSchema),
  displayName: "ProfileForm", // helps with React DevTools
});

export default withTheme(ProfileFormWithFormik(ProfileForm));
