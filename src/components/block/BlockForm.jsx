import React, { useState, useRef } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
  maxLength,
} from "../form";
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
} from "../look/web";

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

const RenderUploadWithCropStylized = styled(RenderUploadWithCrop)`
  ${uploadComponentCss}
`;

const RenderUploadStylized = styled(RenderUpload)`
  ${uploadComponentCss}
`;

const blockFormSchema = {
  title: [required, minLength(5), maxLength(50)],
  thumbnail: [required],
  // media: [required],
  link: [required],
};

const BlockForm = (props) => {
  const addBlockFormRef = useRef(null);
  const [load, setload] = useState(false);
  const { values, handleSubmit, errors, blockCategory, block } = props;
  console.log("blockCategory", props);
  return (
    <BlockFormContainer>
      <Form name="addBlock" ref={addBlockFormRef} onFinish={handleSubmit}>
        <Field
          name="title"
          component={InputStylized}
          type="text"
          label={"Name of The Block"}
          placeholder="Name of The Block"
          value={values.title}
        />

        {blockCategory && blockCategory.isMedia && (
          <React.Fragment>
            <WhiteSpace size="xl" />
            <Field
              name="description"
              component={InputAreaStylized}
              type="text"
              label={"Description of the offering"}
              placeholder="Description of the offering"
              value={values.description}
            />
          </React.Fragment>
        )}
        <WhiteSpace size="xl" />
        <Field
          name="isHighlight"
          component={Switch}
          type="text"
          label={"Is a Highlight"}
          placeholder="Is a Highlight"
          value={values.isHighlight}
        />
        <WhiteSpace size="xl" />
        <Flex justify="between">
          <Flex.Item>
            <Field
              name="thumbnail"
              component={RenderUploadWithCropStylized}
              type="media"
              fileFormat="image/*"
              aspect={1}
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
          {blockCategory && blockCategory.isMedia && (
            <Flex.Item>
              <Field
                name="media"
                component={RenderUploadStylized}
                type="media"
                fileFormat="video/*"
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
          )}
        </Flex>
        {blockCategory && blockCategory.isContent && (
          <React.Fragment>
            <WhiteSpace size="xl" />
            <Flex justify="between">
              <Flex.Item>
                <Field
                  name="content"
                  component={RenderUploadStylized}
                  type="content"
                  fileFormat="*"
                  setload={setload}
                  label={
                    <React.Fragment>
                      <FaPhotoVideo size={30} />
                      <br />
                      Upload content to be mailed
                    </React.Fragment>
                  }
                  value={values.content}
                />
              </Flex.Item>
            </Flex>
          </React.Fragment>
        )}

        {blockCategory && blockCategory.isPayment && (
          <React.Fragment>
            <WhiteSpace size="xl" />
            <Field
              name="isPaymentEnabled"
              component={Switch}
              type="text"
              label={"Payment Enabled"}
              placeholder="Payment Enabled"
              value={values.isPaymentEnabled}
            />
          </React.Fragment>
        )}
        {blockCategory &&
          blockCategory.isPayment &&
          values.isPaymentEnabled && (
            <Field
              name="price"
              component={InputStylized}
              type="number"
              label={"Cost in INR"}
              placeholder="Cost in INR"
              value={values.price}
            />
          )}

        {((blockCategory &&
          blockCategory.isPayment &&
          values.isPaymentEnabled) ||
          !blockCategory ||
          (blockCategory && !blockCategory.isPayment)) && (
          <React.Fragment>
            <WhiteSpace size="xl" />
            <Field
              name="link"
              component={InputStylized}
              type="text"
              label={
                blockCategory && blockCategory.isPayment
                  ? "Paste the payment link"
                  : "Paste a Link"
              }
              placeholder={
                blockCategory && blockCategory.isPayment
                  ? "Paste the payment link"
                  : "Paste a Link"
              }
              value={values.link}
            />
          </React.Fragment>
        )}
        <Button type="primary" block size="large" htmlType="submit">
          Go Live
        </Button>
      </Form>
    </BlockFormContainer>
  );
};

const BlockFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ blockData }) => {
    return {
      thumbnail: (blockData && blockData.thumbnail) || null,
      title: (blockData && blockData.title) || "",
      link: (blockData && blockData.link) || "",
      price: (blockData && blockData.price) || 0,
      question: (blockData && blockData.question) || "",
      media: (blockData && blockData.media) || null,
      isPaymentEnabled: (blockData && blockData.isPaymentEnabled) || true,
      description: (blockData && blockData.description) || "",
      isHighlight: (blockData && blockData.isHighlight) || false,
      content: (blockData && blockData.media) || null,
    };
  },

  // handleSubmit: (values, { props: { onSubmit } }) => {
  // },
  handleSubmit: (values, { props: { onSubmit } }) => {
    let modifiedValues = values;
    modifiedValues.thumbnail = values.thumbnail && values.thumbnail._id;
    modifiedValues.media = values.media && values.media._id;
    onSubmit(modifiedValues);
  },
  // validator:{() => ({})}
  validate: (values) => validate(values, blockFormSchema),
  displayName: "BlockForm", // helps with React DevTools
});

export default withTheme(BlockFormWithFormik(BlockForm));
