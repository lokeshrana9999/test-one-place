import React from "react";
import PropTypes from "prop-types";
import { FieldAdapter as Field } from "../../form";
import { Form, Drawer } from "antd";
import { Flex } from "antd-mobile";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import styled, { withTheme } from "styled-components";

import { Input, RenderSelect, Button, Option } from "../web";

const FormItem = Form.Item;

const DrawerWrapperRenderer = styled.div`
  position: relative;
  height: 60px;
  padding: 0px 0px 0px 10px;
  overflow: hidden;
  /* text-align: center; */
  /* display: grid;
  place-items: center; */

  background: transparent;
  border: 1px solid #ebedf0;
  border-radius: 7px;
  margin-bottom: 20px;
  .ant-drawer-mask {
    background-color: transparent !important;
  }
  .ant-drawer-content-wrapper {
    width: 100% !important;
    .ant-drawer-content {
      background: transparent !important;
      .ant-drawer-wrapper-body {
        .ant-drawer-body {
          padding: 0;
          padding-left: 10px;
          background: white !important;
          .social-wrapper {
            /* background: red; */
            scrollbar-width: none; /* Firefox */
            /* -ms-overflow-style: none; */
            /* width: 0px; */
            /* background: transparent;  */
          }
          /* .social-wrapper::-webkit-scrollbar {
          } */
        }
        .ant-drawer-header {
          .ant-drawer-title {
          }
        }
      }
    }
  }
`;

const InputStylized = styled(Input)`
  background: white !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  font-size: 20px;
  padding: 0 10px;
  caret-color: #4643d3;
  color: #4643d3 !important;
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  input {
    background: transparent !important;
    caret-color: white;
    color: #4643d3 !important;
    font-size: 15px;
    /* word-spacing:-3px; */
    font-family: Rubik;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }
  input:focus {
    caret-color: #4643d3;
    color: #4643d3;
    background-color: transparent !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #4643d3;
    caret-color: #4643d3;
    color: #4643d3;
    background-color: transparent !important;
  }
`;

const AddSocialMedia = styled.div`
  color: white;
  padding-left: 20px;
  font-size: 15px;
  /* word-spacing:-3px; */
  font-family: Rubik;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;

class DynamicFieldSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  socialClickHandler = (id) => {
    this.setState({
      visible: false,
    });
    this.add(id);
  };
  add = (id) => {
    const arrayHelpers = this.props.arrayHelpers;
    let obj = {};
    obj = {
      link: "",
      category: id,
    };

    // keys.map((k) => (obj[k.key] = ""));

    arrayHelpers.push(obj);
  };

  render() {
    const drawerOpenState = this.state.visible;
    const { socialMediaCategoryList, name, values, arrayHelpers } = this.props;
    let formItems = null;
    const availableSocialMediaCategoryList = socialMediaCategoryList.filter(
      (item) => !values.find((vall) => vall.category === item._id)
    );
    const getImageUrlById = (idd) => {
      const socObj =
        socialMediaCategoryList &&
        socialMediaCategoryList.find((ss) => ss._id === idd);
      return socObj && socObj.image && socObj.image.url;
    };
    if (values) {
      formItems = values.map((v, indexv) => (
        <FormItem required={false} key={indexv} style={{ marginBottom: "0" }}>
          <Field
            name={`${name}[${indexv}].link`}
            component={InputStylized}
            placeholder={"Link"}
            prefix={
              <img
                src={getImageUrlById(v["category"])}
                alt=""
                width="26px"
                height="26px"
                style={{ marginRight: "10px" }}
              />
            }
            suffix={
              <AiOutlineMinusCircle
                style={{
                  color: "red",
                  fontSize: "30px",
                  width: "40px",
                  marginRight: "-10px",
                }}
                onClick={() => arrayHelpers.remove(indexv)}
              />
            }
            type="text"
            label={`Link`}
            value={v["link"]}
            key={indexv}
          />
        </FormItem>
      ));
    }
    return (
      <div>
        <FormItem label={this.props.label}>
          {formItems}
          {availableSocialMediaCategoryList &&
            availableSocialMediaCategoryList.length !== 0 && (
              <DrawerWrapperRenderer>
                <div
                  style={{ width: "100%", marginTop: "15px" }}
                  align="left"
                  onClick={this.showDrawer}
                >
                  {!drawerOpenState && (
                    <Flex>
                      <Flex.Item style={{ width: "fit-content", flex: 0 }}>
                        <AiOutlinePlusCircle
                          size={26}
                          style={{ color: "white" }}
                        />
                      </Flex.Item>
                      <Flex.Item style={{ flex: 4 }}>
                        <AddSocialMedia>Add Social Media</AddSocialMedia>
                      </Flex.Item>
                    </Flex>
                  )}
                </div>
                <Drawer
                  placement="left"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  getContainer={false}
                  style={{ position: "absolute" }}
                >
                  <div
                    className="social-wrapper"
                    style={{ width: "100%", overflowX: "scroll" }}
                  >
                    <Flex
                      justify="left"
                      style={{ width: "fit-content", marginTop: "13px" }}
                    >
                      <AiOutlineCloseCircle
                        onClick={this.onClose}
                        style={{ color: "#4643D3", marginRight: "10px" }}
                        size={26}
                      />

                      {availableSocialMediaCategoryList.map((socia, key) => (
                        <img
                          src={socia && socia.image && socia.image.url}
                          alt=""
                          width="26px"
                          height="26px"
                          style={{ marginRight: "10px" }}
                          onClick={(e) => this.socialClickHandler(socia._id)}
                        />
                      ))}
                    </Flex>
                  </div>
                </Drawer>
              </DrawerWrapperRenderer>
            )}
        </FormItem>
      </div>
    );
  }
}

DynamicFieldSet.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.array,
  keys: PropTypes.array,
  setload: PropTypes.func,
  buttonText: PropTypes.string,
  arrayHelpers: PropTypes.object,
};

export default withTheme(DynamicFieldSet);
