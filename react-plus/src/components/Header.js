import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie,deleteCookie } from "../shared/Cookie";
const Header = (props) => {
    const [is_login, setIsLogin] = React.useState(false);
    React.useEffect(() => {
        let cookie = getCookie("user_id");
        console.log(cookie);
        if(cookie) setIsLogin(true)
        else setIsLogin(false)
    },[])

    if (is_login) {
        // 로그인 한 후
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>
                            헬로
                        </Text>
                    </Grid>

                    <Grid is_flex>
                        <Button text="내정보" is_margin></Button>
                        <Button text="알림" is_margin></Button>
                        <Button text="로그아웃" _onClick={()=>deleteCookie("user_id")} is_margin></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    } else {
        // 로그인 하기 전
        return (
            <React.Fragment>
                <Grid is_flex padding="4px 16px">
                    <Grid>
                        <Text margin="0px" size="24px" bold>
                            헬로
                        </Text>
                    </Grid>

                    <Grid is_flex>
                        <Button text="로그인" is_margin></Button>
                        <Button text="회원가입" is_margin></Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
};

Header.defaultProps = {};

export default Header;
