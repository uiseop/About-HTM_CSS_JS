import React from "react";
import { Grid, Text, Button } from "../elements";

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid>
                    <Text margin="0px" size="24px" bold>헬로</Text>
                </Grid>
                
                <Grid is_flex>
                    <Button text="로그인" is_margin></Button>
                    <Button text="회원가입" is_margin></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Header.defaultProps = {};

export default Header;