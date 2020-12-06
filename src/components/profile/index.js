import React, { Component } from "react";
import Avatar from "react-avatar";
import { Flex, Button } from "antd-mobile";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import PageLayout from "../look/PageLayout";
import styles from "../../styles/profile.css";
// console.log(FacebookOutlined);
class Profile extends Component {
  render() {
    return (
      <div>
        <PageLayout>
          <div
            style={{
              paddingTop: "70px",
              paddingBottom: "24px",
            }}
            align="center"
          >
            <Avatar
              size="150"
              round={true}
              src="https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c"
            />
          </div>
          <h1 className={styles.profileName}>Hugo</h1>
          <p className={styles.profileAbout}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <br />
          <Flex justify="between" style={{ width: "100%" }}>
            <Flex.Item>
              <div align="center">
                <AiFillFacebook size="40" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiFillInstagram size="40" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiFillLinkedin size="40" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiOutlineWhatsApp size="40" />
              </div>
            </Flex.Item>
          </Flex>
          <br />

          <Button type="primary">Join My Super Fam</Button>
          <br />
          <Flex justify="between" style={{ width: "100%" }}>
            <Flex.Item>
              <p align="center">
                {`16627 Visits`} 
              </p>
            </Flex.Item>
            <Flex.Item>
            <p align="center">
                {`1662 Super Fans`} 
              </p>
            </Flex.Item>
            
          </Flex>
        </PageLayout>
      </div>
    );
  }
}
export default Profile;
