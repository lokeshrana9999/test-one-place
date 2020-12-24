import React, { Component } from "react";

import styled, { withTheme } from "styled-components";
import { connect } from 'react-redux'

import { WhiteSpace } from "../look/mobile";
import PageLayout from "../look/PageLayout";
import BlockForm from "./BlockForm";
import {setAccessTokene, setRefreshTokene} from '../../store/appReducer';


const mapDispatchToProps = { setAccessTokene, setRefreshTokene }
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken
  }
}

const PageHead = styled.h1`
  font-family: CircularStdBlack;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  word-spacing: -8px;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

class BlockAddView extends Component {
  state = {
    self: true,
  };

  componentDidMount(){
    this.props.setRefreshTokene('lsdjflsdfjsdlfj');
  }

  render() {
    console.log('this.props', this.props);
    return (
      <PageLayout>
        <WhiteSpace size="xl" />
        <PageHead>Add a new card</PageHead>
        <h2>{this.props.refreshToken}</h2>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <BlockForm />
      </PageLayout>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(BlockAddView));
