import React from "react";
import PropTypes from "prop-types";

import { Form, Upload, Modal } from "antd";

const FormItem = Form.Item;

export default class RenderUpload extends React.Component {
  constructor(props) {
    super(props);

    // To Do Fix this thing
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: props.value ? [props.value] : [],
    };
  }

  onChangeHandler = ({ file, fileList }) => {
    const arrayHelpers = this.props.arrayHelpers;

    if (file.status === "uploading") {
      this.props.setload(true);
    }

    if (file.status == "done") {
      this.props.setload(false);
      if (file.response) {
        let upload_obj = file.response && file.response.upload;
        if (upload_obj) {
          console.log(upload_obj);
          //set value in form
          this.props.input.onChange(upload_obj);
        }
      }
    } else if (file.status == "removed") {
      this.props.setload(false);
      // console.log(file);
      //remove value in form
      this.props.input.onChange("");
    }
    this.setState({ fileList });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  // handlePreview = file => {
  //   this.setState({
  //     previewImage: file.url || file.thumbUrl,
  //     previewVisible: true
  //   });
  // };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const {
      label,
      className,
      children,
      meta,
      handleBlur,
      fileFormat,
      listType,
      customUploadButton,
    } = this.props;
    const imageApiUrl = process.env.REACT_APP_IMAGE_API_URL;

    let validateStatus = "";

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = customUploadButton || (
      <div>
        {/* <Icon type="plus" /> */}
        <div className="ant-upload-text">{label}</div>
      </div>
    );
    return (
      <FormItem
        validateStatus={validateStatus}
        validateStatus={meta.touched && meta.error && "error"}
        extra={meta.touched && meta.error}
      >
        <div className={`clearfix antd-upload-custom-wrapper ${className}`}>
          <Upload
            onFocus={handleBlur}
            action={imageApiUrl}
            listType={listType || "picture-card"}
            fileList={fileList}
            accept={fileFormat}
            onPreview={this.handlePreview}
            onChange={this.onChangeHandler}
          >
            {fileList.length >= 1 ? null : uploadButton}
            {children}
          </Upload>
          {/* <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="image" style={{ width: '100%' }} src={previewImage} />
          </Modal> */}
        </div>{" "}
      </FormItem>
    );
  }
}
RenderUpload.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  setload: PropTypes.func,
  value: PropTypes.string,
};
