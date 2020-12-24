import React, { useState, useRef } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
} from "../form";
import { withFormik } from "formik";
import { FaImages, FaPhotoVideo } from "react-icons/fa";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "../look/mobile";
import {
  Input,
  Form,
  Alert,
  InputArea,
  RenderUpload,
  Button,
} from "../look/web";

const ProfileFormContainer = styled.div`
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
  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  height: 60px !important;
  padding: 0 20px;
  font-size: 20px;
  /* background: transparent;
  caret-color: white;
  color: white;
   */
`;

const InputAreaStylized = styled(InputArea)`
  /* background: transparent;
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
  font-style: normal; */
`;

const RenderUploadStylized = styled(RenderUpload)`
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
  title: [required, minLength(5)],
  thumbnail: [required],
  media: [required],
  link: [required],
  description: [required, minLength(7)],
};

const ProfileForm = (props) => {
  const addBlockFormRef = useRef(null);
  const [load, setload] = useState(false);
  console.log("profileform", props);
  const { values, handleSubmit, errors } = props;
  const finish = (valu) => {
    console.log("finish", valu);
  };
  return (
    <ProfileFormContainer>
      <Form
        name="addBlock"
        ref={addBlockFormRef}
        onFinish={handleSubmit}
      >
        <Field
          name="title"
          component={InputStylized}
          type="text"
          label={"Name of The Block"}
          placeholder="Name of The Block"
          value={values.title}
        />
        <WhiteSpace size="xl" />
        <Field
          name="description"
          component={InputStylized}
          type="text"
          label={"Description"}
          placeholder="Description"
          value={values.description}
        />
        <WhiteSpace size="xl" />
        <Field
          name="link"
          component={InputStylized}
          type="text"
          label={"Paste a Link"}
          placeholder="Paste a Link"
          value={values.link}
        />
        <WhiteSpace size="xl" />

        <Flex justify="between">
          <Flex.Item>
            <Field
              name="thumbnail"
              component={RenderUploadStylized}
              type="text"
              setload={setload}
              label={
                <React.Fragment>
                  <FaImages size={30} />
                  <br />
                  Upload Thumbnail
                </React.Fragment>
              }
              value={values.thumbnail}
            />
          </Flex.Item>
          <Flex.Item>
            <Field
              name="media"
              component={RenderUploadStylized}
              type="text"
              setload={setload}
              label={
                <React.Fragment>
                  <FaPhotoVideo size={30} />
                  <br />
                  Upload Media
                </React.Fragment>
              }
              value={values.media}
            />
          </Flex.Item>
        </Flex>
        <WhiteSpace size="xl" />
        <Button type="primary" block size="large" htmlType="submit">
          Go Live
        </Button>
      </Form>
    </ProfileFormContainer>
  );
};

const ProfileFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return {
      thumbnail: "",
      title: "",
      description: "",
      link: "",
      price: 0,
      question: "",
      media: "",
    };
  },

  // handleSubmit: (values, { props: { onSubmit } }) => {
  // },
  handleSubmit: (values, { setSubmitting }) => {
    console.log("handleSubmit", values);

  },
  // validator:{() => ({})}
  validate: (values) => validate(values, profileFormSchema),
  displayName: "ProfileForm", // helps with React DevTools
});

export default withTheme(ProfileFormWithFormik(ProfileForm));
