import React, { PureComponent } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button,
        Container, Row, Col, Jumbotron } from 'reactstrap';
import './style.css';

export default class Album extends PureComponent {
    render() {
        return (
            <container>
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Hi, Yujin!!</h1>
                        <p className="lead">This is our photo album. pictures with you.</p>
                    </Jumbotron>
                </div>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/2017-04-16 14.31.42.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>우리 공주님!</CardTitle>
                                <CardSubtitle>2017년 4월 16일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170422_144402.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>우리 커플</CardTitle>
                                <CardSubtitle>2017년 4월 22일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170422_144426.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>우리 커플2</CardTitle>
                                <CardSubtitle>2017년 4월 22일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170422_144436.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>뿌우우우~~~</CardTitle>
                                <CardSubtitle>2017년 4월 22일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170505_183928.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>어린이날 소풍</CardTitle>
                                <CardSubtitle>2017년 5월 5일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170815_144705.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>광복절 소풍(우리 자기 도시락♡)</CardTitle>
                                <CardSubtitle>2017년 8월 15일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
                <Row from>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170617_152552.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>넘나 잘어울리는 것</CardTitle>
                                <CardSubtitle>2017년 6월 17일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170716_165236.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>내생일 뮤지컬 시카고를 보고</CardTitle>
                                <CardSubtitle>2017년 7월 16일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170802_165310.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>우리의 첫 춘천여행</CardTitle>
                                <CardSubtitle>2017년 8월 2일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
                <Row from>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/Screenshot_2017-04-16-22-54-55.png" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>새초롬 우리자기^^</CardTitle>
                                <CardSubtitle>2017년 4월 16일 10시 54분 55초</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/Screenshot_2017-06-16-00-07-16.png" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>입 완전 커!!!</CardTitle>
                                <CardSubtitle>2017년 6월 6일 00시 7분 16초</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/Screenshot_2017-05-30-12-37-12.png" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>세상에서 제일 소중한 약속</CardTitle>
                                <CardSubtitle>2017년 5월 30일 12시 37분 12초</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
                <Row from>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170827_190020.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>잠자는 숲 속의 공주</CardTitle>
                                <CardSubtitle>2017년 8월 27일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170520_115442.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>베스트 드라이버.jpg</CardTitle>
                                <CardSubtitle>2017년 5월 20일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170519_194700.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>내 소중한 사람..</CardTitle>
                                <CardSubtitle>2017년 5월 19일</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>

            </container>
        );
    }
}
