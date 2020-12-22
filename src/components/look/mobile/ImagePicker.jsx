import React, { Component } from "react";
import { ImagePicker as ADImagePicker } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADImagePicker = styled(ADImagePicker)`
  /* color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  } */
`;

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];


class ImagePicker extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }

  render() {
    const { files } = this.state;
    return (
        <StyledADImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 7}
          multiple={this.state.multiple}
        ></StyledADImagePicker>
    );
  }
}

export default withTheme(ImagePicker);



