import React from 'react'
import {Grid, Image, Text} from '../elements/index'
const Post = (props) => {

    return(
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    {/* 여기에 src는 왜 들어간거지? 의문임 */}
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
                
                <div>유저 프로필 / 유저 이름 / 입력 시간 / 작성자인가?(수정버튼) - 이미지/텍스트</div>
                <div>내용 - 텍스트</div>
                <div>이미지 - 이미지</div>
                <div>댓글들 - 텍스트</div>
            </Grid>
                
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info : {
        user_name : "22seop",
        use_profile : "http://dh.aks.ac.kr/Edu/wiki/images/b/b7/%ED%95%91%EA%B5%AC.jpg",
    },
    image_url : "http://dh.aks.ac.kr/Edu/wiki/images/b/b7/%ED%95%91%EA%B5%AC.jpg",
    contents : "핑구네요",
    comment_cnt : 10,
    insert_dt : "2021-08-31 10:00:00",
}

export default Post