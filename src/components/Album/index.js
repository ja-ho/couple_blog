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
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170422_144402.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170422_144426.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
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
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170505_183928.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_90_rotate" top width="100%" src="./mine/20170815_144705.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg className="img_-90_rotate" top width="100%" src="./mine/1492167093281.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/1497355906107.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
                                <CardText>blah blah blah..</CardText>
                                <Button>Button</Button>
                            </CardBlock>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="./mine/CYMERA_20170514_135709.jpg" alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>CardTitle</CardTitle>
                                <CardSubtitle>Card Subtitle</CardSubtitle>
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
