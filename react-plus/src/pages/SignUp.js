import React from "react";
import { Grid, Text, Input, Button } from "../elements/index";

const SignUp = (props) => {
    return (
        <React.Fragment>
            <Grid padding="16px">
                <Text size="32px" bold>
                    회원가입
                </Text>

                <Grid padding="16px 0px">
                    <Input
                        label="아이디"
                        placeholder="아이디를 입력해주세요"
                        _onChange={() => {
                            console.log("!!");
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="닉네임"
                        placeholder="닉네임을 입력해주세요"
                        _onChange={() => {
                            console.log("!!");
                        }}
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패스워드"
                        placeholder="패스워드를 입력해주세요"
                        _onChange={() => {
                            console.log("!!");
                        }}
                        type="password"
                    />
                </Grid>
                <Grid padding="16px 0px">
                    <Input
                        label="패드워드 확인"
                        placeholder="패스워드를 다시 입력해주세요"
                        _onChange={() => {
                            console.log("!!");
                        }}
                        type="password"
                    />
                </Grid>
                <Button text="회원가입"></Button>
            </Grid>
        </React.Fragment>
    );
};

SignUp.defaultProps = {};

export default SignUp;
