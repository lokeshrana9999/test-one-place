import React from "react";
import PropTypes from "prop-types";

import { Form, Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";

const FormItem = Form.Item;

export default class RenderUpload extends React.Component {
  constructor(props) {
    super(props);

    // To Do Fix this thing
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: props.value ? [{ url: props.value }] : [],
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
        let url = file.response.upload && file.response.upload.url;
        if (url) {
          // console.log(url);
          //set value in form
          this.props.input.onChange(url);
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
    // { input, label, meta: { touched, error }, defaultFileList }) = this.props
    // const touched = this.props.meta.touched;
    // const error = this.props.meta.error;
    const {
      label,
      className,
      children,
      meta,
      handleBlur,
      aspect,
      fileFormat,
      value,
    } = this.props;
    // const input = this.props.input;
    // console.log(input);
    // const defaultFileList = this.props.defaultFileList;

    // const cloudinary_url = 'https://api.cloudinary.com/v1_1/nodejs-starter-kit/image/upload';
    // const cloudinary_data = { upload_preset: 'hycdtdxe' };

    // const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    // const cloudinary_data = { upload_preset: 'nxzf2ip6' };
    const imageApiUrl = process.env.REACT_APP_IMAGE_API_URL;

    let validateStatus = "";
    // if (touched && error) {
    //   validateStatus = 'error';
    // }
    // let defaultFileList = [];
    // if (this.props.values) {
    //   defaultFileList = this.props.values.map((img, index) => ({
    //     uid: index,
    //     name: 'link',
    //     status: 'done',
    //     url: img.imageUrl,
    //     thumbUrl: img.imageUrl
    //   }));
    // }

    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        {/* <Icon type="plus" /> */}
        <div className="ant-upload-text">{label}</div>
      </div>
    );
    console.log("renderunnested", fileList, value);
    return (
      <FormItem
        validateStatus={validateStatus}
        validateStatus={meta.touched && meta.error && "error"}
        extra={meta.touched && meta.error}
      >
        <div className={`clearfix antd-upload-custom-wrapper ${className}`}>
          <ImgCrop aspect={aspect} grid={true} quality={1} rotate>
            <Upload
              onFocus={handleBlur}
              action={imageApiUrl}
              listType="picture-card"
              defaultFileList={[...fileList]}
              onPreview={this.handlePreview}
              onChange={this.onChangeHandler}
              accept={fileFormat}
            >
              {fileList.length >= 1 ? null : uploadButton}
              {children}
            </Upload>
          </ImgCrop>
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
