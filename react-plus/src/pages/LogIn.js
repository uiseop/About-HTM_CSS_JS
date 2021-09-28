import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { useState } from "react";
import { setCookie,getCookie,deleteCookie } from "../shared/Cookie";

import {useDispatch} from 'react-redux'
import {actionCreators as userActions} from '../redux/modules/user'
const LogIn = (props) => {

    const dispatch = useDispatch();


    const login = () => {
        dispatch()
    };

    return (
        <React.Fragment>
            <Grid padding="16px">
                {/* <Text size="32px" bold>
                    로그인
                </Text>
                <Grid padding="16px 0px">
                    <Input
                        value={id}
                        _onChange = {changeId}
                        label="아이디"
                        placeholder="아이디를 입력하세요"
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        value={pwd}
                        _onChange = {changePw}
                        label="패스워드"
                        placeholder="패스워드를 입력하세요"
                        type="password"
                    />
                </Grid>
                <Button
                    text="로그인하기"
                    _onClick={() => {
                        login()
                    }}
                /> */}
            </Grid>
        </React.Fragment>
    );
};

export default LogIn;
